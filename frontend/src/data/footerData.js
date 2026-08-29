// src/components/footer/footerData.js
// Centralized footer content — mirrors data already used in Navbar, kept
// separate here so the footer can be edited without touching navigation.

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Instruments", to: "/instruments" },
  { label: "Services", to: "/services" },
  { label: "Leadership", to: "/leadership" },
];

export const SERVICE_LINKS = [
  { label: "Topographical Survey", to: "/services#topographical-survey" },
  { label: "DGPS Survey", to: "/services#dgps-survey" },
  { label: "Drone Survey", to: "/services#drone-survey" },
  { label: "Total Station Survey", to: "/services#total-station-survey" },
  { label: "GIS Mapping", to: "/services#gis-mapping" },
  { label: "Land Survey", to: "/services#land-survey" },
  { label: "Instrument Sales & Rental", to: "/services#instrument-sales-rental" },
];

export const CONTACT_INFO = {
  address: "4113/2 Jag Jiwan Niwas, Reghar Pura, Karol Bagh, New Delhi-110005",
  email: "avanzadelhi@gmail.com",
  phones: ["9136154481", "8860988478"],
};
