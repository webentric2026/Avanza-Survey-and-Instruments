// src/components/hero/slidesData.js
// Centralized slide content — add/remove/reorder slides here.
// Replace `image` paths with your optimized assets (WebP/AVIF recommended,
// ~1920x1080, compressed). Use next-gen formats + responsive srcset if your
// build tooling supports it (e.g. vite-imagetools).

import main from "../assets/images/hero/hero_main.png"
import topography from "../assets/images/hero/hero_topography.jfif"
import dgps from "../assets/images/hero/hero_DGPS.jfif"
import drone from "../assets/images/hero/hero_drone.jfif"
import total from "../assets/images/hero/hero_total.jfif"
import GIS from "../assets/images/hero/hero_GIS.jfif"

const slides = [
    {
        id: 1,
        eyebrow: "AVANZA SURVEY & INSTRUMENTS",
        category: "COMPANY INTRODUCTION",
        title: "Precision in Surveying. Excellence in Instruments.",
        description:
            "Delivering accurate survey solutions and advanced instrumentation to power modern infrastructure, mapping and land development.",
        image: main,
        focal: "center",
    },
    {
        id: 2,
        eyebrow: "OUR SERVICES",
        category: "TOPOGRAPHICAL SURVEY",
        title: "Mapping Every Contour with Absolute Accuracy.",
        description:
            "Precise terrain and elevation data collection to support planning, construction and land development projects.",
        image: topography,
        focal: "center",
    },
    {
        id: 3,
        eyebrow: "OUR SERVICES",
        category: "DGPS SURVEY",
        title: "High-Precision Positioning, Anywhere on Site.",
        description:
            "Advanced differential GPS technology for centimeter-level accuracy in geospatial data collection.",
        image: dgps,
        focal: "center",
    },
    {
        id: 4,
        eyebrow: "OUR SERVICES",
        category: "DRONE SURVEY",
        title: "Aerial Intelligence for Faster Site Insights.",
        description:
            "Efficient aerial mapping and site documentation using drone-based data acquisition and photogrammetry.",
        image: drone,
        focal: "center",
    },
    {
        id: 5,
        eyebrow: "OUR SERVICES",
        category: "TOTAL STATION SURVEY",
        title: "Engineering-Grade Measurement and Positioning.",
        description:
            "Reliable, precise measurement and positioning for construction, infrastructure and site surveying.",
        image: total,
        focal: "center",
    },
    {
        id: 6,
        eyebrow: "OUR SERVICES",
        category: "GIS MAPPING & LAND SURVEY",
        title: "Turning Spatial Data into Informed Decisions.",
        description:
            "Comprehensive GIS mapping and land measurement solutions for planning and development applications.",
        image: GIS,
        focal: "center",
    },
];

export default slides;