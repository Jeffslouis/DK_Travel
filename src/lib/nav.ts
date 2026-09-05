export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "DK Travel Club", href: "/dk-travel-club" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Destinations", href: "/destinations" },
  { label: "Ambassador", href: "/ambassador" },
  { label: "Contact", href: "/contact" },
  { label: "DK Shop", href: "/shop" },
];

export const SITE = {
  name: "Destination Konpa",
  shortName: "DK",
  tagline: "Vacation Always Paid In Advance",
  phone: "321-978-2525",
  email: "info@destinationkonpa.com",
};
