/* Single source for details that appear in several places. The phone number is
   in the top bar, hero, about section, contact block and footer -- it should be
   changed once, here. */

export const site = {
  name: "Meadowbrook Dental",
  tagline: "You'll feel like family here",
  dentist: "Tejal Soni, DDS",
  phone: "(248) 373-0400",
  phoneHref: "tel:+12483730400",
  email: "meadowbrookteeth@gmail.com",
  street: "3421 Five Points Drive",
  locality: "Auburn Hills",
  region: "MI",
  postalCode: "48326",
};

/* Emergency line is the same number as the main line in the Figma file. Left as
   designed -- confirm with the practice whether that is intentional. */

/* Social profiles. `url` stays null until the practice actually creates each
   account: a null renders a non-interactive chip rather than a link to nowhere,
   so nothing focusable-but-dead ships. Fill the url in and it becomes a real
   link with no other change.

   `icon` names a file in public/icons. Where it is null the chip falls back to
   `initial` -- a lettered stand-in, not an approximation of the brand mark.
   Facebook publishes an official SVG under its own brand guidelines and drawing
   one from memory gives a subtly wrong logo, so it waits for the real asset. */
export const social = [
  {
    name: "Facebook",
    initial: "f",
    icon: null as string | null,
    url: null as string | null,
  },
  {
    name: "Yelp",
    initial: "Y",
    icon: "yelp" as string | null,
    url: null as string | null,
  },
  {
    name: "Google",
    initial: "G",
    icon: "google" as string | null,
    url: null as string | null,
  },
];

/* Dr. Soni's full biography, taken from the practice's own previous site
   (Wayback capture of familydentistryofshelby.com, archived locally in
   ~/Documents/Claude/Projects/Dr Soni Dental Website). Kept close to her own
   wording — this is her copy, not ours — with only light edits for flow.

   The old site is Shelby Township; nothing in the biography itself names a
   location, so there was nothing to swap here. What deliberately does NOT
   carry over is that site's address and phone number: 46671 Hayes Road and
   (586) 566-3880 belong to the old practice.

   The homepage carries a condensed version of this in AboutDoctor. */
export const doctorBio = [
  "Dr. Tejal Soni grew up in India and graduated as a dentist in 1996. She practiced in India until 2000, when she moved to the United States. She has been a proud Michigander ever since, and has called Metro Detroit home since the day she arrived.",
  "She returned to study in 2002 at New York University, completing her Doctor of Dental Surgery in 2005 and graduating with honors in special-needs care and implantology. After further education at NYU she was licensed to practice in the State of Michigan, and has been providing dental care here since 2005.",
  "Dr. Soni is certified in Invisalign, and while she thoroughly enjoys every aspect of general dentistry, she especially loves doing root canals that bring her patients comfort. Her favorite part of dentistry is seeing patients free of dental problems — she takes pride in knowing they leave the clinic with the best experience possible and the best treatment for their oral health.",
  "She enjoys lifelong learning and routinely takes classes on the latest dental technology and techniques. Dr. Soni is a member of the American Dental Association and the Michigan Dental Association, and an active member of the Macomb Dental Society.",
  "Dr. Soni grew up with four siblings in India, and shares a special bond with her twin sister — also a dentist, practicing in India. She is proud of the upbringing and the values her parents gave her.",
  /* Reworked from the archived wording. "young son" went because the source
     page is of unknown vintage and he has grown up since; "her boys" went
     because it reads as either Nilesh and Pratham or an unnamed second son.
     "with them" carries the same meaning without the ambiguity, and drops the
     original's doubled "family ... friends and family". */
  "Dr. Soni and her husband Nilesh live in Troy with their son, Pratham. In her free time she likes to watch sports with them and cook for friends and family.",
];

/* The practice's own line, carried over from the previous site. */
export const motto = "Dentistry is our profession, but people are our focus.";

export const nav = [
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "New Patients", href: "/new-patients/" },
  { label: "Contact", href: "/contact/" },
];

/* All seven days, including the closed ones. The Figma file lists Monday to
   Friday only, which now that Wednesday and Friday are closed would leave a
   patient guessing whether the practice opens at the weekend. Saying "Closed"
   answers the question the list is there to answer. */
export const hours = [
  { day: "Monday", short: "Mon.", time: "8am-6pm" },
  { day: "Tuesday", short: "Tue.", time: "8am-6pm" },
  { day: "Wednesday", short: "Wed.", time: "Closed" },
  { day: "Thursday", short: "Thu.", time: "8am-6pm" },
  { day: "Friday", short: "Fri.", time: "Closed" },
  { day: "Saturday", short: "Sat.", time: "Closed" },
  { day: "Sunday", short: "Sun.", time: "Closed" },
];

/* `description` is the homepage card; `detail` is the section on /services/.
   Both live here so the four offerings cannot drift apart between the two
   pages, and `slug` is the anchor the services sub-nav jumps to.

   Detail copy is condensed from the practice's previous site. Two deliberate
   departures from that source, both flagged in the commit:

   - The old Cosmetic page ran to roughly 1,200 words of claims that cosmetic
     dentistry improves mood, marriages, career focus, weight loss and life
     expectancy, each citing a popular-science article. Those are health
     outcome claims a dental practice would have to substantiate, and they are
     not what someone choosing a dentist is reading for. Cut to what the
     practice actually does.
   - The old Preventive page carried specific decay statistics with no source.
     Repeating unsourced figures as fact is not worth the risk; the actionable
     advice they introduced is kept. */
export const services = [
  {
    slug: "family-dentistry",
    title: "Family Dentistry",
    description:
      "Exams, cleanings, and everyday care for every age, from your child's first visit to your own.",
    detail: {
      paragraphs: [
        "Dr. Soni is trained to treat patients of every age, so your whole family can be seen in one place instead of running between offices. Her patients are treated as an extension of her own family.",
        "She likes to work with parents, children and grandparents together — setting good habits early, and giving everyone someone to set an example for.",
        "At a routine visit she checks every tooth and the tissue around it: gums, tongue and cheeks. She assesses plaque levels, looks for decay and damage, and screens for oral cancer and jaw (TMJ) problems. A first visit may include a full set of X-rays to find cavities, bone loss or anything not visible from the surface.",
        "Whatever she finds, the plan is explained in full before any work starts. Most visits also include a professional cleaning.",
      ],
    },
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description:
      "Invisalign, whitening, veneers, and smile-design consultations to give you confidence.",
    detail: {
      paragraphs: [
        "A smile you are happy to show makes a difference to how you carry yourself. Dr. Soni uses a range of techniques to get you there, whether you have lived with a missing tooth for years or chipped one last week.",
        "Cosmetic work is not only about appearance. An askew tooth or an uneven bite can put extra strain on your teeth and jaw muscles, so evening things out often makes the mouth more comfortable to use as well.",
        "Ask about the results she has achieved for other patients — she is glad to talk them through.",
      ],
    },
  },
  {
    slug: "preventive-dentistry",
    title: "Preventive Dentistry",
    description:
      "Regular checkups and hygiene that stop problems before they start.",
    detail: {
      paragraphs: [
        "Preventive care protects your teeth before problems start, and most decay is preventable.",
        "Regular visits are the part people skip. After nearly three decades, Dr. Soni recognises the warning signs long before they become painful or expensive — often things a patient has not noticed at all.",
        "She will give you the facts and your options, then leave the decision with you.",
      ],
      listIntro: "Small habits that make the biggest difference:",
      list: [
        "Cut back on sugary drinks — pop, energy drinks, sports drinks and processed juices",
        "Brush and floss at least twice a day",
        "Eat more fresh fruit, vegetables and whole grains",
        "Avoid sharing cups, utensils or food, which passes bacteria between people",
        "Ask about any medication or condition that leaves your mouth dry",
        "Xylitol gum and baking-soda rinses help reduce acidity and bad bacteria",
      ],
    },
  },
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    description:
      "Implants, crowns, and root canals that restore comfort and function.",
    detail: {
      paragraphs: [
        "Restorative treatment brings the mouth back to full function. Even with good preventive care it is sometimes needed — accidents and genetics play their part.",
        "Dr. Soni starts with the whole picture rather than the tooth in front of her. A patient's history, experiences and circumstances all contribute to where their teeth are today, and she takes that into account before treating anything.",
        "From there she explains the risk factors and the benefits of each option, so the decision you make is an informed one. Treatments include bone augmentation, gingival recontouring and occlusal therapy.",
      ],
    },
  },
];

/* The Figma paginator shows four of each; the file defines one of each. The
   rest are placeholders so the carousels can be built and tested at their real
   length. Every placeholder is flagged, and anything flagged renders a visible
   badge -- so none of this can reach production unnoticed. Replace the content
   and drop the `placeholder` flag as real material arrives. */

/* Real patient reviews. `quote` may be an array -- each entry renders as its own
   paragraph, so a longer review keeps the pacing its author gave it.

   Order is deliberate. Andrea leads: it is the only one covering both halves of
   the audience this practice sells to -- a child who likes the dentist and an
   anxious adult -- and it closes on a specific thing the practice did rather
   than a general compliment. Chris and Juli are stronger emotionally but both
   open on shame or pain, which is a heavy first thing for a stranger to meet.
   They land better once someone is already reading.

   Wording is the patients' own. The only edits were a misspelling
   ("embarassed") and hyphens standing in for dashes. */
export const testimonials = [
  {
    quote:
      "Dr. Soni goes above and beyond for her patients! She communicates very well with my daughter — I've never met another child who LOVES going to the dentist! She is also very patient with me, as someone who has anxiety going to the dentist. I once lost a temporary crown — she squeezed me into her schedule and made me a new temporary crown in no time.",
    author: "Andrea",
    rating: 5,
  },
  {
    quote:
      "Dr. Soni was the first dentist I ever saw when I had started my own dental plan. I had put it off because of money, so when I did go in I was embarrassed. She didn't shame me or focus on the past, instead focusing on the future of my dental care. I've been seeing her for over 20 years.",
    author: "Chris",
    rating: 5,
  },
  {
    quote: [
      "No dentist ever asked about my history or how I ended up in a 'dental crisis,' which caused embarrassment and fear. I put up with pain rather than face any dentist. My adult kids and husband urged me to see their dentist, Dr. Tejal Soni.",
      "When I couldn't take the pain any longer, I met Dr. Soni. She is everything my kids and husband described: kind, patient, very knowledgeable, skilled, and above all, very caring.",
      "I highly recommend Dr. Soni, especially if you have fears.",
    ],
    author: "Juli",
    rating: 5,
  },
  {
    quote:
      "Dr. Soni and her staff did a great job explaining the dental work I needed as well as all the treatment options. The procedure was painless. Prices were reasonable. Would highly recommend.",
    author: "Joseph L.",
    rating: 5,
  },
];

export const heroPhotos = [
  {
    /* -v2, not a replacement of office-exterior.jpg: /images/* is cached for a
       week and these filenames are not fingerprinted, so overwriting would keep
       serving the old bytes to anyone who had already seen the page. */
    src: "/images/office-exterior-v2.jpg",
    alt: "The Meadowbrook Dental storefront at 3421 Five Points Drive. The practice's green sign sits above the entrance, and the window reads \"You'll feel like family here — new patients welcome\".",
    caption: "3421 Five Points Drive in Auburn Hills, MI",
  },
  {
    src: "/images/placeholder-photo-2.svg",
    alt: "Placeholder — a photo of the practice will replace this.",
    caption: "Reception or waiting area",
    placeholder: true,
  },
  {
    src: "/images/placeholder-photo-3.svg",
    alt: "Placeholder — a photo of the practice will replace this.",
    caption: "A treatment room",
    placeholder: true,
  },
  {
    src: "/images/placeholder-photo-4.svg",
    alt: "Placeholder — a photo of the practice will replace this.",
    caption: "The team",
    placeholder: true,
  },
];
