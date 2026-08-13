"""Structural accessibility checks against the built HTML.

Not a substitute for axe or a screen-reader pass -- it checks the things that
are decidable from markup alone, which is exactly what the skeleton stage is
supposed to get right.
"""
import re
import sys
import pathlib
from html.parser import HTMLParser

DIST = pathlib.Path(__file__).resolve().parent.parent / 'dist'


class Doc(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []          # (tag, attrs dict, position)
        self.headings = []      # (level, text)
        self._h = None
        self._text = []
        self.ids = set()
        self.labels = []        # 'for' values
        self.text_by_tag = {}
        self._stack = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.append((tag, a))
        if a.get('id'):
            self.ids.add(a['id'])
        if tag == 'label' and a.get('for'):
            self.labels.append(a['for'])
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self._h = int(tag[1])
            self._text = []
        self._stack.append(tag)

    def handle_endtag(self, tag):
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6') and self._h:
            self.headings.append((self._h, ''.join(self._text).strip()))
            self._h = None
        if self._stack and self._stack[-1] == tag:
            self._stack.pop()

    def handle_data(self, data):
        if self._h:
            self._text.append(data)
        if self._stack:
            self.text_by_tag.setdefault(self._stack[-1], []).append(data.strip())


def check(path):
    html = path.read_text(encoding='utf-8')
    d = Doc()
    d.feed(html)
    name = str(path.relative_to(DIST))
    problems = []

    # --- lang ---
    if not re.search(r'<html[^>]*\slang=', html):
        problems.append('<html> has no lang attribute (3.1.1)')

    # --- exactly one h1 ---
    h1s = [t for lvl, t in d.headings if lvl == 1]
    if len(h1s) == 0:
        problems.append('no <h1>')
    elif len(h1s) > 1:
        problems.append(f'{len(h1s)} <h1> elements: {h1s}')

    # --- heading order, no skipped levels ---
    prev = 0
    for lvl, text in d.headings:
        if prev and lvl > prev + 1:
            problems.append(f'heading jumps h{prev} -> h{lvl} at "{text[:40]}"')
        prev = lvl

    # --- images have alt ---
    for tag, a in d.tags:
        if tag == 'img' and 'alt' not in a:
            problems.append(f'<img src="{a.get("src", "?")}"> has no alt')

    # --- form controls have a label, or an aria-label ---
    for tag, a in d.tags:
        if tag in ('input', 'textarea', 'select'):
            if a.get('type') in ('hidden', 'submit', 'button'):
                continue
            cid = a.get('id')
            named = (
                (cid and cid in d.labels)
                or a.get('aria-label')
                or a.get('aria-labelledby')
            )
            # the honeypot is intentionally hidden from AT
            inside_hidden = a.get('tabindex') == '-1'
            if not named and not inside_hidden:
                problems.append(
                    f'<{tag} name="{a.get("name", "?")}"> has no label')

    # --- aria-controls / aria-labelledby / aria-describedby point somewhere ---
    for tag, a in d.tags:
        for attr in ('aria-controls', 'aria-labelledby', 'aria-describedby'):
            if attr in a:
                for ref in a[attr].split():
                    if ref not in d.ids:
                        problems.append(
                            f'<{tag}> {attr}="{ref}" points at a missing id')

    # --- landmarks ---
    have = {t for t, _ in d.tags}
    for landmark in ('header', 'main', 'footer', 'nav'):
        if landmark not in have:
            problems.append(f'no <{landmark}> landmark')

    # --- skip link, and its target ---
    m = re.search(r'class="skip-link"\s+href="#([\w-]+)"', html)
    if not m:
        problems.append('no skip link')
    elif m.group(1) not in d.ids:
        problems.append(f'skip link targets #{m.group(1)}, which does not exist')

    # --- buttons have an accessible name ---
    for btn in re.findall(r'<button\b[^>]*>(.*?)</button>', html, re.S):
        stripped = re.sub(r'<[^>]+>', '', btn).strip()
        if not stripped:
            problems.append('a <button> has no text content')

    return name, problems, d


def netlify_form_checks(html, name):
    problems = []
    forms = re.findall(r'<form\b.*?</form>', html, re.S)
    for f in forms:
        if 'data-netlify="true"' not in f:
            problems.append('form is missing data-netlify')
        if not re.search(r'name="form-name"\s+value="contact"', f) and \
           not re.search(r'value="contact"\s+name="form-name"', f):
            problems.append('form is missing the hidden form-name input')
        if 'netlify-honeypot' not in f:
            problems.append('form has no honeypot')
        if 'captcha' in f.lower() or 'recaptcha' in f.lower():
            problems.append('form contains a CAPTCHA')
        for field in re.findall(r'<input\b[^>]*>', f):
            if 'type="hidden"' in field or 'tabindex="-1"' in field:
                continue
            if 'autocomplete=' not in field:
                nm = re.search(r'name="([^"]+)"', field)
                problems.append(
                    f'input "{nm.group(1) if nm else "?"}" has no autocomplete '
                    '(1.3.5, AA)')
    return problems


def asset_checks(html, name):
    """Every root-relative asset a page references must exist in the build.

    A broken src is invisible to the other checks here -- the img still has its
    alt, so the markup looks correct -- and it survives all the way to a
    rendered broken-image icon. This caught /images/dr-soni.jpg on the About
    page after the portrait had been recropped to a -v2 filename.
    """
    problems = []
    refs = set(re.findall(r'<(?:img|source)\b[^>]*\bsrc="(/[^"]+)"', html))
    refs |= set(re.findall(r'url\((?:&quot;|["\']?)(/[^"\')]+)', html))
    for ref in sorted(refs):
        if ref.startswith('//') or ref.startswith('/http'):
            continue
        if not (DIST / ref.lstrip('/')).exists():
            problems.append(f'references a missing asset: {ref}')
    return problems


total = 0
for path in sorted(DIST.rglob('*.html')):
    name, problems, _ = check(path)
    html = path.read_text(encoding='utf-8')
    problems += asset_checks(html, name)
    if '<form' in html:
        problems += netlify_form_checks(html, name)
    total += len(problems)
    mark = 'FAIL' if problems else ' ok '
    print(f'[{mark}] {name}')
    for p in problems:
        print(f'         - {p}')

print()
print(f'{total} problem(s)')
sys.exit(1 if total else 0)
