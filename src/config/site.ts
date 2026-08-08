export type SocialPlatform =
  | "instagram"
  | "facebook"
  | "email"
  | "phone";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
}

export interface Location {
  id: "gloucester" | "westville";
  name: string;
  eyebrow: string;
  address: string;
  phone: string;
  phoneHref: string;
  directionsUrl: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  note: string;
  bookingLabel: string;
  bookingUrl: string;
  secondaryBookingLabel?: string;
  secondaryBookingUrl?: string;
}

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://blessed-studio.netlify.app"
).replace(/\/+$/, "");

export const site = {
  brand: {
    name: "Blessed Hair Studio",
    shortName: "Blessed",
    tagline: "One blessed cut at a time.",
    instagramHandle: "@blessedstudiollc",
    logo: "/images/blessed-logo.jpg",
  },

  seo: {
    title: "Blessed Hair Studio | Gloucester City & Westville, NJ",
    description:
      "Precision haircuts, fades, beard care, kids cuts and more at Blessed Hair Studio in Gloucester City and Westville, New Jersey.",
    url: siteUrl,
  },

  nav: [
    { label: "Locations", href: "#locations" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About", href: "#about" },
  ],

  social: [
    {
      platform: "instagram",
      href: "https://www.instagram.com/blessedstudiollc/",
      label: "Blessed Hair Studio on Instagram",
    },
    {
      platform: "facebook",
      href: "https://www.facebook.com/blessedhairstudionj/",
      label: "Blessed Hair Studio on Facebook",
    },
  ] as SocialLink[],

  locations: [
    {
      id: "gloucester",
      name: "Gloucester City",
      eyebrow: "The original studio",
      address: "12 S Broadway Ave, Gloucester City, NJ 08030",
      phone: "(856) 261-8243",
      phoneHref: "tel:+18562618243",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=12+S+Broadway+Ave+Gloucester+City+NJ+08030",
      image: "/images/gloucester-cut-1.jpg",
      imageAlt: "Precision haircut from the Blessed Hair Studio portfolio",
      imageWidth: 853,
      imageHeight: 1849,
      note: "4.9 on Booksy · 100+ reviews",
      bookingLabel: "Book Gloucester",
      bookingUrl:
        "https://booksy.com/en-us/812065_blessed-hair-studio_barber-shop_28452_gloucester-city",
    },
    {
      id: "westville",
      name: "Westville",
      eyebrow: "Our newest location",
      address: "200 Gateway Blvd, Westville, NJ 08093",
      phone: "(856) 349-7221",
      phoneHref: "tel:+18563497221",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=200+Gateway+Blvd+Westville+NJ+08093",
      image: "/images/instagram-DXzdItPFVK6.jpg",
      imageAlt: "Blessed Hair Studio team members together",
      imageWidth: 640,
      imageHeight: 640,
      note: "Availability varies by barber · Check Booksy",
      bookingLabel: "Book with Hann",
      bookingUrl:
        "https://booksy.com/en-us/786668_hann-the-barber_barber-shop_28555_westville",
      secondaryBookingLabel: "Book with n8.blendz",
      secondaryBookingUrl:
        "https://booksy.com/en-us/1735599_n8-blendz_barber-shop_28555_westville",
    },
  ] as Location[],

  services: [
    {
      number: "01",
      name: "Cuts & Fades",
      detail: "Clean cuts, tapers, skin fades and tailored styles finished with precision.",
    },
    {
      number: "02",
      name: "Haircut + Beard",
      detail: "A complete reset with a sharp cut, beard shaping and a clean finish.",
    },
    {
      number: "03",
      name: "Kids Cuts",
      detail: "Patient, polished cuts for children 12 and under, including fades and tapers.",
    },
    {
      number: "04",
      name: "Beard & Razor",
      detail: "Lineups, beard care, hot towel work and straight-razor detailing.",
    },
    {
      number: "05",
      name: "Texture & Perms",
      detail: "Consultation-led texture services and perms with a shape made for you.",
    },
    {
      number: "06",
      name: "Premium Grooming",
      detail: "Options may include a wash, face care and hot-towel finishing, depending on your barber.",
    },
  ],

  gallery: [
    { src: "/images/gloucester-cut-1.jpg", alt: "Clean taper from the Blessed Hair Studio portfolio", width: 853, height: 1849 },
    { src: "/images/hann-cut-2.jpg", alt: "Textured fade from the Blessed Hair Studio portfolio", width: 1284, height: 2778 },
    { src: "/images/gloucester-cut-2.jpg", alt: "Modern fade haircut from the Blessed Hair Studio portfolio", width: 937, height: 2031 },
    { src: "/images/hann-cut-1.jpg", alt: "Fresh haircut from the Blessed Hair Studio portfolio", width: 1284, height: 2778 },
    { src: "/images/hann-cut-3.jpg", alt: "Curly texture service from the Blessed Hair Studio portfolio", width: 1284, height: 2778 },
    { src: "/images/gloucester-cut-3.jpg", alt: "Blessed Hair Studio barber at work", width: 1365, height: 2048 },
  ],

  bookingOptions: [
    {
      name: "Gloucester City Studio",
      location: "12 S Broadway Ave",
      detail: "Choose from the Gloucester City team and view current availability.",
      href: "https://booksy.com/en-us/812065_blessed-hair-studio_barber-shop_28452_gloucester-city",
      label: "Choose a Gloucester barber",
    },
    {
      name: "Hann the Barber",
      location: "Westville",
      detail: "Owner and barber offering cuts, beard work, premium grooming and perms.",
      href: "https://booksy.com/en-us/786668_hann-the-barber_barber-shop_28555_westville",
      label: "Book with Hann",
    },
    {
      name: "n8.blendz",
      location: "Westville",
      detail: "Book a Westville appointment and see current services and open times.",
      href: "https://booksy.com/en-us/1735599_n8-blendz_barber-shop_28555_westville",
      label: "Book with n8.blendz",
    },
  ],
} as const;
