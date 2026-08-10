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
export const emergencyPhone = site.phone;
export const emergencyPhoneHref = site.phoneHref;

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

/* The Figma paginator shows four testimonials but only defines this one.
   The remaining three need real copy from the practice before launch. */
export const testimonials = [
  {
    quote:
      "Dr. Soni and her staff did a great job explaining the dental work I needed as well as all the treatment options. The procedure was painless. Prices were reasonable. Would highly recommend.",
    author: "Joseph L.",
    rating: 5,
  },
];

/* Likewise: four dots in the hero paginator, one photo in the file. */
export const heroPhotos = [
  {
    src: "/images/office-exterior.jpg",
    alt: "The Meadowbrook Dental building on Five Points Drive, with parking directly outside the entrance.",
    caption: "3421 Five Points Drive in Auburn Hills, MI",
  },
];
