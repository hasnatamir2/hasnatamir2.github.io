const mainHeading = {
  title: "Hi,<br/>I’m Hasnat,<br/>Lead Full-Stack Engineer",
  description: `All the things I wish to share with you are here`,
  twitterHandle: "@hasnatamir2",
  siteUrl: "https://hasnatdev.com/",
};

// Hero Section

// Portfolio Section

const openSource = {
  githubToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "hasnatamir2", // Change to your github username to view your profile in Contact Section.
  show: "true", // Set true or false to show Contact profile using Github, defaults to false
};

const projects = [
  {
    name: "Morta",
    description:
      "Morta is construction and project management software for property and real estate developers. Work Less, Earn More with unified CRM, planning, budgeting, and reporting.",
    image: "/images/morta.png",
    tools: ["NextJs", "Convex", "Stripe", "Vercel"],
    url: "https://morta.com",
  },
  {
    name: "Snippet Studio",
    description:
      "Snippet Studio is a simple yet powerful code snippet manager where developers can create, save, and share code snippets.",
    image: "/images/snippet-studio.webp",
    tools: ["NextJs", "Convex", "Stripe", "Vercel"],
    url: "https://github.com/hasnatamir2/snippet-studio",
  },
  {
    name: "Ayshei",
    description:
      "Ayshei, the first uae-based online marketplace, offers an innovative platform for buying, selling products and services online.",
    image: "/images/ayshei.webp",
    tools: ["NextJs", "Typescript", "PostgreSQL", "AWS", "Golang"],
    url: "https://ayshei.com/",
  },
  {
    name: "Jindo.live",
    description:
      "Entertainment application. Gamify the experience of your playlist",
    image: "/images/jindo.png",
    tools: ["ReactJs", "NodeJs", "MySQL", "SocketIO", "AntD"],
    url: "https://jindo.live/",
  },
  {
    name: "Snap Debt recovery",
    description: "A Debt recovery and managing Web Based Application",
    image: "/images/snapdebt.webp",
    tools: ["ReactJs", "NodeJs", "MySql", "Typescript", "AntD"],
    url: "https://snapdebtrecovery.com",
  },
  {
    name: "Halcyon Tax Wallet",
    description: "Tax management and organization Web Based Application",
    image: "/images/halcyon.svg",
    tools: ["ReactJs", "NodeJs", "Typescript", "Mysql", "IRS Api"],
    url: "https://www.halcyonsw.com/",
  },
  {
    name: "Moonrock App",
    description:
      "Tenant & Landlord management mobile app with Stripe integration",
    image: "/images/moonrock.svg",
    tools: ["React Native", "Typescript", "MySQL", "Stripe"],
    url: "https://www.moonrockpm.com/",
  },
  {
    name: "Hipaa File Manager",
    description:
      "Encrypted file sharing & management for HIPAA compliant applications",
    image: "/images/hipaa.webp",
    tools: ["NestJs", "NextJs", "Typescript", "Supabase", "Heroku"],
    url: "https://hippa-frontend-d1851f68159b.herokuapp.com/",
  },
  {
    name: "Prospecting Tool",
    description: "Scrapes LinkedIn job postings and stores them in a database",
    image: "",
    tools: ["ReactJs", "Typescript", "PrismORM", "AntD"],
    url: "https://propecting-tool.carbonteq.com/",
  },
  {
    name: "Wavelength",
    description: "College alumni networking app",
    image: "/images/wavelength.webp",
    tools: ["NextJs", "Typescript", "MaterialUI", "DuckArtchitecture"],
    url: "/",
  },
];

// Skills Section

const skills = [
  "HTML",
  "CSS",
  "SASS/LESS",
  "JavaScript",
  "Typescript",
  "React",
  "Redux",
  "NodeJS",
  "Express",
  "GoLang",
  "Go Routines",
  "NestJS",
  "Protocol Buffers",
  "gRPC",
  "RESTful APIs",
  "Microservices",
  "Apache Kafka",
  "Event Driven Architecture",
  "Babel",
  "Jquery",
  "GitHub",
  "Webpack",
  "Vite",
  "WebSocket",
  "WebHooks",
  "GraphQL",
  "GCP",
  "AWS",
  "Tailwind",
  "Ant Design",
  "Bootstrap",
  "Material UI",
  "Jest/Cypress",
  "Mocha/Chai",
  "Cypress",
  "Postman",
  "Swagger",
  "Figma",
  "Selenium",
  "MongoDB",
  "MySQL",
  "Moongose",
  "PostgreSQL",
  "Hasura",
  "Sequelize",
  "Prisma ORM",
  "Drizzle",
  "Redis",
  "Docker",
  "Kubernetes",
  "Nginx/Caddy",
  "React Native",
  "NextJs",
  "Python",
  "Datadog"
];

const skillsContent = {
  description: `I have worked with a wide range of technologies 
    in the web/mobile development world. From <code>back-end</code> 
    to <code>front-end</code> to <code>android/ios</code> and everything 
    in between. I have experience with many different software design 
    pattern and architectures like <code>domain driven design</code>, 
    <code>test driven development</code>, <code>SOLID</code>, <code>12 factor app</code>,
    <code>event driven architecture</code>, <code>clean code architecture</code>, <code>hexagonal architecture</code>.`,
  list: skills,
};

// Experience Section

const experience = {
  title: "Experience & Education",
  subtitle: "6+ years and counting",
  experiences: [
    {
      title: "Lead Full Stack Engineer",
      company: "Morta.com",
      time: "Sep 2025 - Current",
      url: "https://morta.com",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "All-in-one platform for property developers to manage planning, budgets, CRM, compliance, and project workflows.",
      catagory: "work",
      location: "Dubai, UAE",
    },
    {
      title: "Senior Full Stack Engineer",
      company: "DScale.io - Medad Holdings LLC",
      time: "Sep 2023 - Aug 2025",
      url: "https://dscale.io",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "Enginnering Classified ads and auctions application for the MENA serving 100k+ users. Scalable, secure, and high performance",
      catagory: "work",
      location: "Dubai, UAE",
    },
    {
      title: "MERN Stack developer",
      company: "CarbonTeq",
      time: "Jul 2021 - May 2023",
      url: "https://www.carbonteq.com/",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "Develop robust highly interactive fin-tech solutions for USA and Europe based firms, providing them with the most advanced and robust solutions",
      catagory: "work",
      location: "Lahore, PK",
    },
    {
      title: "Junior Software Engineer",
      company: "AppRocket",
      time: "Jan 2021 - Jul 2021",
      url: "https://www.approcket.com/",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "Build responsive, creative, robust React UI with developing & integrating powerful NodeJS RESTful APIs, along with designing NoSQL mongo database",
      catagory: "work",
      location: "Remote, PK",
    },
    {
      title: "Freelace Web developer",
      company: "Fiver",
      time: "Aug 2019 - Dec 2020",
      url: "https://www.fiverr.com/",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "Designed and developer web apps for multiple clients & worked on many different projects",
      catagory: "work",
      location: "Remote, USA",
    },
    {
      title: "Backend Web Developer",
      company: "Snapthat.xyz",
      time: "Jun 2019 - Aug 2019",
      url: "https://www.crunchbase.com/organization/snapthat",
      // achievment length should be 3 lines OR 148 character max
      achievment: "REST api, Integration, Node.js, JWT, Express.js, mongoDB",
      catagory: "work",
      location: "Remote, PK",
    },
    {
      title: "Graphics Designer",
      company: "Edwiz",
      time: "Jun 2019 - Aug 2019",
      url: "https://www.edwiz.com.pk/",
      // achievment length should be 3 lines OR 148 character max
      achievment:
        "Worked in Vector Art, Canvas designing, Adobe Illustrator, Adobe Photoshop, Adobe InDesign,pitch presentation design,",
      catagory: "work",
      location: "Islamabad, PK",
    },
    {
      title: "Student",
      company: "National University of Science & Technology, Isb, Pakistan",
      time: "Sep 2017 - Jun 2021",
      url: "https://www.nust.edu.pk/",
      // achievment length should be 3 lines OR 148 character max
      achievment: "Becholer of Science in Computer Science",
      catagory: "education",
      location: "Islamabad, PK",
    },
  ],
};

// Contact Section

const socialLinks = [
  {
    name: "Github",
    url: "https://www.github.com/hasnatamir2",
    icon: "github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/hasnatamir2",
    icon: "linkedin",
  },
  {
    name: "Gmail",
    url: "mailto:hasnatamir2@gmail.com",
    icon: "envelope",
  },
];

export {
  mainHeading,
  openSource,
  projects,
  skills,
  skillsContent,
  socialLinks,
  experience,
};
