# Accessibility notes — Meadowbrook Dental

Target: **WCAG 2.1 Level AA**. That is the standard US courts apply to ADA web
claims, and it is what the build is checked against.

## Contrast audit of the Figma design

Measured against the actual backgrounds in the file, not against white.

| Element | Colours | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| Solid button label, light end of gradient | `#ffffff` on `#2c9ca6` | 3.27:1 | 4.5:1 | **FAIL** |
| Solid button label, dark end of gradient | `#ffffff` on `#2f606b` | 6.99:1 | 4.5:1 | pass |
| "GET IN TOUCH" eyebrow, 18px | `#2c9ca6` on `#fbf7f0` | 3.07:1 | 4.5:1 | **FAIL** |
| Hero address link | `#2c9ca6` on `#fbf7f0` | 3.07:1 | 4.5:1 | **FAIL** |
| Outline button border | `#2c9ca6` on `#f4eee4` | 2.84:1 | 3:1 | **FAIL** |
| Body copy | `#363636` on `#fbf7f0` | 11.32:1 | 4.5:1 | pass |
| H1, 56px PT Serif Bold | `#363636` on `#f4eee4` | 10.47:1 | 3:1 | pass |

The ink-on-cream pairings are all comfortable. Every failure is the same root
cause: **the brand teal `#2c9ca6` is too light to carry text or a border.**

### Two more found while building

The table above covers the hero and contact sections. Auditing the remaining
sections turned up two further failures:

| Element | Colours | Ratio | Needs | Result |
| --- | --- | --- | --- | --- |
| Footer links and address | `#ffffff` on `#2c9ca6` | 3.27:1 | 4.5:1 | **FAIL** |
| Footer copyright, 80% opacity | white 80% on `#2c9ca6` | 2.64:1 | 4.5:1 | **FAIL** |
| Form placeholders | `#a6a6a6` on `#ffffff` | 2.43:1 | 4.5:1 | **FAIL** |
| Top bar, white on `#2f606b` | `#ffffff` on `#2f606b` | 6.99:1 | 4.5:1 | pass |

The footer was the significant one — every piece of text in it failed. The
ground moves to `--teal-deep`, where white is 6.99:1, and the copyright runs at
full opacity (at 80% over that ground it is 5.15:1, which passes but leaves
nothing spare).

Placeholders are visible text and carry the same 4.5:1 minimum. `#767676` is the
lightest grey that passes on white; `--placeholder` is set to `#6b6b6b` for a
little headroom.

**The testimonial section keeps `--teal-brand` as its ground.** Every piece of
text on it is 24px or larger, so the 3:1 large-text threshold applies and white
clears it at 3.27:1 — as do the carousel arrows and dots, which need 3:1 as
non-text controls.

**The logotype keeps `--teal-brand` at body weight.** WCAG 1.4.3 exempts text
that is part of a logo or brand name from the contrast minimum. This is the only
place that exemption is relied on.

### Resolution

The goal was to stay as close to `#2c9ca6` as possible while passing AA. Two
things came out of testing that shaped the answer.

**Backgrounds are not the lever.** Contrast against a light background is capped:
`#2c9ca6` on *pure white* is only 3.27:1, so no light surface reaches 4.5:1.
Darkening the cream makes it worse before it makes it better — the curve bottoms
out near 1.18:1 around mid-grey and only clears 4.5:1 once the background is
near-black (`#282828`). Searching for the closest AA-passing teal under
progressively lighter surfaces confirmed the ceiling:

| Surfaces | Closest passing teal | ΔE2000 from brand |
| --- | --- | --- |
| As designed | `#05797d` | 13.13 |
| Warm surfaces lifted to `#fbf7f0` | `#2f7981` | 12.48 |
| All lifted to `#fdfbf7` | `#2e7c85` | 11.30 |
| Pure white | `#2a828b` | 9.02 |

Giving up the entire cream palette buys about 4 ΔE units. Not worth it — the
cream stays.

**The brand teal only fails at small sizes.** It meets the 3:1 threshold that
applies to large text, non-text borders, icon chips and rules. So rather than
replacing it globally, the tokens split by threshold:

- `--teal-brand: #2c9ca6` — unchanged, used wherever 3:1 applies. This is most
  of its visual footprint.
- `--teal: #0b7b81` — used only where 4.5:1 applies: body-size links, small
  labels, button fills under white text, focus rings. ΔE2000 12.13 from brand,
  the closest sRGB colour passing on every surface. 4.72:1 on cream, 5.04:1
  under white.

Two supporting changes make that split work:

1. **Warm surfaces lifted to `#fbf7f0`.** `#f3eee5`, `#f4eee4` and `#edf4ef` sat
   at 2.83–2.93:1 against the brand teal, just under the 3:1 needed for borders
   and large text. Lifting them is barely perceptible and buys the brand teal
   back in those places. `#e5fbfc` is already light enough at 3.05:1.
2. **Eyebrow labels set at 19px instead of 18px.** WCAG's large-text threshold is
   14pt bold = 18.66px; the Figma labels are 18px bold = 13.5pt, just underneath.
   19px crosses it, so they qualify at 3:1 and keep `--teal-brand`.

The button gradient runs `--teal-deep → --teal` so the white label passes along
its whole length. This is the only place the teal visibly shifts.

## Component requirements

### Hero image carousel and testimonial carousel

Carousels are the most common source of accessibility complaints. Both must:

- Not autoplay. If autoplay is added later, a visible pause control is required
  (WCAG 2.2.2).
- Use real `<button>` elements for prev/next and for the paginator dots, each
  with an `aria-label` ("Previous photo", "Go to slide 3").
- Expose the active dot with `aria-current="true"`, not colour alone.
- Announce slide changes through a `aria-live="polite"` region.
- Be operable by keyboard, with a visible focus ring at 3:1 against its
  background.
- Honour `prefers-reduced-motion` — handled globally in `tokens.css`.

Build on CSS scroll-snap rather than a carousel library. Scroll-snap is
keyboard- and screen-reader-accessible by default and degrades to a plain
scrollable row without JS.

### Mobile navigation

- Trigger is a `<button>` with `aria-expanded` and `aria-controls`.
- `Escape` closes it and returns focus to the trigger.
- Focus is trapped in the panel while open.
- The hamburger glyph needs an accessible name; an icon alone is not enough.

### About Us content reorder

The desktop and mobile frames order this section differently. Reordering with
flexbox `order` or `row-reverse` decouples the visual sequence from the DOM
sequence, which fails **1.3.2 Meaningful Sequence** and **2.4.3 Focus Order**.

Rule for this build: source order matches the *mobile* order, and desktop
repositioning is done with CSS Grid `grid-template-areas` on non-focusable
content only (images, headings, paragraphs). If a link or button needs to move,
change the markup instead of the CSS.

### Contact form

- Every input needs a persistent `<label>`. The Figma design shows labels above
  each field, so this is already right — do not collapse them into placeholders.
- Placeholders are supplementary, never the only label.
- Errors are announced, tied to the input with `aria-describedby`, and identify
  the field by name (WCAG 3.3.1).
- Required fields are marked in text, not by colour or an asterisk alone.
- **No reCAPTCHA.** It is an accessibility barrier in itself. Netlify's honeypot
  field handles spam without one.

## Verification

Automated tooling catches roughly a third of real issues. Plan on all three:

1. `axe` / Lighthouse in CI on the built output.
2. A keyboard-only pass — tab through every page, confirm nothing is reachable
   but invisible, and that focus never gets stuck.
3. A VoiceOver pass on the homepage, the nav, both carousels, and the form.
