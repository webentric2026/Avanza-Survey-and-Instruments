// src/components/footer/footerData.js
// Centralized footer content — mirrors data already used in Navbar, kept
// separate here so the footer can be edited without touching navigation.

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Instruments", to: "/rental" },
  { label: "Services", to: "/services" },
  { label: "Leadership", to: "/leadership" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export const SERVICE_LINKS = [
  { label: "Topographical Survey", to: "/services" },
  { label: "DGPS Survey", to: "/services" },
  { label: "Drone Survey", to: "/services" },
  { label: "Total Station Survey", to: "/services" },
  { label: "GIS Mapping", to: "/services" },
  { label: "Land Survey", to: "/services" },
  { label: "Instrument Sales & Rental", to: "/rental" },
];

export const CONTACT_INFO = {
  address: "4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005",
  email: "info@avanzasurvey.in",
  phones: ["9136154481", "8860988478"],
};
