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

export const nav = [
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "New Patients", href: "/new-patients/" },
  { label: "Contact", href: "/contact/" },
];

export const hours = [
  { day: "Monday", short: "Mon.", time: "8-5PM" },
  { day: "Tuesday", short: "Tue.", time: "8-5PM" },
  { day: "Wednesday", short: "Wed.", time: "8-5PM" },
  { day: "Thursday", short: "Thu.", time: "8-5PM" },
  { day: "Friday", short: "Fri.", time: "8-5PM" },
];

export const services = [
  {
    title: "Family Dentistry",
    description:
      "Exams, cleanings, and everyday care for every age, from your child's first visit to your own.",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Invisalign, whitening, veneers, and smile-design consultations to give you confidence.",
  },
  {
    title: "Preventive Dentistry",
    description:
      "Regular checkups and hygiene that stop problems before they start.",
  },
  {
    title: "Restorative Dentistry",
    description:
      "Implants, crowns, and root canals that restore comfort and function.",
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
