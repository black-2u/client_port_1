import { ProjectType } from "./models";

export const devInfo = {
  name: "Black W",
  email: "blackwang104@gmail.com",
  github: "https://github.com/black-2u",
  telegram: "https://t.me/Black_2U",
  whatsapp: "https://wa.me/13202919094",
};

export const star = "Gaurav Sharma";

export const nickname = "Gaurav Sharma";

export const experience = [
  {
    id: 1,
    title: "UI/UX Designer",
    company: "Global Logic",
    location: "Noida",
    period: "Jan 2022 - Present",
    description: [
      "Fostered collaboration and consistency across the teams by working closely with product managers, designer, and engineers",
      "I have actively engaged in UX design and development within the context of a Lab Automation Platform, striving to enhance the overall user experience. Working closely with cross-functional teams, I have successfully implemented user centered design principles tailored to the Lab Automation Platform's unique requirements.",
      "A key aspect of my role involved optimizing user workflows and interactions, streamlining processes to ensure seamless navigation and efficient usability. Through iterative design and usability testing, I have continually worked towards creating an intuitive and user-friendly experience for all platform users.",
      "Contributed to the Metaverse platform intuitive, ensuring seamless onboarding experiences for new employees.",
    ],
  },
  {
    id: 2,
    title: "UX Designer",
    company: "Capgemihi",
    location: "Pune",
    period: "June 2019 - Jan 2022",
    description: [
      "I have experience in defining user experiences and design frameworks for products across diverse sectors, including E-Commerce (B2C), IT Industry (B2B), Computer Technology (B2E), Power and Utility (B2B) and Supply Chain, Inventory & Order Management (B2C).",
      "As the lead UX designer, I spearheaded the design efforts for the IKEA bristro kiosk, taking a user-centric approach throughout the process. Collaborating closely with stakeholders, I conducted in-depth user research to understand the specific needs, preferences, and pain points of customers when interacting with the kiosk.",
    ],
  },
];

export const skillSet = {
  design: [
    "Interview & Survey",
    "Heuristic Evaluation",
    "Competitor Analysis",
    "Persona & User Stories",
    "Strategic Storyboarding",
    "Journey Mapping",
    "Task Flow & User Flow",
    "Pattern Library",
    "Wireframing",
    "Prototyping",
  ],
  tools: [
    { tool: "Adobe XD", icon: "/svg/adobe-xd.svg" },
    { tool: "Adobe Indesign", icon: "/svg/adobe-indesign.svg" },
    { tool: "Sketch", icon: "/svg/sketch.svg" },
    { tool: "Figma", icon: "/svg/figma.svg" },
    { tool: "Invision", icon: "/svg/invision.svg" },
    { tool: "Illustrator", icon: "/svg/illustrator.svg" },
    { tool: "Photoshop", icon: "/svg/photoshop.svg" },
    { tool: "Premiere Pro", icon: "/svg/premiere.svg" },
    { tool: "After Effects", icon: "/svg/after-effects.svg" },
  ],
};

export const projects: ProjectType[] = [
  {
    id: "1",
    title: "OnboardIT",
    overview:
      "The goal was to design a simple MVP solution to provide a seamless onboarding experience for companies and employees.",
    status: "POC",
    role: "UX Designer",
    tools: ["Adobe XD", "Adobe Illustrator"],
    icons: ["/svg/adobe-xd.svg", "/svg/illustrator.svg"],
    slug: "onboardit",
    url: "https://www.onboardit.com/",
    thumbnail: "/image/1-thumbnail.png",
    // summary, research, solution
    // summary: {content: {title:"", description: [""]}, images:[]}
    summary: {
      content: [
        {
          title: "Business Needs",
          description: [
            "Registration on the company's onboarding portal for your job profile.",
            "Providing necessary information to the company i.e. Documents, Certificates, Degrees etc.",
            "Attending induction, completing mandatory courses and training sessions.",
            "Completing all formalities before joining base location.",
          ],
        },
        {
          title: "Challenges",
          description: [
            "Gathering crucial insights into the employee onboarding process of new joinees & the administration to bridge the gap between them.",
            "Going through all the existing onboarding portals to understand the exisitng taskflows.",
            "Addressing all the main pain points of stakeholders in my proposed solution within two weeks.",
          ],
        },
        {
          title: "Problem Statement",
          description: [
            "Design a dynamic employee onboarding application that assist new hires in completion of their onboarding process.",
          ],
        },
      ],
      image: "/image/1-summary-1.png",
    },
    // research: [ {title: "", subtitle: [""], description:[[""],[""]], images:[""]}]
    research: [
      {
        title: "User Research",
        subtitle: ["", "Pain Points of a New Hire"],
        description: [
          // ""
          [
            "I conducted structured & semi-structured interviews of the stakeholders (New Hires, HR Team and Talent Management team) to understand their challenges, based on the analysis of these interviews combined with my research, I created Journey Maps and User Personas and listed down all the pain points.",
          ],
          // "Pain Points of a New Hire"
          [
            "Understanding the work Hierarchy",
            "Problems in uploading documents",
            "No sample formats",
            "No point of contact for queries",
            "Service agreement and affidavit issues",
            "Training timings were unclear",
            "No systems or softwares assigned",
            "Lack of communication between internal departments causing confusion",
            "Duration of training not specified",
            "Base location allocation issue",
            "Appropriate time was not specified for the approval of the documents",
            "Delay in joining due to background verification",
            "Assistance/ Buddy issue.",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: ["/image/1-research-1-1.png"],
      },
      {
        title: "Research Synthesis",
        subtitle: [""],
        description: [
          [
            "Since I had about two weeks to design a working prototype, I wanted to make sure that I address all the major problems in my proposed solution, which led me to formulate a set of recommendations for features and create information architecture and task flow to design a simple MVP Solution.",
          ],
        ],
        images: ["/image/1-research-2-1.png"],
      },
      {
        title: "Ideation",
        subtitle: [""],
        description: [
          [
            "Once I had all the necessary research and information, I dived quickly into creating low-fidelity wireframes to get a generalised overview of how the applications would function for the new hires.",
          ],
        ],
        images: ["/image/1-research-3-1.png", "/image/1-research-3-2.png"],
      },
      {
        title: "Visual Design",
        subtitle: [""],
        description: [
          [
            "Before I worked my way up to building high-fidelity wireframes and visual mockups, I created visual language and UI components to help me maintain consistency all across the application.",
          ],
        ],
        images: ["/image/1-research-4-1.png", "/image/1-research-4-2.png"],
      },
    ],
    // solution: { title: "", images: [""]}
    solution: {
      title: "Final Solution & Prototype",
      description: [""],
      images: ["/image/1-solution-1.png", "/image/1-solution-2.png"],
    },
  },
  {
    id: "2",
    title: "Shopsafe",
    overview:
      "Shopsafe is a mobile-based application that helps in managing crowd and take preventive measures in shopping complexes to safeguard visitors and staffs during global pandemics like COVID-19.",
    status: "Design Jam",
    role: "UX Designer",
    tools: ["Adobe XD", "Adobe Illustrator"],
    icons: ["/svg/adobe-xd.svg", "/svg/illustrator.svg"],
    slug: "shopsafe",
    url: "https://www.onboardit.com/",
    thumbnail: "/image/2-thumbnail.png",
    // summary, research, solution
    // summary: {content: {title:"", description: [""]}, images:[]}
    summary: {
      content: [
        {
          title: "Design Brief",
          description: [
            "Business facing a challenge on opening the shop for the public while controlling the inflow and maintain social distancing norms. Design a solution to manage the crowd in the shop.",
          ],
        },
        {
          title: "Challenges",
          description: [
            "Proposed solution should abide by the COVID-19 rules and guidelines set by the central and different state government.",
            "The solutions should be technically feasible and easily scalable to different administrative models of shopping complexes and shops.",
            "Understanding target age group and user demographic for mass implementation.",
            "To understand how a crowd management system works in different environment and scenarios.",
          ],
        },
      ],
      image: "/image/2-summary-1.png",
    },
    // research: [ {title: "", subtitle: [""], description:[[""],[""]], images:[""]}]
    research: [
      {
        title: "Research",
        subtitle: [""],
        description: [
          // ""
          [
            "The purpose of my research was to understand the primary need of a crowd management system, effective strategies a crowd management encompasses and feasible technologies that can be leveraged to create an effective and efficient crowd management system framework.",
            "Information collected in the study was based on user interviews and majorly from secondary sources that are available online as research papers, reports, articles and blogs on various websites.",
          ],
          // "Pain Points of a New Hire"
        ],
        images: ["/image/2-research-1-1.png", "/image/2-research-1-2.png"],
      },
      {
        title: "Research - Empathy Map",
        subtitle: [""],
        description: [[""]],
        images: ["/image/2-research-2-1.png"],
      },
      {
        title: "Research - User Journey Map",
        subtitle: [""],
        description: [[""]],
        images: ["/image/2-research-3-1.png"],
      },
      {
        title: "Research - User Persona (Visitor)",
        subtitle: [""],
        description: [[""]],
        images: ["/image/2-research-4-1.png"],
      },
    ],
    // solution: { title: "", images: [""]}
    solution: {
      title: "Final Solution",
      description: [
        "Shopsafe is a mobile-based application that helps in managing crowd in covered shopping complexes and malls.",
        "The application abides by the COVID-19 rules and guidelines set by the government and helps administrations running these shopping complexes to take preventive measures for the safety and comfort of the visitors and staffs during global pandemics like COVID-19.",
        "Shopsafe's crowd management eco-system uses Al, IoT, and Augmented Reality in real-time, helping users of this application to manage their various tasks efficiently.",
      ],
      images: [
        "/image/2-solution-1.png",
        "/image/2-solution-2.png",
        "/image/2-solution-3.png",
        "/image/2-solution-4.png",
        "/image/2-solution-5.png",
      ],
    },
  },
  {
    id: "3",
    title: "Feather App",
    overview:
      "A bird exploration app for species identification, map exploration, and an educational pocket field guide.",
    status: "POC",
    role: "UX Designer",
    tools: ["Adobe XD", "Adobe Illustrator"],
    icons: ["/svg/adobe-xd.svg", "/svg/illustrator.svg"],
    slug: "feather_app",
    url: "",
    thumbnail: "/image/3-thumbnail.png",
    // summary, research, solution
    // summary: {content: {title:"", description: [""]}, images:[]}
    summary: {
      content: [
        {
          title: "PROBLEM",
          description: [
            "Feather aims to make birding and bird information easily accessible to those who wish to enjoy the great outdoors, by providing users with a database to discover bird locations, plan outings, identify species, and contribute to the local birding community.",
          ],
        },
        {
          title: "Challenge",
          description: [
            "The idea for Feather surfaced while talking to a fellow birder about increasing diversity and access to information within the birding community. While various bird resources are available, many of them are not intuitive for new birders. Even on the field, users are having to switch between 2 - 3 related birding apps, detracting from the experience.",
          ],
        },
        {
          title: "Objective",
          description: [
            "Design a mobile app that allows birders to explore local birding environments and access comprehensive species information.",
            "Design a digital experience easily used on the go (based on research insight that complicated technology detracts from the in-the-moment birding experience.)",
          ],
        },
      ],
      image: "/image/3-summary.png",
    },
    // research: [ {title: "", subtitle: [""], description:[[""],[""]], images:[""]}]
    research: [
      {
        title: "Researching the problem space",
        subtitle: ["", "Research Goals"],
        description: [
          // ""
          [
            "According to the U.S. Fish & Wildlife Service, more than 45 million people in the US watch birds annually. Birdwatching can vary from noticing a bird in one’s backyard to traveling to a hotspot for a specific bird sighting. Thus, I wanted to learn about current competitor resources and understand user pain points while birding in the field.",
          ],
          [
            "Understand who is birding and their motivations",
            "Identify frustrations when planning trips or while birding",
            "Identify exploration features that would be most valuable for beginner birders",
            "Analyze current resources offered by competitor apps",
            "Validate the need for an all-inclusive birding field guide and explore app",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: ["/image/3-research-1-1.png"],
      },
      {
        title: "Building user empathy",
        subtitle: [""],
        description: [
          [
            "The competitive analysis and user interviews gave me a better understanding of who the users were and how they might use a birding app. I focused on expanding those findings into concrete visualizations that would help me empathize with users and define the product.",
          ],
        ],
        images: [
          "/image/3-research-2-1.png",
          "/image/3-research-2-2.png",
          "/image/3-research-2-3.png",
        ],
      },
      {
        title: "Design & Prototype",
        subtitle: [""],
        description: [
          [
            "With a better understanding of the users and priority app features, I began designing how those features would be realized. Feather would focus on three main capabilities - exploring birding hotspots, identifying unknown birds, learning about birds through a field guide",
          ],
        ],
        images: [
          "/image/3-research-3-1.png",
          "/image/3-research-3-2.png",
          "/image/3-research-3-3.png",
        ],
      },
    ],
    // solution: { title: "", images: [""]}
    solution: {
      title: "Final Solution",
      description: [""],
      images: ["/image/3-solution-1.png", "/image/3-solution-2.png"],
    },
  },
  {
    id: "4",
    title: "PCS Dashboard",
    overview:
      "User experience dashboard for the PCS team to track and analyze user data.",
    status: "POC",
    role: "UX Designer",
    tools: ["Adobe XD", "Adobe Illustrator"],
    icons: ["/svg/adobe-xd.svg", "/svg/illustrator.svg"],
    slug: "pcs_dashboard",
    url: "",
    thumbnail: "/image/4-thumbnail.png",
    // summary, research, solution
    // summary: {content: {title:"", description: [""]}, images:[]}
    summary: {
      content: [
        {
          title: "PROBLEM",
          description: [
            "The PCS team lacks a unified tool to effectively track, analyze, and visualize user data, leading to inefficiencies and missed insights.",
          ],
        },
        {
          title: "Challenge",
          description: [
            "Creating a seamless, user-friendly interface that consolidates data from various sources into a single, intuitive dashboard.",
          ],
        },
        {
          title: "Objective",
          description: [
            "Enhance usability and enable efficient data-driven decision-making for the PCS team through an integrated, cohesive dashboard experience.",
          ],
        },
      ],
      image: "/image/4-summary.png",
    },
    // research: [ {title: "", subtitle: [""], description:[[""],[""]], images:[""]}]
    research: [
      {
        title: "Week 1: Explore",
        subtitle: [
          "Information gathering",
          "Explore visual trends",
          "Exploring visual",
        ],
        description: [
          // ""
          [
            "The goal here is to learn about where we are today with the product and where we want to go before we get into the solution space",
          ],
          [
            "Taking inspiration from the outside world to craft application’s user interface.",
          ],
          [
            "Creating multiple themes, page layouts and interaction models to come up with a navigation system.",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: [
          "/image/4-research-1-1.png",
          "/image/4-research-1-2.png",
          "/image/4-research-1-3.png",
          "/image/4-research-1-4.png",
        ],
      },
      {
        title: "Week 2: Analyse",
        subtitle: [
          "Analysis of user feedback sessions",
          "Information Architecture (as-is state)",
          "Interaction model",
        ],
        description: [
          // ""
          [
            "Looking into different types of users, identify their needs, tasks and pain areas.",
          ],
          [
            "Creating the information architecture of the current system to understand the hierarchy and flow of the available information so that adequate navigation could be built.",
          ],
          [
            "PCS Dashboard’s interaction model is the underlying logic for the user navigation and orientation in the application. These elements will be present on most pages of the app.",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: [
          "/image/4-research-2-1.png",
          "/image/4-research-2-2.png",
          "/image/4-research-2-3.png",
          "/image/4-research-2-4.png",
        ],
      },
      {
        title: "Week 3: Ideate",
        subtitle: ["Core screen templates", "Continuous feedback"],
        description: [
          // ""
          [
            "We have identified the core types of screens that makes up PCS Dashboard.",
          ],
          [
            "We are in the process of gathering feedback from different actors (Managers, Lead, Engineers) on Dashboard and Project detail screens to further generate and refine our initial concepts.",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: [
          "/image/4-research-3-1.png",
          "/image/4-research-3-2.png",
          "/image/4-research-3-3.png",
        ],
      },
      {
        title: "Week 4: Ideation continued",
        subtitle: [
          "Making design iteration based on user feedback",
          "Creating a Design System unique to PCS Dashboard",
        ],
        description: [
          // ""
          [""],
          [""],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: [
          "/image/4-research-4-1.png",
          "/image/4-research-4-2.png",
          "/image/4-research-4-3.png",
        ],
      },
      {
        title: "Week 5: Improve & Handover",
        subtitle: [
          "Dashboard page",
          "Project detail page",
          "Key features",
          "Sync Data flow",
        ],
        description: [
          // ""
          [
            "Shows all projects filtered by status",
            "Shows cumulative statistics across all projects",
          ],
          [
            "Shows quick status fo the project",
            "Highlights the metric effecting the project status",
            "Shows metric charts for detailed analysis",
            "Has options to upload projections",
          ],
          [
            "Rearrange metric chars order as per the need",
            "Expanded charts for detailed analysis",
            "Easy toggle between chart view and table view",
            "Easy scaling on graphs for data heavy scenarios",
            "Export metric data in PDF, and Excel format",
          ],
          [
            "Current behavior: When user clicks on 'Sync Data' button, the entire screen is blocked for the user as the synchronisation happens with Codebeamer",
            "Proposed behavior: When user clicks on 'Sync Data' button, the synchronisation with Codebeamer starts and keeps happening discreetly while user can continue to monitor data and perform any action.",
            "Once the project is completely synced, it will show the updated status with the timestamp.",
          ],
        ],
        // images: ["/image/1-research-1-2.png", "/image/1-research-1-1.png"],
        images: [
          "/image/4-research-5-1.png",
          "/image/4-research-5-2.png",
          "/image/4-research-5-3.png",
          "/image/4-research-5-4.png",
        ],
      },
    ],
    // solution: { title: "", images: [""]}
    solution: {
      title: "Final Solution",
      description: [""],
      images: [
        "/image/4-solution-1.jpg",
        "/image/4-solution-2.jpg",
        "/image/4-solution-3.jpg",
        "/image/4-solution-4.jpg",
        "/image/4-solution-5.jpg",
      ],
    },
  },
];
