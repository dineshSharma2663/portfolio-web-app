export type ExperienceItem = {
  id: string;
  company: string;
  location: string;
  role: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  summary: string;
  achievements: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  organization?: string;
  category: string;
  featured?: boolean;
  description: string;
  tech?: string[];
};

export const portfolioData = {
  siteConfig: {
    siteTitle: "Dinesh Kumar Portfolio",
    siteDescription:
      "Senior iOS Developer portfolio showcasing experience, skills, projects, and achievements.",
    theme: "dark",
    primaryColor: "blue",
    accentColor: "cyan",
    showResumeDownload: true,
    showContactSection: true,
    showAwardsSection: true,
    showEducationSection: true,
  },
  seo: {
    title: "Dinesh Kumar | Senior iOS Developer",
    description:
      "Senior iOS Developer with 10 years of experience in Swift, SwiftUI, Objective-C, scalable architecture, fintech, banking, healthcare, and consumer mobile apps.",
    keywords: [
      "Dinesh Kumar",
      "iOS Developer",
      "Senior iOS Developer",
      "Swift Developer",
      "SwiftUI Developer",
      "Mobile App Developer",
      "Objective-C Developer",
    ],
  },
  profile: {
    fullName: "Dinesh Kumar",
    firstName: "Dinesh",
    lastName: "Kumar",
    headline: "Senior iOS Developer",
    subHeadline:
      "10 years of experience building scalable mobile applications across banking, fintech, healthcare, e-commerce, and on-demand platforms.",
    currentRole: "Lead Software Engineer",
    totalExperienceYears: 10,
    location: {
      city: "Gurgaon",
      state: "Haryana",
      country: "India",
    },
    email: "dinesh.sharma2663@gmail.com",
    phones: ["+91-(870)-852-7132", "+91-(997)-114-6858"],
    profileImage: "/images/profile.png",
    resumeFile: "/resume/dinesh-kumar-ios-resume.pdf",
    availability: "Open to opportunities",
  },
  hero: {
    title: "Senior iOS Developer",
    tagline: "Building reliable, scalable, and user-focused mobile experiences.",
    shortIntro:
      "I am a senior iOS developer with strong experience in Swift, SwiftUI, Objective-C, architecture design, integrations, performance optimization, and App Store delivery.",
    ctaPrimary: {
      label: "View Projects",
      href: "#projects",
    },
    ctaSecondary: {
      label: "Contact Me",
      href: "#contact",
    },
  },
  about: {
    summary:
      "Senior iOS engineer with 10 years of experience building enterprise and consumer mobile applications. Worked across banking, payments, healthcare, e-commerce, and on-demand services. Strong hands-on experience in Swift, SwiftUI, Objective-C, architecture planning, secure integrations, location-based features, payment systems, and release management.",
    shortCoverDescription:
      "I am a senior iOS developer with 10 years of experience in designing, developing, and delivering high-quality mobile applications. I have worked on both enterprise and consumer products across banking, fintech, healthcare, e-commerce, and on-demand services. My strengths include Swift, SwiftUI, scalable architecture, secure integrations, performance-focused development, and cross-functional collaboration. I am looking for opportunities where I can contribute strong mobile engineering skills, product thinking, and dependable execution.",
    highlights: [
      "10 years of iOS development experience",
      "Strong in Swift, SwiftUI, and Objective-C",
      "Built apps across banking, payments, healthcare, and on-demand domains",
      "Experience with scalable architecture and App Store releases",
      "Worked in lead and senior engineering roles",
    ],
  },
  stats: {
    yearsOfExperience: 10,
    companiesWorked: 4,
    featuredProjects: 6,
    awardsCount: 3,
  },
  skills: {
    core: [
      "Swift",
      "SwiftUI",
      "Objective-C",
      "UIKit",
      "Xcode",
      "iOS Architecture",
      "App Store Release Management",
    ],
    architecture: [
      "MVC",
      "MVVM",
      "Clean Architecture",
      "Clean-VIPER",
      "Protocol Oriented Programming",
      "OOPS",
      "Test Driven Development",
    ],
    mobileEngineering: [
      "Adaptive Layouts",
      "Storyboards",
      "Caching",
      "JSON Parsing",
      "Pagination",
      "Memory Management",
      "GCD",
      "NSOperation",
      "Push Notifications",
      "In-App Purchases",
    ],
    integrations: [
      "Stripe",
      "Braintree",
      "PayPal",
      "Apple Pay",
      "Firebase Database",
      "Remote Config",
      "Google Analytics",
      "Crashlytics",
      "Social Login Integrations",
    ],
    locationAndTracking: [
      "Geofencing",
      "Maps",
      "GPS",
      "Location Services",
      "Significant Location Change",
      "NFC",
    ],
    tools: [
      "Xcode",
      "Visual Studio Code",
      "Charles",
      "SourceTree",
      "Git",
      "JIRA",
      "Instruments",
    ],
    otherLanguages: ["C", "C++", "JavaScript", "SQL"],
  },
  experience: [
    {
      id: "publicis-sapient",
      company: "Publicis Sapient",
      location: "Gurgaon, India",
      role: "Lead Software Engineer",
      employmentType: "Full-time",
      startDate: "2019-05",
      endDate: "Present",
      isCurrent: true,
      summary:
        "Leading iOS engineering work with involvement in planning, technical discussions, and execution.",
      achievements: [
        "Designed work breakdown structures and technical approach discussions with project architect and business analyst",
        "Delivered development aligned with iOS Human Interface Guidelines and JIRA-driven workflows",
        "Contributed to scalable mobile solution planning and delivery",
      ],
    },
    {
      id: "mobikwik",
      company: "MobiKwik",
      location: "Gurgaon, India",
      role: "Senior Software Engineer",
      employmentType: "Full-time",
      startDate: "2018-07",
      endDate: "2019-05",
      isCurrent: false,
      summary:
        "Worked on app architecture, timelines, UI experience, and secure iOS feature integration.",
      achievements: [
        "Designed app flow architecture and contributed to timeline planning",
        "Built polished interfaces using iOS Human Interface Guidelines and animations",
        "Integrated modern iOS features using secure development practices",
      ],
    },
    {
      id: "charpixel",
      company: "Charpixel Technologies",
      location: "Noida, India",
      role: "Senior iOS Developer",
      employmentType: "Full-time",
      startDate: "2016-12",
      endDate: "2018-02",
      isCurrent: false,
      summary:
        "Worked on architecture discussions, wireframes, UI development, caching, and App Store releases.",
      achievements: [
        "Collaborated with project managers and designers on app architecture and wireframes",
        "Built smooth interfaces with caching and animations",
        "Managed App Store uploads and trained iOS interns",
      ],
    },
    {
      id: "click-labs",
      company: "Click Labs Pvt. Ltd.",
      location: "Chandigarh, India",
      role: "iOS Developer",
      employmentType: "Full-time",
      startDate: "2014-01",
      endDate: "2016-12",
      isCurrent: false,
      summary:
        "Built a strong base in iOS development, web service integration, app architecture, and debugging.",
      achievements: [
        "Learned core iOS development, Objective-C, Swift, provisioning profiles, and certificate management",
        "Coordinated with backend developers on database and web service integration",
        "Supported architecture planning, debugging, and problem solving during development",
      ],
    },
  ] satisfies ExperienceItem[],
  domainExpertise: [
    "Banking",
    "Fintech",
    "Digital Wallet",
    "Healthcare",
    "E-commerce",
    "On-demand Services",
    "Location-based Services",
    "Fleet Tracking",
    "Sports Applications",
  ],
  featuredProjects: [
    {
      id: "swapp",
      name: "SWApp - Scottish Widows",
      organization: "Lloyds Banking Group",
      category: "Banking",
      featured: true,
      description:
        "Mobile app for pensions, savings, and investment account access with dashboards and policy information.",
      tech: ["iOS", "Swift", "Mobile Architecture"],
    },
    {
      id: "us-bank",
      name: "U.S. Bank Mobile App",
      organization: "U.S. Bank",
      category: "Banking",
      featured: true,
      description:
        "Mobile banking app for account management, money movement, cash flow tracking, and personalized insights.",
      tech: ["iOS", "Swift", "Secure Mobile Development"],
    },
    {
      id: "mcdonalds",
      name: "McDonald's Mobile Order App",
      organization: "McDonald's",
      category: "Consumer App",
      featured: true,
      description:
        "Mobile ordering and payment app supporting deal selection and multiple pickup options.",
      tech: ["iOS", "Payments", "Consumer Experience"],
    },
    {
      id: "mobikwik-project",
      name: "MobiKwik",
      organization: "MobiKwik",
      category: "Fintech",
      featured: true,
      description:
        "Digital payments and recharge app covering bills, tickets, insurance, and everyday payment use cases.",
      tech: ["Fintech", "Payments", "iOS"],
    },
    {
      id: "medrexa",
      name: "Medrexa & Medrexa Pro",
      organization: "Medrexa",
      category: "Healthcare",
      featured: true,
      description:
        "Healthcare social platform for sharing health-related information and public health pages.",
      tech: ["iOS", "Healthcare", "Social Platform"],
    },
    {
      id: "kidcircle",
      name: "KidCircle & KidCircle Business",
      organization: "KidCircle",
      category: "Family / Discovery",
      featured: true,
      description:
        "Family activity discovery app matching events and activities based on schedule, age, and interests.",
      tech: ["iOS", "Matching", "Location"],
    },
  ] satisfies ProjectItem[],
  otherProjects: [
    {
      id: "spare",
      name: "SPARE",
      category: "Fintech",
      description:
        "Community-based mobile cash access platform that turns cash registers into ATM-like access points.",
    },
    {
      id: "bfab",
      name: "bfab & bfab artist",
      category: "On-demand Services",
      description:
        "On-demand beauty services app offering at-home, office, and hotel appointments.",
    },
    {
      id: "rodeoresults",
      name: "RodeoResults",
      category: "Sports",
      description:
        "Real-time sports tracking platform for scores, standings, athletes, and earnings.",
    },
    {
      id: "xbowling",
      name: "Xbowling",
      category: "Sports / Gamified Product",
      description:
        "Competitive bowling app with stats, match history, and rewards.",
    },
    {
      id: "photosesh",
      name: "PhotoSesh",
      category: "On-demand Marketplace",
      description:
        "GPS and calendar-based photography booking platform for on-demand and scheduled sessions.",
    },
  ] satisfies ProjectItem[],
  achievements: [
    "Worked on Clean Architecture",
    "Worked on Test Driven Development",
    "Built products in digital wallet, e-commerce, healthcare, on-demand services, sports, geofencing, NFC, and fleet tracking domains",
  ],
  awards: [
    {
      title: "Employee of the Year",
      organization: "Click Labs Pvt. Ltd.",
      year: "2014-15",
    },
    {
      title: "Project Bonus Achiever",
      organization: "Click Labs Pvt. Ltd.",
      year: "2015-16",
      count: 2,
    },
    {
      title: "Best Performer of the Year",
      organization: "Charpixel Technologies",
      year: "2017-18",
    },
  ],
  education: [
    {
      institution: "Panjab University, Hoshiarpur",
      degree: "B.E. in E.C.E",
      startDate: "2010-06",
      endDate: "2014-06",
      score: "76%",
    },
  ],
  contact: {
    email: "dinesh.sharma2663@gmail.com",
    phonePrimary: "+91-(870)-852-7132",
    phoneSecondary: "+91-(997)-114-6858",
    locationLabel: "Gurgaon, Haryana, India",
    contactTitle: "Let's build something impactful",
    contactDescription:
      "Open to senior iOS engineering roles, freelance work, and product-focused mobile opportunities.",
  },
  navigation: [
    { label: "Home", href: "#home", visible: true },
    { label: "About", href: "#about", visible: true },
    { label: "Experience", href: "#experience", visible: true },
    { label: "Skills", href: "#skills", visible: true },
    { label: "Projects", href: "#projects", visible: true },
    { label: "Awards", href: "#awards", visible: true },
    { label: "Education", href: "#education", visible: true },
    { label: "Contact", href: "#contact", visible: true },
  ],
  portfolioSections: {
    hero: true,
    about: true,
    experience: true,
    skills: true,
    featuredProjects: true,
    otherProjects: true,
    awards: true,
    education: true,
    contact: true,
  },
};

export const skillGroups = [
  { key: "core", label: "Core" },
  { key: "architecture", label: "Architecture" },
  { key: "mobileEngineering", label: "Mobile Engineering" },
  { key: "integrations", label: "Integrations" },
  { key: "locationAndTracking", label: "Location & Tracking" },
  { key: "tools", label: "Tools" },
  { key: "otherLanguages", label: "Other Languages" },
] as const;

export const projectCategories = [
  "All",
  ...Array.from(
    new Set(
      [...portfolioData.featuredProjects, ...portfolioData.otherProjects].map(
        (project) => project.category,
      ),
    ),
  ),
];
