// src/components/services/servicesData.js

// Centralized service content — edit here to add/remove/reorder services.

import {
  Map,
  Satellite,
  Plane,
  Crosshair,
  Layers3,
  LandPlot,
} from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    icon: Map,
    title: "Topographical Survey",
    description:
      "Accurate mapping of terrain, elevations, contours, and existing ground features for reliable project planning.",
  },
  {
    id: 2,
    number: "02",
    icon: Satellite,
    title: "DGPS Survey",
    description:
      "High-precision positioning and coordinate data for surveying, mapping, construction, and land development.",
  },
  {
    id: 3,
    number: "03",
    icon: Plane,
    title: "Drone Survey",
    description:
      "Efficient aerial surveying and mapping using drone technology for detailed and accurate site data.",
  },
  {
    id: 4,
    number: "04",
    icon: Crosshair,
    title: "Total Station Survey",
    description:
      "Precise measurement of angles, distances, and coordinates for construction and engineering projects.",
  },
  {
    id: 5,
    number: "05",
    icon: Layers3,
    title: "GIS Mapping",
    description:
      "Transform spatial data into detailed digital maps and insights for better planning and decision-making.",
  },
  {
    id: 6,
    number: "06",
    icon: LandPlot,
    title: "Land Survey",
    description:
      "Professional land measurement and boundary surveying to establish accurate property and site information.",
  },
];

export default services;