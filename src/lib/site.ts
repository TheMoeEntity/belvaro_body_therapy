// Business details used across the site. Edit here to update every section at once.
const whatsappNumber = "2348078924257";
const whatsappMessage =
  "Hi Belvaro, I'd like to book a massage. Could you send me your price list?";

export const site = {
  name: "Belvaro Body Therapy",
  tagline:
    "Helping you understand your body, manage everyday tension and prioritize wellness.",
  description:
    "Mobile massage and holistic wellness therapy across Lagos, Nigeria. We bring a calm, professional session to your home. Strictly by appointment.",
  location: "Lagos, Nigeria",
  serviceArea: "Island & Mainland, Lagos",
  instagram: {
    handle: "@belvarobody_therapy",
    profile: "https://www.instagram.com/belvarobody_therapy/",
    // Opens a DM thread with the account (preferred way to book).
    dm: "https://ig.me/m/belvarobody_therapy",
  },
  whatsapp: {
    display: "0807 892 4257",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  hours: {
    general: "6:00 AM – 9:00 PM",
    mainland: "6:00 AM – 4:00 PM",
  },
  therapist: {
    name: "Stephanie Sylvester",
    role: "Founder & Massage Therapist",
  },
  deposit: "₦10,000",
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Your Therapist", href: "#therapist" },
  { label: "Services & Rates", href: "#services" },
  { label: "The Setup", href: "#setup" },
  { label: "Reviews", href: "#reviews" },
  { label: "How to Book", href: "#booking" },
] as const;
