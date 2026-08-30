import accessories from "../assets/images/equipments/accessories.jfif"
import auto_level from "../assets/images/equipments/auto-level.jfif"
import dgps from "../assets/images/equipments/dgps.jfif"
import drones from "../assets/images/equipments/drones.jfif"
import rentals from "../assets/images/equipments/rentals.jfif"
import total from "../assets/images/equipments/total-station.jfif"

import ts16 from "../assets/images/machines/leica16.jpg"
import ts13 from "../assets/images/machines/leica13.jpg"
import trimble from "../assets/images/machines/trimble.jfif"
import topcon from "../assets/images/machines/topcon.jfif"
import trimbles7 from "../assets/images/machines/trimbless7.jfif"
import gs18 from "../assets/images/machines/gs18.jpg"


export const CATEGORIES = [
    {
        id: "total-station",
        name: "Total Stations",
        desc: "Robotic & reflectorless for layout and topo",
        image:
            total,
    },
    {
        id: "gnss",
        name: "DGPS / GNSS",
        desc: "RTK, dual-frequency and network rover",
        image:
            dgps,
    },
    {
        id: "drone",
        name: "Surveying Drones",
        desc: "Photogrammetry & mapping platforms",
        image:
            drones,
    },
    {
        id: "auto-level",
        name: "Auto Levels",
        desc: "Reliable optical leveling on site",
        image:
            auto_level,
    },
    {
        id: "digital-level",
        name: "Digital Levels",
        desc: "High-precision digital heighting",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "theodolite",
        name: "Theodolites",
        desc: "Angular measurement & alignment",
        image:
            "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "laser-level",
        name: "Laser Levels",
        desc: "Grading, alignment & interior fit-out",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "accessories",
        name: "Survey Accessories",
        desc: "Tripods, prisms, poles & controllers",
        image:
            accessories,
    },
];

export const INSTRUMENTS = [
    {
        id: 1,
        name: "Leica TS16",
        brand: "Leica",
        model: "TS16",
        category: "total-station",
        categoryLabel: "Total Station",
        desc: "Robotic total station for high-precision construction and topographic work.",
        image:
            ts16,
        availability: "Available",
        specs: ["1″ angular accuracy", "R1000 reflectorless EDM", "3,500 m prism range", "Auto-height & ATR"],
        apps: ["Topographic Survey", "Construction Layout", "Infrastructure Projects"],
    },
    {
        id: 2,
        name: "Leica TS13",
        brand: "Leica",
        model: "TS13",
        category: "total-station",
        categoryLabel: "Total Station",
        desc: "Mid-range robotic station balancing performance and site productivity.",
        image:
            ts13,
        availability: "Available",
        specs: ["2″ / 3″ accuracy", "1,000 m reflectorless", "Prism & non-prism", "Field control ready"],
        apps: ["Land Development", "Road & Highway Survey", "Earthwork Measurement"],
    },
    {
        id: 3,
        name: "Trimble S7",
        brand: "Trimble",
        model: "S7",
        category: "total-station",
        categoryLabel: "Total Station",
        desc: "DR robotic station with VISION imaging for complex infrastructure.",
        image:
            trimbles7,
        availability: "Limited",
        specs: ["1″ / 2″ accuracy", "DR 800 m", "Trimble VISION", "Autolock tracking"],
        apps: ["Infrastructure Projects", "Topographic Survey", "Construction Layout"],
    },
    {
        id: 4,
        name: "Topcon GT Series",
        brand: "Topcon",
        model: "GT-1201",
        category: "total-station",
        categoryLabel: "Total Station",
        desc: "UltraSonic robotic station with LongLink for long-range control.",
        image:
            topcon,
        availability: "Available",
        specs: ["1″ accuracy", "UltraSonic motors", "LongLink comms", "MAGNET field software"],
        apps: ["Construction Layout", "Mapping", "Land Development"],
    },
    {
        id: 5,
        name: "Leica GS18",
        brand: "Leica",
        model: "GS18 T",
        category: "gnss",
        categoryLabel: "DGPS / GNSS",
        desc: "GNSS RTK rover with visual positioning and tilt capability.",
        image:
            gs18,
        availability: "On Request",
        specs: ["RTK + tilt", "Visual positioning", "SmartLink fill", "Captivate workflow"],
        apps: ["Mapping", "Infrastructure Projects", "Land Development"],
    },
    {
        id: 6,
        name: "Sokkia B40",
        brand: "Sokkia",
        model: "B40",
        category: "auto-level",
        categoryLabel: "Auto Level",
        desc: "32× auto level for reliable construction leveling.",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
        availability: "Available",
        specs: ["32× magnification", "±15′ compensator", "1.0 mm/km accuracy", "Water-resistant housing"],
        apps: ["Construction Layout", "Earthwork Measurement", "Land Development"],
    },
];