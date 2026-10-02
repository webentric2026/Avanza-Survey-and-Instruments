import dgpsImg from "../assets/images/equipments/dgps.png";
import droneImg from "../assets/images/equipments/drones.jfif";
import realEstateImg from "../assets/images/real-estate.jfif";
import topoImg from "../assets/images/hero/hero_topography.jfif";
import rentalImg from "../assets/images/equipments/rentals.jfif";
import constructionImg from "../assets/images/construction.jfif";

const posts = [
  {
    slug: "what-is-dgps-survey-accuracy-process-cost-india",
    title: "What Is a DGPS Survey? Accuracy, Process and Cost in India",
    excerpt:
      "DGPS surveys deliver centimetre-level positioning for land, infrastructure and mapping projects. Learn how it works, what accuracy to expect and what drives the cost.",
    category: "DGPS Survey",
    date: "2026-09-18",
    readTime: "6 min read",
    image: dgpsImg,
    alt: "DGPS GNSS receiver used for high-precision land survey",
    keywords: [
      "DGPS survey",
      "DGPS survey accuracy",
      "DGPS survey cost India",
      "differential GPS survey",
      "GNSS survey",
    ],
    metaDescription:
      "What is a DGPS survey? Understand DGPS accuracy, the survey process, deliverables and cost factors in India for land, infrastructure and mapping projects.",
    content: [
      {
        p: "A DGPS (Differential Global Positioning System) survey is a high-precision positioning method that corrects standard GPS signals using a known reference station. While a handheld GPS may be off by several metres, a DGPS survey routinely achieves centimetre-level accuracy — making it the backbone of modern land surveys, infrastructure layout and GIS mapping across India.",
      },
      { h: "How a DGPS survey works" },
      {
        p: "Two receivers work together: a base station set up over a known point and a rover that moves across the site. The base calculates the error in the satellite signals it receives and transmits corrections to the rover in real time (RTK mode) or for later processing (static/post-processed mode). The result is a set of precise coordinates for every point measured.",
      },
      { h: "What accuracy can you expect?" },
      {
        list: [
          "RTK DGPS: typically 1–3 cm horizontal accuracy in open conditions.",
          "Static observations (long sessions): millimetre-to-centimetre accuracy for control networks.",
          "Accuracy drops near tall buildings, dense tree cover or in deep valleys where satellite visibility is poor — a good surveyor plans control points accordingly.",
        ],
      },
      { h: "When projects need a DGPS survey" },
      {
        p: "DGPS surveys are commonly used for boundary demarcation, control-point establishment, road and highway corridors, large land parcels, mining leases and any GIS mapping that must sit correctly on real-world coordinates. For most government submissions and legal records in India, DGPS-observed coordinates are the expected standard.",
      },
      { h: "What affects DGPS survey cost in India?" },
      {
        list: [
          "Site size and number of points to be observed.",
          "Site location and travel — remote sites cost more in time and logistics.",
          "Deliverables: raw coordinates, AutoCAD drawings, KMZ overlays or GIS shapefiles.",
          "Turnaround time — express delivery usually carries a premium.",
        ],
      },
      {
        p: "For an accurate quotation, share your site location, approximate area and the purpose of the survey. At Avanza Survey & Instruments, every DGPS survey in Delhi NCR and across India is executed with calibrated equipment and verified control points — contact us to discuss your requirement.",
      },
    ],
  },
  {
    slug: "drone-survey-vs-total-station-survey-which-to-choose",
    title: "Drone Survey vs Total Station Survey: Which Does Your Project Need?",
    excerpt:
      "Drones cover large areas fast; total stations deliver pinpoint control. Compare accuracy, speed, cost and use-cases so you pick the right survey method.",
    category: "Drone Survey",
    date: "2026-09-10",
    readTime: "7 min read",
    image: droneImg,
    alt: "Surveying drone performing aerial mapping over a project site",
    keywords: [
      "drone survey services",
      "drone survey vs total station",
      "aerial survey India",
      "total station survey",
      "drone mapping",
    ],
    metaDescription:
      "Drone survey vs total station survey compared on accuracy, speed, cost and best use-cases — a practical guide for construction and land development projects.",
    content: [
      {
        p: "Two of the most requested survey methods today are drone surveys and total station surveys. They solve different problems: drones capture vast areas quickly from the air, while total stations measure individual points on the ground with engineering-grade precision. Many projects actually need both. Here is how to decide.",
      },
      { h: "Drone survey: strengths and limits" },
      {
        list: [
          "Best for: large sites, stockpile measurement, progress monitoring, topographic mapping of open terrain.",
          "Speed: hundreds of acres can be flown and mapped in days, not weeks.",
          "Accuracy: typically 2–5 cm with ground control points — excellent for mapping, but not a substitute for legal boundary fixation.",
          "Limits: needs DGCA-compliant operations, clear airspace permission in restricted zones, and struggles under dense canopy.",
        ],
      },
      { h: "Total station survey: strengths and limits" },
      {
        list: [
          "Best for: building layout, boundary marking, setting out, precise level transfer and as-built checks.",
          "Accuracy: millimetre-to-centimetre precision on each measured point.",
          "Limits: slower point-by-point collection; impractical for mapping very large areas alone.",
        ],
      },
      { h: "How to choose for your project" },
      {
        p: "Choose a drone survey when you need fast, visual, area-wide data — site documentation, contour maps of large parcels, or monthly progress records. Choose a total station survey when structures must be set out exactly, boundaries marked on the ground, or levels transferred with tight tolerances. For infrastructure corridors and townships, Avanza typically combines both: drone mapping for the big picture and total station or DGPS control for precision. Talk to our team before you decide — the right combination saves both time and money.",
      },
    ],
  },
  {
    slug: "land-survey-cost-delhi-2026-guide",
    title: "How Much Does a Land Survey Cost in Delhi? (2026 Guide)",
    excerpt:
      "Land survey pricing in Delhi depends on plot size, survey type and deliverables. This guide breaks down typical costs and how to get an accurate quote.",
    category: "Land Survey",
    date: "2026-08-28",
    readTime: "5 min read",
    image: realEstateImg,
    alt: "Residential land plot in Delhi measured during a boundary survey",
    keywords: [
      "land survey cost Delhi",
      "land surveyor in Delhi",
      "land survey charges India",
      "plot survey cost",
      "boundary survey cost",
    ],
    metaDescription:
      "How much does a land survey cost in Delhi? Typical price ranges, cost factors and tips to get an accurate quote from a professional land surveyor.",
    content: [
      {
        p: "One of the most common questions we hear is: what will a land survey cost? In Delhi, a basic residential plot boundary survey and a multi-acre topographical survey are entirely different jobs — so prices vary widely. This guide explains the ranges and the factors behind them.",
      },
      { h: "Typical land survey costs in Delhi" },
      {
        list: [
          "Small residential plot boundary survey: generally the most affordable job, priced per visit plus drawing.",
          "Topographical / contour survey: priced by area — larger sites cost more but the per-acre rate falls.",
          "DGPS control and demarcation: priced by number of points and site conditions.",
          "Drone mapping: priced by area flown plus processing and deliverables.",
        ],
      },
      {
        p: "Beware of quotes that seem unusually cheap: they often skip control verification, use uncalibrated instruments, or deliver a rough sketch instead of a proper scaled drawing. A survey that ends up disputed in court or rejected by an authority is the most expensive kind.",
      },
      { h: "What drives the final price?" },
      {
        list: [
          "Plot size, shape and accessibility of the site.",
          "Type of survey: boundary, topographical, DGPS, drone or a combination.",
          "Deliverables: site plan, AutoCAD drawing, KMZ, area statement or GIS files.",
          "Urgency and location of the site within Delhi NCR.",
        ],
      },
      {
        p: "The fastest way to get an exact figure is to share your plot location, approximate size and purpose of the survey. Contact Avanza Survey & Instruments for a transparent, itemised quote — no hidden charges, and advice on which survey you actually need.",
      },
    ],
  },
  {
    slug: "what-is-topographical-survey-why-projects-need-it",
    title: "What Is a Topographical Survey? What It Includes and Why Projects Need It",
    excerpt:
      "A topographical survey maps terrain, levels, trees, structures and utilities — the base map every architect and engineer designs on. Here's what it covers.",
    category: "Topographical Survey",
    date: "2026-08-15",
    readTime: "6 min read",
    image: topoImg,
    alt: "Surveyor conducting a topographical survey across varied terrain",
    keywords: [
      "topographical survey",
      "topographic survey",
      "contour survey",
      "topo survey cost India",
      "what is topographical survey",
    ],
    metaDescription:
      "What is a topographical survey? Learn what it includes — contours, levels, features, utilities — and why architects and engineers need it before design.",
    content: [
      {
        p: "A topographical (topo) survey records the three-dimensional reality of a site: ground elevations, slopes, trees, buildings, roads, drains, boundary walls and underground or overhead utilities. The output — usually a contour drawing in AutoCAD — becomes the base map that architects, structural engineers and planners design on. Starting design without one is one of the costliest mistakes in construction.",
      },
      { h: "What a good topo survey includes" },
      {
        list: [
          "Spot levels on a tight grid plus break lines along ridges, drains and edges.",
          "Contours at a suitable interval (commonly 0.5 m for project sites).",
          "All physical features: structures, trees with girth, poles, manholes, gates and compound walls.",
          "Benchmarks tied to a reliable datum so levels can be re-established during construction.",
          "Boundary overlay matched with revenue or ownership records where required.",
        ],
      },
      { h: "Why projects can't skip it" },
      {
        p: "Cut-and-fill quantities, plinth levels, drainage slopes, ramp gradients and foundation depths all derive from the topo survey. Errors here cascade into redesign, cost overruns and site disputes. For plotted developments, highways, solar parks and industrial sites across India, clients routinely recover the survey cost many times over in avoided rework.",
      },
      {
        p: "Planning a project in Delhi NCR? Avanza Survey & Instruments delivers verified topographical surveys with proper control networks and clean, usable drawings. Get in touch for a site-specific quote.",
      },
    ],
  },
  {
    slug: "total-station-rental-vs-buying-guide-contractors",
    title: "Total Station Rental vs Buying: A Practical Guide for Contractors",
    excerpt:
      "Need a total station for a few months? Renting often beats buying on cost, calibration and support. Compare both options with real project math.",
    category: "Equipment Rental",
    date: "2026-07-30",
    readTime: "5 min read",
    image: rentalImg,
    alt: "Total station and survey equipment available for rental",
    keywords: [
      "total station rental Delhi",
      "survey equipment rental",
      "total station on rent",
      "survey instruments on rent",
      "DGPS rental",
    ],
    metaDescription:
      "Should you rent or buy a total station? Compare costs, calibration, maintenance and project flexibility to decide — plus rental options in Delhi NCR.",
    content: [
      {
        p: "A new robotic total station is a major capital expense — and for many contractors, it then sits idle between projects while calibration lapses and technology moves on. Renting survey equipment is often the smarter commercial decision. Here's the practical comparison.",
      },
      { h: "When renting wins" },
      {
        list: [
          "Short or uncertain project durations — pay only for the months you need the instrument.",
          "No maintenance burden: calibration, servicing and breakdown replacement are the rental provider's problem.",
          "Access to the right model for each job — robotic for layout-heavy work, reflectorless for detail pickup.",
          "Preserved cash flow: no large upfront purchase or AMC contracts.",
        ],
      },
      { h: "When buying makes sense" },
      {
        list: [
          "Continuous, year-round survey workload with in-house survey teams.",
          "Remote sites where replacement logistics for rental units would be difficult.",
          "Specialised workflows already built around one owned instrument and software.",
        ],
      },
      { h: "What to check in a rental provider" },
      {
        p: "Ask for calibration certificates, confirm what happens if the instrument fails on site, check whether accessories (tripods, prisms, batteries, controllers) are included, and clarify training or operator support. Avanza Survey & Instruments rents total stations, DGPS/GNSS, auto levels and full accessory kits in Delhi NCR — calibrated, site-ready and backed by survey professionals. Browse our instruments and enquire for rental today.",
      },
    ],
  },
  {
    slug: "documents-required-land-boundary-survey-india",
    title: "Documents Required for a Land Boundary Survey in India",
    excerpt:
      "Keep your survey visit productive: sale deed, khasra/khatauni, mutation records, old site plans and ID proofs. A complete checklist before you book.",
    category: "Land Survey",
    date: "2026-07-12",
    readTime: "4 min read",
    image: constructionImg,
    alt: "Survey team verifying land documents before a boundary survey",
    keywords: [
      "documents for land survey",
      "boundary survey documents India",
      "khasra khatauni survey",
      "land demarcation documents",
    ],
    metaDescription:
      "Which documents do you need for a land boundary survey in India? Checklist of sale deed, khasra/khatauni, mutation, site plans and IDs to keep ready.",
    content: [
      {
        p: "A boundary survey goes smoothly when the surveyor can cross-check ground measurements against your ownership records on the same visit. Missing paperwork is the most common reason surveys need a repeat visit. Keep these documents ready before you book.",
      },
      { h: "Essential documents checklist" },
      {
        list: [
          "Sale deed / title deed showing the schedule of the property with boundaries.",
          "Khasra, khatauni or jamabandi extracts (khasra number is what the surveyor traces on the ground).",
          "Mutation (dakhil-kharij) records confirming the title transfer in revenue records.",
          "Any previous site plan, layout drawing or architect's drawing of the plot.",
          "Government-issued ID of the owner or authorised representative.",
          "Authorisation letter if someone else will accompany the survey team.",
        ],
      },
      { h: "Helpful extras" },
      {
        list: [
          "Neighbouring plot references or old demarcation pillars, if known.",
          "Court orders or settlement documents in case of disputed boundaries.",
          "GPS location pin or address landmark so the team reaches the exact site.",
        ],
      },
      {
        p: "Don't worry if some record is missing — experienced surveyors can still establish boundaries from available evidence and advise what to obtain. Share whatever you have with Avanza Survey & Instruments when you enquire, and we'll plan the survey visit accordingly.",
      },
    ],
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(slug, count = 3) {
  const current = getPost(slug);
  if (!current) return posts.slice(0, count);
  const sameCategory = posts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, count);
}

export default posts;
