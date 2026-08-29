import accessories from "../assets/images/equipments/accessories.jfif"
import auto_level from "../assets/images/equipments/auto-level.jfif"
import dgps from "../assets/images/equipments/dgps.jfif"
import drones from "../assets/images/equipments/drones.jfif"
import rentals from "../assets/images/equipments/rentals.jfif"
import total from "../assets/images/equipments/total-station.jfif"


const equipment = [
  {
    id: 1,
    number: "01",
    title: "Total Stations",
    category: "Precision Surveying",
    description:
      "Precision instruments for measuring angles, distances, coordinates, and site layouts.",
    image: total,
    alt: "Professional total station mounted on a tripod at a survey site",
  },
  {
    id: 2,
    number: "02",
    title: "DGPS / GNSS",
    category: "Positioning Systems",
    description:
      "High-precision positioning solutions for surveying, mapping, construction, and land measurement.",
    image: dgps,
    alt: "Professional GNSS receiver mounted on a surveying pole",
  },
  {
    id: 3,
    number: "03",
    title: "Surveying Drones",
    category: "Aerial Mapping",
    description:
      "Aerial surveying solutions for efficient mapping, terrain assessment, and large-area data collection.",
    image: drones,
    alt: "Professional surveying drone equipped for aerial mapping",
  },
  {
    id: 4,
    number: "04",
    title: "Auto Levels",
    category: "Elevation Measurement",
    description:
      "Reliable optical instruments for precise elevation measurement and levelling applications.",
    image: auto_level,
    alt: "Professional automatic level mounted on a tripod",
  },
  {
    id: 5,
    number: "05",
    title: "Survey Accessories",
    category: "Field Equipment",
    description:
      "Essential field accessories and supporting equipment for accurate and efficient surveying.",
    image: accessories,
    alt: "Surveying tripods, prisms, and measuring accessories arranged for fieldwork",
  },
  {
    id: 6,
    number: "06",
    title: "Equipment Rental",
    category: "Sale & Rental",
    description:
      "Access professional surveying equipment for your project without the need for long-term ownership.",
    image: rentals,
    alt: "Professional surveying equipment arranged for rental",
  },
];

export default equipment;
