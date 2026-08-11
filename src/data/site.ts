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

export const testimonials = [
  {
    quote:
      "Dr. Soni and her staff did a great job explaining the dental work I needed as well as all the treatment options. The procedure was painless. Prices were reasonable. Would highly recommend.",
    author: "Joseph L.",
    rating: 5,
  },
  {
    quote:
      "Placeholder review. Replace with a real patient review before launch — ideally one that mentions a different service from the others, so the four together cover the range of care.",
    author: "Patient name",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Placeholder review. Replace with a real patient review before launch — a first-visit or new-patient experience would balance the set well.",
    author: "Patient name",
    rating: 5,
    placeholder: true,
  },
  {
    quote:
      "Placeholder review. Replace with a real patient review before launch — something about the practice itself, rather than a single procedure.",
    author: "Patient name",
    rating: 5,
    placeholder: true,
  },
];

export const heroPhotos = [
  {
    src: "/images/office-exterior.jpg",
    alt: "The Meadowbrook Dental building on Five Points Drive, with parking directly outside the entrance.",
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
