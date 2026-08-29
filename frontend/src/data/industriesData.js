import construction from "../assets/images/construction.jfif"
import real_estate from "../assets/images/real-estate.jfif"
import roads from "../assets/images/roads.jfif"
import urban_planning from "../assets/images/urban-planning.jfif"
import mining from "../assets/images/mining.jfif"
import government from "../assets/images/government.jfif"
const industries = [
  {
    id: 1,
    number: "01",
    title: "Construction & Infrastructure",
    description:
      "Accurate site surveys and spatial data to support construction planning, execution, and infrastructure development.",
    image: construction,
    alt: "Surveyor operating a total station on a construction and infrastructure site",
  },
  {
    id: 2,
    number: "02",
    title: "Real Estate & Land Development",
    description:
      "Reliable land and topographical surveys for property development, site planning, and land assessment.",
    image: real_estate,
    alt: "Surveying equipment positioned across a land development site",
  },
  {
    id: 3,
    number: "03",
    title: "Roads & Transportation",
    description:
      "Precise surveying and mapping solutions for roads, transportation corridors, and supporting infrastructure.",
    image: roads,
    alt: "Surveyor measuring alignment on a road and transportation project",
  },
  {
    id: 4,
    number: "04",
    title: "Urban Planning",
    description:
      "Detailed spatial data and GIS mapping to support informed planning and development of urban environments.",
    image: urban_planning,
    alt: "Urban landscape representing GIS mapping and planning applications",
  },
  {
    id: 5,
    number: "05",
    title: "Mining & Quarrying",
    description:
      "Surveying and mapping solutions for terrain assessment, site measurement, and monitoring of mining areas.",
    image: mining,
    alt: "Aerial view of a quarry landscape used for surveying and terrain assessment",
  },
  {
    id: 6,
    number: "06",
    title: "Government & Public Works",
    description:
      "Reliable survey data supporting public infrastructure, land management, planning, and development projects.",
    image: government,
    alt: "Public works infrastructure project supported by survey data",
  },
];

export default industries;
