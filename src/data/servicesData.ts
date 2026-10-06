export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  bulletPoints: string[];
  footerHeading: string;
  footerText: string;
}

export const allServicesData: ServiceItem[] = [
  // --- EXISTING SERVICES ---
  {
    id: "residential-drain-cleaning",
    tag: "Residential Solutions",
    title: "Residential Drain Cleaning",
    description:
      "We specialise in providing top-notch residential drain cleaning services to ensure your home plumbing system runs smoothly and efficiently.",
    longDescription:
      "Household clogs can build up over time from hair, grease, soap scum, and foreign objects. Our skilled professionals use advanced techniques and heavy-duty power snaking equipment to tackle even the most stubborn household drain clogs and blockages, restoring full flow to your sinks, showers, and tubs without damaging your pipes.",
    image: "/images/client-images/sink-clogs.webp",
    ctaText: "Drain Cleaning",
    ctaLink: "/our-services/residential-drain-cleaning",
    bulletPoints: [
      "Advanced power snaking and mechanical augering equipment",
      "Eco-friendly treatments safe for household piping networks",
      "Thorough line flushing to prevent immediate recurring clogs",
      "Prevention of costly emergency water damage across sinks and showers"
    ],
    footerHeading: "Experiencing Slow Drainage at Home?",
    footerText: "Don't let a minor clog turn into a major plumbing emergency. Our professional technicians are ready to restore your home's water flow quickly and cleanly."
  },
  {
    id: "residential-drain-repairs",
    tag: "Home Piping Restorations",
    title: "Residential Drain Repairs",
    description:
      "From cracked under-sink branch lines to misaligned bathroom drain pipes, our team delivers precise, long-lasting residential repairs.",
    longDescription:
      "Damaged or misaligned pipes can lead to slow drainage, unpleasant sewer smells, and recurring backups that threaten your home's foundation. We eliminate these issues with minimal disruption to your walls, floors, and daily routine.",
    image: "/images/client-images/kitchen-cleaning.webp",
    ctaText: "Drain Repairs",
    ctaLink: "/our-services/residential-drain-repairs",
    bulletPoints: [
      "Under-sink branch line restorations and PVC/metal piping fixes",
      "Sewer odor diagnostics to pinpoint hidden cracks and gas leaks",
      "Precision pipe alignment correcting sagging lines and pooling water",
      "Protection against structural wood or drywall rot from minor leaks"
    ],
    footerHeading: "Notice Unpleasant Odors or Leaks?",
    footerText: "Protect your property from hidden water damage and persistent smells. Contact our expert residential repair team for a thorough evaluation today."
  },
  {
    id: "commercial-drain-repairs",
    tag: "Commercial & Industrial",
    title: "Commercial Drain Repairs",
    description:
      "High-volume grease traps, restaurant interceptors, and industrial sewer stacks require certified heavy-duty care.",
    longDescription:
      "Commercial plumbing failures can halt business operations and lead to regulatory fines. We provide trenchless pipe relining, structural reinforcement, and rapid emergency repairs tailored specifically for commercial property managers across New Jersey.",
    image: "/images/client-images/iron-sewer-replaced-with-pvc1.webp",
    ctaText: "Commercial Repairs",
    ctaLink: "/our-services/commercial-drain-repairs",
    bulletPoints: [
      "Trenchless pipe relining without digging up parking lots or floors",
      "Grease trap and interceptor fixes ensuring code compliance",
      "Structural stack reinforcement for multi-story buildings",
      "Minimal downtime solutions customized for active businesses"
    ],
    footerHeading: "Need Commercial Plumbing Support?",
    footerText: "Avoid costly business interruptions and health code violations. Partner with our certified heavy-duty commercial repair specialists."
  },
  {
    id: "commercial-drain-cleaning",
    tag: "Heavy-Duty Jetting",
    title: "Commercial Drain Cleaning",
    description:
      "Engineered for municipal buildings, food service kitchens, and industrial complexes.",
    longDescription:
      "Our specialized high-pressure hydro-jetting rigs strip hardened grease, scale, and heavy debris from commercial pipelines to maintain full compliance and continuous flow under heavy operational demands.",
    image: "/images/client-images/commercial-drain-repair-2.webp",
    ctaText: "Commercial Cleaning",
    ctaLink: "/our-services/commercial-drain-cleaning",
    bulletPoints: [
      "High-pressure hydro-jetting blasting away accumulated grease and scale",
      "Scheduled maintenance programs preventing unexpected facility shutdowns",
      "Large diameter pipe clearing for industrial complexes and kitchens",
      "Restoration of pipelines back to 100% inner diameter capacity"
    ],
    footerHeading: "Keep Your Facility Flowing Freely",
    footerText: "Schedule routine heavy-duty hydro-jetting to ensure continuous pipeline performance and protect your commercial enterprise."
  },
  {
    id: "faucet-leak-repairs",
    tag: "Fixture & Leak Care",
    title: "Faucet & Leak Repairs",
    description:
      "Hidden water leaks and leaking valves damage subfloors and spike utility bills.",
    longDescription:
      "Our technicians identify subterranean and in-wall pipe bursts quickly, repairing or replacing worn fixtures, valves, and water supply lines with clean precision to protect your property and lower water bills.",
    image: "/images/client-images/kitchen-line1.webp",
    ctaText: "Leak Repairs",
    ctaLink: "/our-services/faucet-leak-repairs",
    bulletPoints: [
      "Advanced acoustic and thermal imaging leak detection",
      "Premium valve and fixture replacement resisting future wear",
      "Surgical in-wall line repairs with minimal wall damage",
      "Lower monthly utility bills and prevention of structural rot"
    ],
    footerHeading: "Spotted a Hidden Leak or Drip?",
    footerText: "Stop water waste and prevent destructive mold growth before it starts. Reach out to our fixture and leak care professionals."
  },
  {
    id: "main-line-video-sewer-inspection",
    tag: "HD Video Diagnostics",
    title: "Main Line Video Sewer Inspection",
    description:
      "Take the guesswork out of subterranean pipeline issues with advanced fiber-optic technology.",
    longDescription:
      "Our fiber-optic high-definition sewer cameras travel deep into your main line to locate root intrusions, collapsed channels, and severe blockages with pinpoint depth accuracy before any digging begins.",
    image: "/images/sewer-inspection.webp",
    ctaText: "Schedule Inspection",
    ctaLink: "/our-services/main-line-video-sewer-inspection",
    bulletPoints: [
      "HD fiber-optic cameras providing real-time interior footage",
      "Pinpoint depth locators to find exact problem spots underground",
      "Digital video recordings provided for your records or insurance",
      "Elimination of guesswork and unnecessary exploratory digging"
    ],
    footerHeading: "Unsure What’s Hiding in Your Pipes?",
    footerText: "Take the guesswork out of subterranean pipeline issues with our high-definition sewer camera inspection services."
  },

  // --- NEWLY ADDED MISSING SERVICES ---
  {
    id: "sewer-and-drain-cleaning",
    tag: "Comprehensive Cleaning",
    title: "Sewer and Drain Cleaning",
    description:
      "Full-service cleaning solutions for both residential and commercial sewer lines and main drains.",
    longDescription:
      "Accumulated debris, sludge, and tree roots can severely restrict your main sewer line flow. Our comprehensive sewer and drain cleaning service utilizes high-powered equipment to scour your pipes clean, preventing catastrophic backups and costly property damage.",
    image: "/images/client-images/bathtub-drain-snakin.webp",
    ctaText: "Sewer Cleaning",
    ctaLink: "/our-services/sewer-and-drain-cleaning",
    bulletPoints: [
      "Heavy-duty rooter and auger systems for main sewer lines",
      "Removal of stubborn blockages, grease buildup, and scale",
      "Restoration of optimal wastewater flow across residential and commercial properties",
      "Preventive maintenance plans available to avoid future sewer surprises"
    ],
    footerHeading: "Dealing with Main Line Backups?",
    footerText: "Ensure your entire property drains smoothly with our professional sewer and drain cleaning solutions."
  },
  {
    id: "toilet-clogs",
    tag: "Targeted Fixture Care",
    title: "Toilet Clogs",
    description:
      "Fast, professional resolution for stubborn toilet overflows and deep trap blockages.",
    longDescription:
      "A stubborn toilet clog can disrupt your household or business instantly. When standard plunging fails, our plumbing experts use specialized professional toilet augers to clear obstructions safely without scratching or cracking your porcelain fixtures.",
    image: "/images/client-images/toilet-clog.webp",
    ctaText: "Clear Toilet Clog",
    ctaLink: "/our-services/toilet-clogs",
    bulletPoints: [
      "Safe, scratch-free professional toilet augering and clearing",
      "Inspection for deeper branch line or main sewer vent blockages",
      "Immediate overflow cleanup and sanitation support",
      "Expert advice on preventing future recurring bowl backups"
    ],
    footerHeading: "Water Rising in the Bowl?",
    footerText: "Don't risk an overflow disaster. Call our plumbing professionals to clear your toilet clogs quickly and cleanly."
  },
  {
    id: "tub-clogs",
    tag: "Bathroom Solutions",
    title: "Tub Clogs",
    description:
      "Clear standing water in your bathtub and shower stalls caused by hair, soap scum, and grime.",
    longDescription:
      "Bathtub drains frequently accumulate hair, skin flakes, and soap residue over time, leading to slow drainage or standing water during showers. We thoroughly clear tub traps and branch lines to get your bathroom flowing perfectly again.",
    image: "/images/client-images/hair-pulled-from-tub.webp",
    ctaText: "Clear Tub Clog",
    ctaLink: "/our-services/tub-clogs",
    bulletPoints: [
      "Specialized hair-snagging and extraction tools",
      "Thorough cleaning of built-up soap scum and bath oils",
      "Safe handling of vintage and modern bathtub drain assemblies",
      "Prevention of unpleasant drain odors and standing water pooling"
    ],
    footerHeading: "Standing Water While Showering?",
    footerText: "Reclaim your relaxing shower experience. Contact us to clear stubborn tub clogs efficiently."
  },
  {
    id: "sink-clogs",
    tag: "Kitchen & Bath Care",
    title: "Sink Clogs",
    description:
      "Reliable clearing for kitchen and bathroom sink blockages caused by food waste, grease, and debris.",
    longDescription:
      "Kitchen sinks get choked with food particles, coffee grounds, and grease, while bathroom sinks battle toothpaste and hair. We clear P-traps, tailpieces, and branch lines to restore instant, clean drainage to your sinks.",
    image: "/images/client-images/unclogged-sink-drain.webp",
    ctaText: "Clear Sink Clog",
    ctaLink: "/our-services/sink-clogs",
    bulletPoints: [
      "P-trap disassembly, cleaning, and secure re-sealing",
      "Grease and food waste extraction for kitchen sink lines",
      "Bathroom sink hair and debris clearing",
      "Flow testing to ensure airtight and leak-free operation"
    ],
    footerHeading: "Slow Draining Kitchen or Bath Sink?",
    footerText: "Stop dealing with pools of dirty water in your basin. Let our experts clear your sink clogs today."
  },
  {
    id: "toilet-and-faucet-repairs",
    tag: "Fixture Repairs",
    title: "Toilet and Faucet Repairs",
    description:
      "Expert repair and replacement for running toilets, dripping faucets, faulty flush mechanisms, and leaking seals.",
    longDescription:
      "Faulty fill valves, flappers, and worn-out faucet cartridges waste hundreds of gallons of water and inflate utility bills. Our technicians service all major toilet and faucet brands, restoring quiet, leak-free operation to your home or business.",
    image: "/images/toilet-faucet-repair.webp",
    ctaText: "Repair Fixtures",
    ctaLink: "/our-services/toilet-and-faucet-repairs",
    bulletPoints: [
      "Toilet flush valve, flapper, and fill valve replacements",
      "Leaking faucet cartridge and O-ring repairs",
      "Elimination of ghost-flushing and continuous running water",
      "High-efficiency upgrade options to reduce water consumption"
    ],
    footerHeading: "Tired of a Running Toilet or Drips?",
    footerText: "Save money on your water bill and restore peak fixture performance with our expert repair services."
  },
  {
    id: "sewer-and-drain-repairs",
    tag: "Piping Restorations",
    title: "Sewer and Drain Repairs",
    description:
      "Comprehensive structural repair and restoration for damaged, broken, or collapsed sewer and drain lines.",
    longDescription:
      "Whether caused by shifting soil, tree root intrusion, or pipe aging, sewer and drain line damage requires prompt professional attention. We provide heavy-duty residential and commercial repair services to ensure your entire wastewater system remains secure and sanitary.",
    image: "/images/client-images/sewer-pipe-repair-1.webp",
    ctaText: "Sewer Repairs",
    ctaLink: "/our-services/sewer-and-drain-repairs",
    bulletPoints: [
      "Root intrusion removal and damaged pipe section replacement",
      "Resolution for persistent sewer backups and structural collapses",
      "Heavy-duty materials built to withstand shifting ground pressure",
      "Compliance with local plumbing codes and environmental safety"
    ],
    footerHeading: "Facing Major Sewer Line Damage?",
    footerText: "Trust our seasoned professionals to deliver durable, long-lasting sewer and drain repair solutions."
  },
  {
    id: "sewer-and-drain-video-inspections",
    tag: "Advanced Diagnostics",
    title: "Sewer and Drain Video Inspections",
    description:
      "High-definition camera inspections to accurately diagnose hidden problems inside your sewer and drain lines.",
    longDescription:
      "Stop guessing where your plumbing issues lie. Our advanced sewer and drain video inspection service runs a specialized high-definition camera through your entire line, projecting real-time video to locate cracks, root intrusion, and blockages with absolute precision.",
    image: "/images/client-images/sewer-video-inspection-2.webp",
    ctaText: "Video Inspection",
    ctaLink: "/our-services/sewer-and-drain-video-inspections",
    bulletPoints: [
      "High-definition real-time interior pipe visualization",
      "Pinpoint accuracy for locating underground damage without digging",
      "Clear digital records for insurance claims or property purchases",
      "Targeted diagnosis saving you time and exploratory excavation costs"
    ],
    footerHeading: "Want to See Inside Your Pipes?",
    footerText: "Get an accurate look at your plumbing's condition with our state-of-the-art sewer and drain video inspections."
  },
  {
    id: "hydro-jetting",
    tag: "High-Pressure Cleaning",
    title: "Hydro Jetting",
    description:
      "Industrial-strength high-pressure water jetting to completely scour and clean stubborn pipe blockages.",
    longDescription:
      "Hydro jetting uses ultra-high-pressure streams of water to blast away stubborn grease, scale, mineral deposits, and roots from the interior walls of your pipes. It leaves your lines as clean as the day they were installed, far outperforming traditional snaking.",
    image: "/images/client-images/hydro-jetting.webp",
    ctaText: "Hydro Jetting",
    ctaLink: "/our-services/hydro-jetting",
    bulletPoints: [
      "Ultra-high-pressure water scouring up to 4000 PSI",
      "Complete removal of hardened grease, scale, and root mats",
      "Restores pipelines back to 100% original inner diameter capacity",
      "Safe and highly effective for both residential and commercial networks"
    ],
    footerHeading: "Need a Deep Pipe Cleanout?",
    footerText: "Experience the ultimate cleaning power of hydro-jetting to eliminate stubborn buildup and prevent future clogs."
  },
  {
    id: "residential-and-commercial",
    tag: "Full-Spectrum Services",
    title: "Residential and Commercial Plumbing",
    description:
      "Expert plumbing, drain, and sewer services tailored for both homeowners and business properties.",
    longDescription:
      "From cozy single-family homes to large commercial complexes, restaurants, and retail spaces, our licensed team is fully equipped to handle plumbing challenges of any scale. We deliver reliable, code-compliant service tailored to your property type.",
    image: "/images/residential-commercial.webp",
    ctaText: "Learn More",
    ctaLink: "/our-services/residential-and-commercial",
    bulletPoints: [
      "Dedicated plumbing support for homes and multi-unit businesses",
      "Adherence to strict commercial health and safety codes",
      "Flexible scheduling to minimize disruption for businesses or families",
      "Scalable solutions from minor fixture leaks to heavy-duty main lines"
    ],
    footerHeading: "Looking for a Trusted Property Partner?",
    footerText: "Count on our versatile team for expert residential and commercial plumbing and drain solutions."
  },
  {
    id: "flush-valve-leak-repairs",
    tag: "Valve Specialist Care",
    title: "Flush Valve Leak Repairs",
    description:
      "Precision repair and replacement for leaking commercial and residential flush valves and flushometers.",
    longDescription:
      "Leaking flush valves lead to constant water waste, noisy bathrooms, and escalating utility bills. Our technicians specialize in rebuilding and replacing worn flush valve diaphragms, seals, and complete assemblies for flawless, quiet operation.",
    image: "/images/client-images/shower-valve-2.webp",
    ctaText: "Repair Flush Valve",
    ctaLink: "/our-services/flush-valve-leak-repairs",
    bulletPoints: [
      "Diaphragm and seal replacements for commercial flushometers",
      "Resolution of continuous water trickling and high-pressure leaks",
      "Adjustment of water volume for optimal flushing efficiency",
      "Reduction of water waste and lower monthly utility costs"
    ],
    footerHeading: "Dealing with a Leaking Flush Valve?",
    footerText: "Stop water waste and annoying trickling sounds with our professional flush valve repair services."
  },
  {
    id: "sump-pump-repairs-or-replacement",
    tag: "Flood Protection",
    title: "Sump Pump Repairs or Replacement",
    description:
      "Reliable sump pump repair and installation to keep your basement dry during heavy storms.",
    longDescription:
      "A failing sump pump can leave your basement vulnerable to severe flooding and water damage during heavy rainfall. We provide prompt diagnostics, motor repairs, and full sump pump replacements including backup battery systems to keep your property protected year-round.",
    image: "/images/client-images/sump-pump.webp",
    ctaText: "Sump Pump Services",
    ctaLink: "/our-services/sump-pump-repairs-or-replacement",
    bulletPoints: [
      "Emergency motor troubleshooting and switch mechanism repairs",
      "High-capacity primary sump pump replacements",
      "Battery backup system installations for storm power outages",
      "Basement waterproofing and pit basin cleaning"
    ],
    footerHeading: "Is Your Basement Protected from Floods?",
    footerText: "Ensure your sump pump is ready for the next heavy storm with our expert repair and replacement services."
  },
  {
    id: "sewage-ejector-pumps-repairs-or-replacement",
    tag: "Wastewater Pumping",
    title: "Sewage Ejector Pumps Repairs or Replacement",
    description:
      "Professional service for below-grade sewage ejector pumps handling basement bathrooms and laundry.",
    longDescription:
      "Basement bathrooms, laundry rooms, and wet bars rely on sewage ejector pumps to lift wastewater up to the main sewer line. If your ejector pump fails, it can cause severe backups. We offer fast repair, maintenance, and heavy-duty replacement services.",
    image: "/images/client-images/ejector.webp",
    ctaText: "Ejector Pump Services",
    ctaLink: "/our-services/sewage-ejector-pumps-repairs-or-replacement",
    bulletPoints: [
      "Grinder and solids-handling pump diagnostics and repair",
      "Basement wastewater backup prevention and clearing",
      "Complete heavy-duty sewage ejector pump replacement",
      "Float switch and check valve inspection and servicing"
    ],
    footerHeading: "Basement Plumbing Backup Issues?",
    footerText: "Keep your below-grade drainage running safely with our expert sewage ejector pump services."
  }
];