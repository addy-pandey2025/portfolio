import {
  backend,
  creator,
  express,
  api,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nestjs,
  nginx,
  docker,
  aws,
  postgres,
  graphql,
  angular,
  nodejs,
  git,
  deloitte,
  intellect,
  bridgeLabz,
  chatappImage,
  bookItImage,
  cricket,
  game,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: backend, // Expertise in Node.js and backend technologies
  },
  {
    title: "Cloud computing",
    icon: web, // Proficient in both frontend and backend development
  },
  {
    title: "API Development Specialist",
    icon: api, // Freelancing experience and consulting on various projects
  },
  {
    title: "Freelancer",
    icon: creator, // Freelancing experience and consulting on various projects
  }
];


const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: express,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  }
];


const experiences = [
  {
    title: "Senior Consultant",
    company_name: "Deloitte",
    company_website: "https://www.deloitte.com/",
    icon: deloitte,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Present",
    points: [
      "Developed a scalable B2B banking application.",
      "Built microservices with TypeScript and NestJS.",
      "Implemented AES encryption and JWT.",
      "Optimized APIs using Redis, async programming and Bull.",
      "Utilized AWS services for job processing.",
      "Achieved 80% test coverage.",
      "Led POCs and managed version upgrades.",
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Intellect Design Arena",
    company_website: "https://www.intellectdesign.com/",
    icon: intellect,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Jul 2021",
    points: [
      "Developed Maker-Checker module for a bank.",
      "Integrated APIs with ExpressJS and Apollo Server.",
      "Enhanced performance using GraphQL.",
      "Optimized databases with Elasticsearch.",
      "Created reusable Angular components.",
      "Conducted code reviews and Agile practices.",
    ],
  },
  {
    title: "Fellowship Engineer",
    company_name: "BridgeLabz Solutions LLP",
    company_website: "https://bridgeLabz.com/",
    icon: bridgeLabz,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Jul 2019",
    points: [
      "Developed the FundooNotes application using Angular, GraphQL, and Node.js.",
      "Implemented CRUD operations with GitHub APIs for repository management.",
      "Deployed the application via CI/CD pipelines with Jenkins on AWS EC2.",
    ],
  },
];


const projects = [
  {
    name: "Tic-Tac-Toe Game",
    description: "A classic Tic-Tac-Toe game built with React, allowing users to play against each other or against the computer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: game,
    hosted_link: "https://bhupi2508-game.netlify.app/",
  },
  {
    name: "React Cricket League Portal",
    description: "An interactive portal for managing cricket leagues, built using React for a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: cricket,
    hosted_link: "https://jaipur-cricket-league.netlify.app",
  },
  {
    name: "ChatApp (AngularJS & Node.js)",
    description: "A collaborative chat application built with AngularJS and Node.js, currently undergoing refactoring.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chatappImage,
    hosted_link: "https://github.com/addy-pandey2025/ChatApp-AngularJs-NodeJs",
  },
  {
    name: "Book Movie Ticket",
    description: "An application that allows customers to book movie tickets online and gather information about movies and theaters. In-Prog",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "expressJS",
        color: "olive-text-gradient",
      },
    ],
    image: bookItImage,
    hosted_link: "https://github.com/addy-pandey2025/Book-Movie-Ticket-Frontend-Angular",
  },
];


const personalInfo = {
  name: "Adarsh",
  fullName: "Adarsh Pandey",
  email: "aadarshpandey43@gmail.com",
  role: "Full Stack Developer",
  // Point to a public image placed at `public/profile.jpg` (see README below)
  // Try `public/image.png` first (you asked for image.png). If it's not present or fails
  // to load, `Hero.jsx` will fall back to `/profile.svg` placeholder.
  // Set to `/profile.jpg` so the Hero requests the user's photo in `public/profile.jpg`.
  // Please attach the JPEG here or place it in `public/profile.jpg` locally.
  profileImage: "/profile.jpg",
  about: `Proactive IT professional with 5+ years of experience specializing in Full Stack development. Highly skilled in microservices, cloud technologies, and efficient problem-solving. Known for delivering well-documented, tested, and scalable solutions with strong collaborative skills and a focus on continuous improvement.`,
  projectsIntro: `Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described, reflecting my ability to solve complex problems, work with different technologies, and manage projects effectively :-`,
};

const publicUrls = {
  resume:
    "https://www.linkedin.com/in/aadarsh-pandey-775120312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/aadarsh-pandey-775120312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/addy-pandey2025",
      icon: github,
    },
  },
};

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    date: "2023",
    credentialLink: "https://www.credly.com/badges/your-badge-id",
    image: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
  },
  {
    title: "Node.js Developer Certificate",
    organization: "OpenJS Foundation",
    date: "2022",
    credentialLink: "https://www.example.com/certification/nodejs",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    title: "Docker Certified Associate",
    organization: "Docker Inc.",
    date: "2023",
    credentialLink: "https://www.docker.com/certified-content/dca",
    image: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    title: "MongoDB Developer Certification",
    organization: "MongoDB University",
    date: "2023",
    credentialLink: "https://university.mongodb.com/certification",
    image: "https://www.mongodb.com/assets/images/global/leaf.png",
  }
];

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
  certifications,
};
