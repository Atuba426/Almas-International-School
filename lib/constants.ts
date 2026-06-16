import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  TreePine,
  Building2,
  BookOpenCheck,
  Trophy,
  Microscope,
  Laptop,
  Library,
  CheckCircle2,
  HeartHandshake,
  Compass,
  ShieldCheck,
  Sparkles,
  Baby,
  School,
  FlaskConical,
  GraduationCap,
  Dumbbell,
  Palette,
  Music,
  Search,
  FileText,
  ClipboardCheck,
  Wallet,
  PartyPopper,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import type {
  NavLink,
  SocialLink,
  HighlightFeature,
  FacilityItem,
  StatItem,
  GalleryItem,
  AboutBulletPoint,
  AcademicProgram,
  CoreValue,
  TimelineMilestone,
  FacultyMember,
  FacilityDetail,
  AdmissionStep,
  AdmissionRequirement,
  FAQItem,
  GalleryCategory,
  ExtendedGalleryItem,
  ContactInfoItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Almas International School",
  shortName: "Almas International",
  legalName: "Almas International School",
  description:
    "A premier institution blending Islamic values with modern CBSE education, nestled in a nature-surrounded campus with boys hostel facilities.",
  url: "https://almasschool.com/",
  motto: "Knowledge • Character • Excellence",
  phone: "+91 8500572786",
  whatsapp: "918500572786", // Formatted cleanly for API strings
  email: "almashighschool@gmail.com",
  address: "#6-69, Chincholi Road, Allahpur-Tandur, Allahpur, Telangana",
  addressLocality: "Allahpur-Tandur", 
  addressRegion: "Telangana", 
  postalCode: "501141",
  country: "IN",
  latitude: 17.3072,
  longitude: 77.4915,
  areasServed: ["Allahpur", "Tandur", "Vikarabad", "Hyderabad", "Telangana"],
  ogImage: "/images/almas-international-school-Hyderabad.webp",
  socials: {
    facebook:
      "https://www.facebook.com/p/Almas-international-school-100070496185979/",
    instagram: "https://www.instagram.com/almashighsch/",
    youtube: "https://www.youtube.com/@shining_star_087/shorts",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Almas-international-school-100070496185979/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/almashighsch/",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@shining_star_087/shorts",
    icon: FaYoutube,
  },
];

export const WHATSAPP_ICON = FaWhatsapp;

export const HIGHLIGHT_FEATURES: HighlightFeature[] = [
  {
    id: "nature-campus",
    title: "Nature Surrounded Campus",
    description:
      "Our sprawling green campus offers a peaceful, eco-friendly environment that nurtures curiosity and well-being away from city noise.",
    icon: TreePine,
  },
  {
    id: "boys-hostel",
    title: "Boys Hostel Facility",
    description:
      "Safe, comfortable, and well-supervised hostel accommodation with nutritious meals, study halls, and round-the-clock care.",
    icon: Building2,
  },
  {
    id: "islamic-modern",
    title: "Islamic + Modern Education",
    description:
      "A balanced curriculum integrating Islamic values and character building alongside a rigorous, future-ready modern academic program.",
    icon: BookOpenCheck,
  },
  {
    id: "cbse-results",
    title: "100% CBSE Results",
    description:
      "A proud legacy of 100% pass results in CBSE examinations for five consecutive years, reflecting our commitment to academic excellence.",
    icon: Trophy,
  },
];

export const ABOUT_BULLET_POINTS: AboutBulletPoint[] = [
  { id: "1", text: "CBSE-affiliated curriculum with experienced faculty" },
  { id: "2", text: "Holistic development through academics, sports & arts" },
  { id: "3", text: "Modern smart classrooms and well-equipped laboratories" },
  { id: "4", text: "Value-based education rooted in Islamic teachings" },
  { id: "5", text: "Safe, nature-rich campus with boys hostel facility" },
];

export const FACILITIES: FacilityItem[] = [
  {
    id: "hostel",
    title: "Boys Hostel",
    description:
      "Comfortable dormitories, nutritious meals, and dedicated wardens ensuring a safe home away from home.",
    image:
      "/images/almas-international-school-telengana-boys-hostel.webp",
  },
  {
    id: "library",
    title: "Library",
    description:
      "A vast collection of books, journals, and digital resources to fuel a lifelong love of reading and research.",
    image:
      "/images/almas-inernational-school-telengana-library.webp",
  },
  {
    id: "science-lab",
    title: "Science Lab",
    description:
      "Fully-equipped Physics, Chemistry, and Biology labs for hands-on experiments and scientific discovery.",
    image:
      "/images/almas-inernational-school-telengana-science-lab.webp",
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description:
      "Modern computer labs with high-speed internet, preparing students for a digital-first future.",
    image:
      "/images/almas-inernational-school-telengana-computer-lab.webp",
  },
];

export const FACILITY_ICONS = {
  hostel: Building2,
  library: Library,
  "science-lab": Microscope,
  "computer-lab": Laptop,
};

export const RESULT_STATS: StatItem[] = [
  { id: "results", label: "CBSE Results", value: "100", suffix: "%" },
  { id: "years", label: "Consecutive Years", value: "5", suffix: "+" },
  { id: "students", label: "Students", value: "500", suffix: "+" },
  { id: "faculty", label: "Expert Faculty", value: "20", suffix: "+" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/almas-inernational-school-telengana-smart-classrooms-.webp",
    alt: "Students in classroom at Almas International School",
    label: "Smart Classrooms",
    size: "large",
  },
  {
    id: "g2",
    src: "/images/almas-international-school-Hyderabad-maths-lab.webp",
    alt: "Math Lab with students Experimenting",
    label: "Math Lab",
    size: "medium",
  },
  {
    id: "g3",
    src: "/images/almas-international-school-hyderabad-basketball-court.webp",
    alt: "Students playing sports on campus",
    label: "Sports Day",
    size: "medium",
  },
  {
    id: "g4",
    src: "/images/almas-inernational-school-telengana-dinning-hall.webp",
    alt: "Dining Hall for Students",
    label: "Dining Hall",
    size: "wide",
  },
  {
    id: "g5",
    src: "/images/almas-inernational-school-telengana-cricket-ground.webp",
    alt: "Green campus surrounded by nature",
    label: "Campus Grounds",
    size: "tall",
  },
  {
    id: "g6",
    src: "/images/almas-inernational-school-telengana-annual-day.webp",
    alt: "Graduation ceremony at the school",
    label: "Annual Day",
    size: "medium",
  },
  {
    id: "g7",
    src: "/images/almas-inernational-school-telengana-swimming-pool.webp",
    alt: "Students collaborating on a project",
    label: "Group Activities",
    size: "medium",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "knowledge",
    title: "Knowledge",
    description:
      "We cultivate intellectual curiosity and a genuine love for learning through a rigorous, well-rounded CBSE curriculum.",
    icon: BookOpenCheck,
  },
  {
    id: "character",
    title: "Character",
    description:
      "Rooted in Islamic values, we nurture honesty, discipline, empathy, and a strong moral compass in every student.",
    icon: HeartHandshake,
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "We set high standards in academics, conduct, and extracurriculars — and support every student in reaching them.",
    icon: Trophy,
  },
  {
    id: "guidance",
    title: "Guidance",
    description:
      "Dedicated mentors and counsellors walk alongside students, helping them discover their strengths and ambitions.",
    icon: Compass,
  },
  {
    id: "safety",
    title: "Safety & Care",
    description:
      "A secure, nature-rich campus and attentive hostel staff ensure every child feels protected and cared for.",
    icon: ShieldCheck,
  },
  {
    id: "growth",
    title: "Holistic Growth",
    description:
      "Sports, arts, and community service complement academics for truly well-rounded development.",
    icon: Sparkles,
  },
];

export const CHECK_ICON = CheckCircle2;

// =======================================================================
// EXTENSIONS APPENDED FROM FILE 2 & EXTRA ARRAYS
// =======================================================================

export const SEO_KEYWORDS = [
  "Almas International School",
  "Almas International School Vikarabad",
  "best school in Vikarabad",
  "best school in Hyderabad",
  "best school in Telangana",
  "best CBSE school near Hyderabad",
  "best CBSE school in Vikarabad",
  "top schools in Vikarabad Telangana",
  "CBSE school Vikarabad",
  "CBSE school Telangana",
  "boys hostel school",
  "boys hostel school Vikarabad",
  "boys hostel school Hyderabad",
  "residential school with boys hostel Telangana",
  "Islamic school Telangana",
  "Islamic and modern education school",
  "school with 100% CBSE results",
  "nature campus school Hyderabad",
  "best residential school near Hyderabad",
];

export const SCHOOL_TIMELINE: TimelineMilestone[] = [
  {
    id: "founding",
    year: "2010",
    title: "Foundation Laid",
    description:
      "Almas International School was established with a vision to blend Islamic values with modern CBSE education.",
  },
  {
    id: "campus",
    year: "2012",
    title: "New Nature Campus",
    description:
      "Relocated to our current nature-surrounded campus, offering students a calm, green environment for learning.",
  },
  {
    id: "hostel",
    year: "2016",
    title: "Boys Hostel Opened",
    description:
      "Introduced residential facilities for boys, enabling students from across the region to join our community.",
  },
  {
    id: "results",
    year: "2021",
    title: "100% CBSE Results Begin",
    description:
      "Began our ongoing streak of 100% CBSE pass results, now sustained for five consecutive years.",
  },
  {
    id: "expansion",
    year: "2025",
    title: "Expanded Facilities",
    description:
      "Upgraded science and computer labs, library, and sports infrastructure to serve our growing student body.",
  },
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "principal",
    name: "MRS Benazeer ",
    role: "Principal",
    image:
      "/gallery/principal-almas-international-school.webp",
  },
  {
    id: "chairman",
    name: "Abdullah Azhar Qasmi",
    role: "Chairman",
    image:
      "/gallery/almas-international-school-chaiman.webp",
  },
  {
    id: "academic-head",
    name: "Abdul Rahman Athar Qasmi",
    role: "Director",
    image:
      "/gallery/almas-international-school-director.webp",
  },
 
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "pre-primary",
    level: "Pre-Primary",
    grades: "Nursery – KG",
    description:
      "A nurturing, play-based introduction to learning that builds curiosity, motor skills, and social confidence.",
    subjects: [
      "Language Readiness",
      "Numeracy",
      "Art & Craft",
      "Rhymes & Stories",
      "Motor Skills",
    ],
    icon: Baby,
  },
  {
    id: "primary",
    level: "Primary",
    grades: "Grades 1 – 5",
    description:
      "A strong foundation in core subjects combined with Islamic studies, building confident communicators and thinkers.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Islamic Studies",
      "Computer Basics",
    ],
    icon: School,
  },
  {
    id: "middle",
    level: "Middle School",
    grades: "Grades 6 – 8",
    description:
      "An expanded curriculum that deepens conceptual understanding and introduces structured lab and project work.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Arabic",
      "Computer Science",
    ],
    icon: FlaskConical,
  },
  {
    id: "secondary",
    level: "Secondary",
    grades: "Grades 9 – 10",
    description:
      "Focused CBSE board preparation with personalized academic support to achieve outstanding results.",
    subjects: [
      "English",
      "Mathematics",
      "Science",
      "Social Science",
      "Islamic Studies",
      "Information Technology",
    ],
    icon: GraduationCap,
  },
];

export const CO_CURRICULAR_ACTIVITIES = [
  { id: "sports", title: "Sports & Athletics", icon: Dumbbell },
  { id: "arts", title: "Art & Physical Activities", icon: Palette },
  { id: "Namaz", title: "Namaz & Quran Recitation", icon: Music },
  { id: "science-club", title: "Science Club", icon: FlaskConical },
];

export const FACILITY_DETAILS: FacilityDetail[] = [
  {
    id: "hostel",
    title: "Boys Hostel — Vikarabad",
    description:
      "Our residential boys hostel in Vikarabad offers a safe, disciplined, and homely environment for boarding students from Vikarabad, Hyderabad, and across Telangana, with dedicated wardens, nutritious meals, and supervised study hours.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5",
      video: "https://res.cloudinary.com/dc8ay9usz/video/upload/f_auto,q_auto/v1781575981/boys-hostel-almas_khxjuh.mp4",
    points: [
      "24/7 warden supervision and security",
      "Nutritious, home-style meals",
      "Dedicated study halls and prayer area",
      "Comfortable dormitories with ample storage",
    ],
    icon: Building2,
  },
  {
    id: "library",
    title: "Library",
    description:
      "A spacious, well-stocked library housing thousands of books across fiction, reference, and academic categories, along with a quiet reading zone and digital catalog.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    points: [
      "Extensive collection of books & journals",
      "Dedicated reading and research zones",
      "Digital catalog and e-resources",
      "Regular reading programs and book clubs",
    ],
    icon: Library,
    reverse: true,
  },
  {
    id: "science-lab",
    title: "Science Laboratories",
    description:
      "Separate, fully-equipped laboratories for Physics, Chemistry, and Biology give students hands-on experience that brings textbook concepts to life.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    points: [
      "Dedicated Physics, Chemistry & Biology labs",
      "Modern apparatus and safety equipment",
      "Hands-on experiments aligned with CBSE curriculum",
      "Trained lab assistants for guided learning",
    ],
    icon: Microscope,
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    description:
      "A modern computer lab equipped with updated systems and high-speed internet helps students build essential digital literacy and coding skills.",
    image:
      "/gallery/almas-international-school-hyderabad-computer-lab-facility.webp",
    points: [
      "Updated systems with high-speed internet",
      "Structured IT and coding curriculum",
      "Typing and digital literacy programs",
      "Smart classroom integration",
    ],
    icon: Laptop,
    reverse: true,
  },
  {
    id: "sports",
    title: "Sports & Playground",
    description:
      "Expansive outdoor grounds and dedicated areas for athletics, football, cricket, and indoor games keep students active and healthy.",
    image:
      "/gallery/almas-volley-ball-court.webp",
    points: [
      "Large outdoor playground and athletics track",
      "Football and cricket practice areas",
      "Indoor games room",
      "Annual sports day and inter-house competitions",
    ],
    icon: Dumbbell,
  },
  {
    id: "campus-grounds",
    title: "Nature-Surrounded Campus",
    description:
      "Set amid lush greenery, our campus offers a calm, pollution-free environment that promotes focus, creativity, and well-being.",
    image:
      "/gallery/almas-capmus-facility.webp",
    points: [
      "Green, tree-lined campus grounds",
      "Clean air and peaceful learning environment",
      "Outdoor learning and activity spaces",
      "Eco-conscious campus initiatives",
    ],
    icon: TreePine,
    reverse: true,
  },
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    id: "enquire",
    step: 1,
    title: "Enquire",
    description:
      "Reach out via phone, WhatsApp, or our contact form to express interest and ask any initial questions.",
    icon: Search,
  },
  {
    id: "apply",
    step: 2,
    title: "Submit Application",
    description:
      "Fill out the admission form and submit required documents along with the application fee.",
    icon: FileText,
  },
  {
    id: "assessment",
    step: 3,
    title: "Assessment & Interaction",
    description:
      "Shortlisted students attend a basic assessment and an informal interaction with our academic team.",
    icon: ClipboardCheck,
  },
  {
    id: "confirm",
    step: 4,
    title: "Confirm Admission",
    description:
      "Upon selection, complete the fee payment and documentation to confirm your child's seat.",
    icon: Wallet,
  },
  {
    id: "welcome",
    step: 5,
    title: "Welcome to Almas",
    description:
      "Receive your welcome kit, class details, and orientation schedule ahead of the academic year.",
    icon: PartyPopper,
  },
];

export const ADMISSION_REQUIREMENTS: AdmissionRequirement[] = [
  { id: "1", text: "Completed admission application form" },
  { id: "2", text: "Birth certificate (original + copy)" },
  { id: "3", text: "Previous school's transfer certificate (if applicable)" },
  { id: "4", text: "Latest report card / academic records" },
  { id: "5", text: "4 recent passport-size photographs" },
  { id: "6", text: "Address and identity proof of parents/guardians" },
];

export const ADMISSION_FAQS: FAQItem[] = [
  {
    id: "age-criteria",
    question: "What is the minimum age for admission to Nursery?",
    answer:
      "Children must be at least 3 years old as of June 1st of the academic year to be eligible for admission to Nursery.",
  },
  {
    id: "hostel-eligibility",
    question: "Who can apply for the boys hostel in Vikarabad?",
    answer:
      "The boys hostel at our Vikarabad campus is open to students from Grade 3 and above, including students travelling from Hyderabad, Tandur, Pargi, and other parts of Telangana. Priority is given to students residing outside the local commuting area, subject to availability of seats.",
  },
  {
    id: "transfer-admission",
    question: "Can my child join mid-year through a transfer?",
    answer:
      "Yes, transfer admissions are considered based on seat availability and a brief assessment to ensure the student can comfortably join the ongoing curriculum.",
  },
  {
    id: "fee-structure",
    question: "How can I get details about the fee structure?",
    answer:
      "Detailed fee structures vary by grade and are shared with shortlisted applicants. You can also request this information directly through our contact form or by calling the admissions office.",
  },
  {
    id: "documents-required",
    question: "What documents are required at the time of admission?",
    answer:
      "Please refer to the admission requirements listed on this page, including birth certificate, previous academic records, transfer certificate (if applicable), and identity proofs of parents or guardians.",
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "academics", label: "Academics" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "hostel", label: "Hostel Life" },
];

export const EXTENDED_GALLERY_ITEMS: ExtendedGalleryItem[] = [
  {
    id: "g1",
    src: "/images/almas-international-school-smart-classroom-boarding.webp",
    alt: "Students in a smart classroom at Almas International School",
    label: "Smart Classrooms",
    category: "academics",
    size: "large",
  },
  {
    id: "g2",
    src: "/gallery/almas-international-school-clean-library.webp",
    alt: "Students reading in the school library",
    label: "Library",
    category: "academics",
    size: "medium",
  },
  {
    id: "g3",
    src: "/gallery/almas-international-school-sports-day.webp",
    alt: "Students playing sports on the school grounds",
    label: "Sports Day",
    category: "sports",
    size: "medium",
  },
  {
    id: "g4",
    src: "/gallery/almas-international-school-activity-room.webp",
    alt: "Students conducting a science experiment in the lab",
    label: "Activity Room",
    category: "academics",
    size: "wide",
  },
  {
    id: "g5",
    src: "/gallery/almas-international-school-play-area.webp",
    alt: "Green, nature-surrounded school campus grounds",
    label: "Play Area",
    category: "campus",
    size: "tall",
  },
  {
    id: "g6",
    src: "/gallery/almas-international-school-republic-day.webp",
    alt: "Students at the annual day graduation ceremony",
    label: "Annual Day",
    category: "events",
    size: "medium",
  },
  {
    id: "g7",
    src: "/gallery/almas-international-school-group-activity.webp",
    alt: "Students collaborating on a group project",
    label: "Group Activities",
    category: "academics",
    size: "medium",
  },
  {
    id: "g8",
    src: "/images/almas-international-school-telengana-boys-hostel.webp",
    alt: "Boys hostel dormitory and common area",
    label: "Hostel Dormitory",
    category: "hostel",
    size: "wide",
  },
  {
    id: "g9",
    src: "/gallery/almas-international-school-corridor.webp",
    alt: "Students and teachers gathered on campus",
    label: "School Corridor",
    category: "campus",
    size: "medium",
  },
  {
    id: "g10",
    src: "/gallery/almas-international-school-tennis-court.webp",
    alt: "Students participating in a Tennis match",
    label: "Tennis Practice",
    category: "sports",
    size: "medium",
  },
  {
    id: "g11",
    src: "/gallery/almas-international-school-cultural-program.webp",
    alt: "Cultural event performance at the school auditorium",
    label: "Cultural Program",
    category: "events",
    size: "tall",
  },
  {
    id: "g12",
    src: "/gallery/almas-international-school-study-hour.webp",
    alt: "Hostel students studying together in the evening",
    label: "Evening Study Hour",
    category: "hostel",
    size: "wide",
  },
];

export const CONTACT_INFO: ContactInfoItem[] = [
  {
    id: "address",
    label: "Visit Us",
    value: SITE_CONFIG.address,
    href: "https://www.google.com/maps/search/?api=1&query=Almas+High+School+Telangana",
    icon: MapPin,
  },
  {
    id: "phone",
    label: "Call Us",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, "")}`, // Strips non-dialable formats cleanly
    icon: Phone,
  },
  {
    id: "email",
    label: "Email Us",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    id: "hours",
    label: "Office Hours",
    value: "Mon – Sat: 8:00 AM – 4:00 PM",
    href: "#",
    icon: Clock,
  },
];
