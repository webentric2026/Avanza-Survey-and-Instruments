// src/data/aboutData.js

import about_main from "../../assets/images/about_us.jfif"
import total from "../../assets/images/equipments/total-station.jfif"
import dgps from "../../assets/images/equipments/dgps.jfif"
import drones from "../../assets/images/equipments/drones.jfif"
import auto from "../../assets/images/equipments/auto-level.jfif"
import survey from "../../assets/images/construction.jfif"
import data_collections from "../../assets/images/equipments/accessories.jfif"

import construction from "../../assets/images/construction.jfif"
import real_estate from "../../assets/images/real-estate.jfif"
import road from "../../assets/images/roads.jfif"
import urban from "../../assets/images/urban-planning.jfif"
import mining from "../../assets/images/mining.jfif"
import government from "../../assets/images/government.jfif"

export const hero = {
  eyebrow: "ABOUT AVAZA",
  heading: "Precision That Builds What's Next.",
  text:
    "Avaza delivers professional surveying, geospatial, and engineering solutions that help turn complex ground realities into accurate data, informed decisions, and successful infrastructure projects.",
  image: about_main,
  alt: "Surveyor operating precision equipment on a major infrastructure project",
};

export const companyIntro = {
  heading: "Built on Accuracy. Driven by Expertise.",
  paragraphs: [
    "Avaza is a professional surveying and geospatial solutions company built around field expertise, modern surveying instruments, and disciplined execution. We work closely with engineers, planners, and project teams to translate ground conditions into accurate, usable data.",
    "Our approach combines experienced professionals with geospatial technology, ensuring every measurement holds up to the demands of construction, infrastructure, and land development projects.",
    "Accurate surveying is the foundation for sound engineering decisions. It is the starting point we take seriously on every project we support.",
  ],
  stats: [
    { number: "01", title: "Precision", description: "Accurate field data and measurements." },
    { number: "02", title: "Technology", description: "Modern surveying and geospatial equipment." },
    { number: "03", title: "Reliability", description: "Consistent execution across project requirements." },
  ],
};

export const ourStory = {
  heading: "Our Story",
  text:
    "Modern infrastructure begins with accurate understanding of the ground beneath it. At Avaza, we combine experienced surveying professionals, advanced geospatial technology, and hands-on field expertise to deliver reliable data for complex projects. From detailed land surveys and topographic mapping to precise positioning and site measurements, our solutions are designed to provide the clarity and accuracy required for informed planning, design, construction, and development.We understand that every site presents its own terrain, constraints, and challenges — which is why our approach is practical, project- specific, and focused on real-world field conditions. With the right combination of technology, technical expertise, and on - site experience, Avaza helps clients turn ground data into dependable information they can build on.",
  milestones: ["Expertise", "Technology", "Execution", "Growth"],
  image: about_main,
  alt: "Wide landscape view of a survey and infrastructure project site",
};

// icon key maps to a lucide-react component in AboutUs.jsx (ICON_MAP)
export const whatWeDo = [
  {
    id: 1,
    icon: "map",
    title: "Land & Topographic Surveying",
    description:
      "Accurate measurement and mapping of terrain, boundaries, levels, and existing site conditions.",
  },
  {
    id: 2,
    icon: "satellite",
    title: "DGPS / GNSS Surveying",
    description:
      "High-precision positioning and coordinate-based surveying for demanding projects.",
  },
  {
    id: 3,
    icon: "crosshair",
    title: "Total Station Surveying",
    description:
      "Precise conventional surveying for construction, infrastructure, alignment, and setting-out requirements.",
  },
  {
    id: 4,
    icon: "plane",
    title: "Drone Surveying & Mapping",
    description:
      "Aerial data collection, mapping, terrain visualization, and site documentation.",
  },
  {
    id: 5,
    icon: "hardhat",
    title: "Construction Surveying",
    description:
      "Survey support for setting out, levels, alignments, as-built verification, and construction control.",
  },
  {
    id: 6,
    icon: "layers",
    title: "GIS & Geospatial Solutions",
    description:
      "Organizing, analyzing, and visualizing location-based data for planning and decision-making.",
  },
];

export const approachSteps = [
  {
    id: 1,
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project, site conditions, technical requirements, and expected deliverables.",
  },
  {
    id: 2,
    number: "02",
    title: "Survey",
    description:
      "Our field teams collect accurate measurements and spatial data using appropriate surveying methods and equipment.",
  },
  {
    id: 3,
    number: "03",
    title: "Process",
    description:
      "Field data is processed, checked, organized, and transformed into useful technical information.",
  },
  {
    id: 4,
    number: "04",
    title: "Deliver",
    description:
      "We provide clear, dependable outputs that support engineering, construction, planning, and decision-making.",
  },
];

export const technology = {
  heading: "Technology Meets Field Expertise",
  text:
    "Equipment alone does not create accurate results. Technology must be combined with skilled operators, proper methodology, field verification, and quality control.",
  categories: [
    { id: 1, title: "Total Stations", image: total },
    { id: 2, title: "DGPS / GNSS", image: dgps },
    { id: 3, title: "Surveying Drones", image: drones },
    { id: 4, title: "Auto Levels", image: auto },
    { id: 5, title: "Survey Accessories", image: survey },
    { id: 6, title: "Data Collection & Processing Systems", image: data_collections },
  ],
};

export const industries = [
  {
    id: 1,
    title: "Construction & Infrastructure",
    description: "Site surveys and spatial data supporting construction and infrastructure delivery.",
    image: construction,
    alt: "Surveyor working on a construction and infrastructure project",
  },
  {
    id: 2,
    title: "Real Estate",
    description: "Land and topographical surveys for property development and site assessment.",
    image: real_estate,
    alt: "Land development site prepared using surveying data",
  },
  {
    id: 3,
    title: "Roads & Highways",
    description: "Surveying and mapping support for road and highway alignment and construction.",
    image: road,
    alt: "Road and highway construction project with survey equipment",
  },
  {
    id: 4,
    title: "Urban Planning",
    description: "Spatial data and GIS mapping supporting urban development and planning.",
    image: urban,
    alt: "Urban landscape supported by GIS mapping",
  },
  {
    id: 5,
    title: "Mining",
    description: "Terrain assessment and site measurement for mining and quarrying areas.",
    image: mining,
    alt: "Aerial view of a mining site used for terrain assessment",
  },
  {
    id: 6,
    title: "Government & Public Infrastructure",
    description: "Reliable survey data supporting public infrastructure and land management projects.",
    image: government,
    alt: "Public infrastructure project supported by survey data",
  },
];

export const whyAvaza = [
  {
    id: 1,
    number: "01",
    title: "Precision First",
    description: "We treat measurement accuracy as the foundation of every project.",
  },
  {
    id: 2,
    number: "02",
    title: "Field-Proven Expertise",
    description:
      "Technology is supported by practical surveying knowledge and disciplined field execution.",
  },
  {
    id: 3,
    number: "03",
    title: "Right Technology",
    description:
      "We select the appropriate equipment and methodology according to project requirements.",
  },
  {
    id: 4,
    number: "04",
    title: "Reliable Deliverables",
    description:
      "Our objective is not simply to collect data, but to provide usable and dependable project outputs.",
  },
  {
    id: 5,
    number: "05",
    title: "Project-Focused Execution",
    description:
      "We adapt our surveying approach to the scale, complexity, and technical requirements of each project.",
  },
];

export const quality = {
  heading: "Accuracy Is More Than a Number.",
  text:
    "Surveying quality depends on the complete workflow — not a single instrument or measurement. We treat every stage with the same level of care.",
  workflow: ["Planning", "Equipment", "Field Procedure", "Verification", "Processing", "Deliverables"],
};

export const people = {
  heading: "People Behind the Precision",
  text:
    "Avaza's work is powered by people who understand that every measurement can influence a design, construction decision, alignment, boundary, or project outcome. Behind every deliverable is a team focused on getting the details right.",
  image: "/images/about/people-field-team.jpg",
  alt: "Surveyors and engineers working with surveying equipment in the field",
  hasTeamPage: false, // set to true only once a dedicated team page exists
};

export const visionMission = [
  {
    label: "OUR VISION",
    title: "Our Vision",
    text: "To contribute to better-built environments through accurate spatial information, modern surveying technology, and dependable engineering support.",
  },
  {
    label: "OUR MISSION",
    title: "Our Mission",
    text: "To provide precise, practical, and reliable surveying and geospatial solutions that help clients plan, build, and develop with greater confidence.",
  },
];

export const closingCta = {
  heading: "Have a Project That Needs Precision?",
  text:
    "Tell us what you're building, planning, or measuring. We'll help determine the surveying and geospatial support your project requires.",
  image: "/images/about/closing-cta-infrastructure.jpg",
  alt: "Large-scale infrastructure project site supported by surveying work",
};
