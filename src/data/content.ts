const mainHeading = {
  title: 'Hi,<br/>I’m Hasnat,<br/>Full-Stack engineer',
  description: `I'm a software engineer based in Lahore, Pakistan. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.`,
}

// Hero Section

// Portfolio Section

const openSource = {
  githubToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'hasnatamir2', // Change to your github username to view your profile in Contact Section.
  show: 'true', // Set true or false to show Contact profile using Github, defaults to false
}

const projects = [
  {
    name: 'React Native Chat App',
    description:
      'A chat app built with React Native, Firebase, and Gifted Chat',
    image: '',
    tools: ['ReactJs', 'NodeJs', 'MongoDB'],
    url: 'https://github.com/hasnatamir2/chat_app',
  },
  {
    name: 'Snap Debt recovery',
    description: 'A Debt recovery and managing Web Based Application',
    image: '',
    tools: ['ReactJs', 'NodeJs', 'MySql', 'AntDesign', 'Typescript'],
    url: 'https://snapdebtrecovery.com',
  },
  {
    name: 'Halcyon Tax Wallet',
    description: 'Tax management and organization Web Based Application',
    image: '',
    tools: ['ReactJs', 'NodeJs', 'Typescript', 'GCP', 'Mysql', 'IRS Api'],
    url: 'https://www.halcyonsw.com/',
  },
  {
    name: 'Moonrock App',
    description:
      'Tenant & Landlord management mobile app with Stripe integration',
    image: '',
    tools: ['React Native', 'Typescript', 'MySQL', 'Stripe'],
    url: 'https://www.moonrockpm.com/',
  },
  {
    name: 'Jindo.live',
    description:
      'Entertainment application. Gamify the experience of your playlist',
    image: '',
    tools: ['ReactJs', 'NodeJs', 'MySQL', 'SocketIO', 'AntDesign'],
    url: 'https://jindo.live/',
  },
]

// Skills Section

const skills = [
  'HTML',
  'CSS',
  'SASS/LESS',
  'JavaScript',
  'Typescript',
  'React',
  'Redux',
  'NodeJS',
  'Express',
  'Babel',
  'Jquery',
  'GitHub',
  'Webpack',
  'Vite',
  'WebSocket',
  'WebHooks',
  'GraphQL',
  'GCP',
  'AWS',
  'Tailwind',
  'Ant Design',
  'Bootstrap',
  'Material UI',
  'Jest/Cypress',
  'MongoDB',
  'MySQL',
  'Moongose',
  'PostgreSQL',
  'Sequelize',
  'Prisma',
  'Docker',
  'Kubernetes',
  'Nginx/Caddy',
  'React Native',
  'NextJs',
]

const skillsContent = {
  description: `I have worked with a wide range of technologies 
  in the web/mobile development world. From <code>back-end</code> 
  to <code>front-end</code> to <code>android/ios</code> and everything 
  in between. I have experience with many different software design 
  pattern and architectures like <code>domain driven design</code>, 
  <code>SOLID</code>, <code>12 factor app</code>, 
  <code>clean code architecture</code>, <code>hexagonal architecture</code>.`,
  list: skills,
}

// Experience Section

const experience = {
  title: 'Experience & Education',
  subtitle: '2+ years and counting',
  experience: [
    {
      title: 'MERN Stack developer',
      company: 'CarbonTeq',
      time: 'Jul 2021 - Present',
      achievment: 'REST api, Integration, Node.js, JWT, Express.js, mongoDB',
      catagory: 'work',
    },
    {
      title: 'Junior Software Engineer',
      company: 'AppRocket',
      time: 'Jan 2021 - Jul 2021',
      achievment:
        'React App development, Redux integration, REST api, 3rd party API integrations, Node.js, JWT, Express.js, mongoDBB',
      catagory: 'work',
    },
    {
      title: 'Freelace Web developer',
      company: 'Fiver',
      time: 'Aug 2019 - Dec 2020',
      achievment: 'REST api, Integration, Node.js, JWT, Express.js, mongoDB',
      catagory: 'work',
    },
    {
      title: 'Backend Web Developer',
      company: 'Snapthat.xyz',
      time: 'Jun 2019 - Aug 2019',
      achievment: 'REST api, Integration, Node.js, JWT, Express.js, mongoDB',
      catagory: 'work',
    },
    {
      title: 'Graphics Designer',
      company: 'Edwiz',
      time: 'Jun 2019 - Aug 2019',
      achievment:
        'vector Art, canvas designing, Adobe Illustrator, Adobe Photoshop, Adobe InDesign,pitch presentation design,',
      catagory: 'work',
    },
    {
      title: 'Student',
      company: 'National University of Science & Technology, Isb, Pakistan',
      time: 'Sep 2017 - Jun 2021',
      achievment: 'Becholer in Computer Science',
      catagory: 'education',
    },
  ],
}

// Contact Section

const socialLinks = [
  {
    name: 'Github',
    url: 'https://www.github.com/hasnatamir2',
    logo: ['fab', 'github'],
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/hasnatamir2',
    logo: ['fab', 'linkedin'],
  },
  {
    name: 'Gmail',
    url: 'mailto:hasnatamir2@gmail.com',
    logo: ['fas', 'envelope'],
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/hasnatamir2',
    logo: ['fab', 'twitter'],
  },
]

export {
  mainHeading,
  openSource,
  projects,
  skills,
  skillsContent,
  socialLinks,
  experience,
}
