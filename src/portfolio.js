/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import cardCenteringImg from "./assets/images/card-centering-demo.png";

// -----------------------------------------------------------------------------
// TODOs before deploy (search "TODO" in this file):
//   1. Fill in LinkedIn URL, email, phone number
//   2. Drop resume PDF at src/containers/greeting/resume/resume.pdf and paste
//      public link in resumeLink
//   3. Add logos to src/assets/images/ and uncomment matching require() lines
//      (currently commented so the build doesn't crash on missing files)
// -----------------------------------------------------------------------------

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kevin Lu",
  title: "Hi, I'm Kevin",
  subTitle: emoji(
    "Full-stack developer and CS student at Arizona State University, graduating December 2026 with a cybersecurity concentration. I ship production web apps, reverse-engineer binaries in CTFs, and analyze data in Python and R. Open to roles in cybersecurity, software engineering, IT, and data analytics. 🚀"
  ),
  resumeLink: "", // TODO: paste public link (Google Drive works). Empty = hide button.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/KevinLu1993",
  linkedin: "https://www.linkedin.com/in/hung-lu-558b7a135/",
  gmail: "kevinngoclu@gmail.com",
  // gitlab: "https://gitlab.com/...",
  // facebook: "https://www.facebook.com/...",
  // medium: "https://medium.com/@...",
  // stackoverflow: "https://stackoverflow.com/users/...",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK ENGINEERING, DATA ANALYSIS, AND CYBERSECURITY",
  skills: [
    emoji(
      "⚡ Ship production full-stack web apps with React, TypeScript, Node.js, and Supabase with invoicing, booking flows, admin dashboards"
    ),
    emoji(
      "💻 Build software across the stack using C, C++, Java, Python  with a foundation in algorithms, systems programming, and compiler design"
    ),
    emoji(
      "📊 Analyze and visualize data with Python (Pandas, Seaborn, Matplotlib), R (regression models, diagnostics), and D3.js dashboards"
    ),
    emoji(
      "🔐 Reverse-engineer binaries and solve CTF challenges (pwn.college) using Ghidra and Binary Ninja"
    ),
    emoji(
      "🤖 Automate repetitive workflows with Python, PyQt6, and Playwright"
    ),
    emoji(
      "☁️ Deploy and scale on Cloudflare Pages, Workers, and serverless functions"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science, Cybersecurity Concentration",
      duration: "Expected December 2026 · GPA 3.70",
      desc: "Ira A. Fulton Schools of Engineering. Coursework at ASU is entirely upper-division CS.",
      descBullets: [
        "Dean's List for multiple semesters"
      ]
    },
    {
      schoolName: "Maricopa Community Colleges",
      logo: require("./assets/images/mccLogo.png"),
      subHeader: "Associate of Science in Computer Science",
      duration: "4.00 GPA (2024-2025)",
      desc: "Transferred to ASU.",
      descBullets: [
        "Dean's List every semester"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cybersecurity",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend / APIs",
      progressPercentage: "90%"
    },
    {
      Stack: "Python Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Frontend / Web",
      progressPercentage: "80%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Web Developer",
      company: "Independent",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "2026 – Present",
      desc: "Ship production websites and internal tools for Phoenix-area small businesses.",
      descBullets: [
        "Phoenix 1 Solar Solutions: full invoice/quote system with @react-pdf/renderer, GPS-based payroll clock-in, custom Puppeteer prerendering for SEO. React/Vite/TypeScript on Cloudflare Pages with Supabase.",
        "Luminaura Med Spa: nav restructure, Square Appointments booking, SEO blog, 5-category gallery with video."
      ]
    },
    {
      role: "Inventory Cycle Counter Team Lead",
      company: "Lucid Motors",
      companylogo: require("./assets/images/lucidLogo.png"),
      date: "August 2022 – October 2023",
      desc: "Led inventory reconciliation for EV manufacturing at the Tempe facility. Ran cycle-count operations in SAP ERP against physical inventory; authored training documentation for onboarding new counters."
    },
    {
      role: "Content Moderator Subject Matter Expert",
      company: "Cognizant Technology Solutions",
      companylogo: require("./assets/images/cognizantLogo.png"),
      date: "April 2018 – February 2020",
      desc: "Policy enforcement and moderation quality auditing at scale. Audited frontline moderation decisions and fed calibration back to reviewers and automated flagging systems, directly applicable to security policy work, incident triage, and abuse investigation."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PRODUCTION WEB APPS, AUTOMATION TOOLS, AND SECURITY WORK",
  projects: [
    {
      image: require("./assets/images/phoenix1SolarLogo.png"),
      projectName: "Phoenix 1 Solar Solutions",
      projectDesc: "Full-stack production site for a Phoenix-area solar company. Built a custom invoice/quote software system from scratch with @react-pdf/renderer for PDF generation, InvoiceEditor modal, service catalog, and full status workflow. Also built GPS-based payroll clock-in with an admin dashboard and 7 SEO-optimized service pages. React/Vite/TypeScript + Supabase + Cloudflare Pages. Custom Puppeteer prerendering script fixed Google indexing on dynamic routes.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://phoenix1solarsolutions.com"
        }
      ]
    },
    {
      image: require("./assets/images/luminauraLogo.png"),
      projectName: "Luminaura Med Spa",
      projectDesc: "React site for a med spa: Services dropdown, Square Appointments booking, SEO blog, 5-category gallery with video. Advised client on Square vs. HIPAA-adjacent platforms for client-data handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://luminauramedspa.com"
        }
      ]
    },
    {
      image: require("./assets/images/blueMarbleLogo.png"),
      projectName: "Blue Marble Academy (Capstone)",
      projectDesc: "Full-stack tutoring platform (React/Vite/TypeScript + Node.js/Express + Supabase + Stripe). Owned the booking system: discovery session flow, 6-step paid booking, recurring sessions, 12-hour cancellation window, transactional email via Nodemailer/Resend.",
      footerLink: []
    },
    {
      image: require("./assets/images/crosslistLogo.png"),
      projectName: "Crosslisting Desktop App",
      projectDesc: "Python/PyQt6 desktop app that auto-fills listing forms on Facebook Marketplace, Mercari, and OfferUp using Playwright browser automation. Built to run my own eBay resale business.",
      footerLink: []
    },
    {
      image: require("./assets/images/inboxLedLogo.png"),
      projectName: "InboxLed Reseller Email ETL",
      projectDesc: "Gmail scraping pipeline with multi-layer filtering (Gmail query → Supabase dedup → template cache → incremental sync). Built on Gmail API + Claude Haiku + Supabase + Cloudflare Workers.",
      footerLink: []
    },
    {
      image: require("./assets/images/cardCenteringLogo.png"),
      projectName: "Card Centering Analysis Tool",
      projectDesc: "Full-stack tool for trading-card grading triage. A Node/Express backend integrates the eBay Browse API and a vision model (Claude) to estimate left/right and top/bottom border ratios and score centering against PSA and BGS standards, helping decide which raw cards are worth the grading submission fee. Node.js, Express, eBay API, Claude vision API.",
      footerLink: [
        { name: "View details", url: "/card-centering.html" },
        { name: "GitHub", url: "https://github.com/KevinLu1993/<repo>" }
      ]
    },
    {
      image: require("./assets/images/cyberIllustration.png"),
      projectName: "pwn.college CTF Work (CSE 365)",
      projectDesc: "Binary exploitation and reverse-engineering challenges using Ghidra and Binary Ninja. Coursework for ASU's Information Assurance class.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Milestones from school and the field.",

  achievementsCards: [
    {
      title: "ASU Dean's List",
      subtitle: "Spring 2025 and Spring 2026.",
      image: require("./assets/images/asuLogo.png"),
      imageAlt: "ASU",
      footerLink: []
    },
    {
      title: "A.S. Computer Science Maricopa Community Colleges",
      subtitle: "4.00 GPA (2024-2025)",
      image: require("./assets/images/mccLogo.png"),
      imageAlt: "MCC",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume.",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to internships in cybersecurity, software engineering, IT, or data analytics now (during school), or full-time roles starting January 2027. Based in the Phoenix area, open to remote or relocation.",
  number: "+1-480-468-8788",
  email_address: "kevinngoclu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};