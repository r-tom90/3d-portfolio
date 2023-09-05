import {
  mobile,
  backend,
  blockchain,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  solidity,
  styled,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  allStaff,
  programming,
  roofing,
  portfolio,
  richEtherscan,
  otHealthCoach,
  emporium,
  muskATears,
  store,
  blockstarter,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Smart Contract",
    icon: blockchain,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Styled Components",
    icon: styled,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Self-Taught",
    icon: programming,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developed and maintained multiple responsive web applications using HTML, CSS, and JavaScript, leveraging popular frontend frameworks such as React to create engaging user interfaces and seamless user experiences.",
      "Developed personal projects to showcase skills, experimenting with new frameworks and techniques, and utilizing APIs or databases to create more complex applications.",
      "Conduct regular updates and maintenance of personal projects, identifying and fixing bugs, and ensuring that code is up-to-date with the latest web standards and best practices.",
      "Completed online courses or tutorials related to frontend development, such as freeCodeCamp, Udemy, or Codecademy, to continuously update your skills and knowledge.",
    ],
  },
  {
    title: "Sales Estimator",
    company_name: "Bayhill Roofing",
    icon: roofing,
    iconBg: "#383E56",
    date: "Jun 2020 - Dec 2021",
    points: [
      "Collaborated with customers and suppliers to ensure project delivery.",
      "Developed and maintained client relationships for future opportunities.",
      "Ensured compliance with regulations, schedules, and specifications through documentation checks.",
      "Drove business development and sales for revenue and growth targets.",
    ],
  },
  {
    title: "Mechanical Estimator (Minor & Major Projects)",
    company_name: "AllStaff Airconditioning Pty Ltd",
    icon: allStaff,
    iconBg: "#383E56",
    date: "Aug 2014 - May 2020",
    points: [
      "Designed custom solutions for +$2M yearly mechanical services for clients in various industries such as universities, hospitals, high rises, and shopping centers.",
      "Developed new business opportunities with property owners and managers by maintaining strong relationships with new and existing clients.",
      "Managed compliance with regulations, schedules, and specifications at all stages, from initial concept to warranty maintenance, by attending meetings and site visits.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OT Health Coach",
    description:
      "Simple but yet elegant landing page for a health coach with contact form for ease of contact.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: otHealthCoach,
    source_code_link: "https://github.com/r-tom90/OtHealthCoach",
    live_site_link: "https://www.othealthcoach.com/",
  },
  {
    name: "MuskATears",
    description:
      "MuskATears is a community Meme Coin project designed to help the community grow and thrive, taking on the narrative of stopping censorship.",
    tags: [
      {
        name: "react/next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ethers.js",
        color: "pink-text-gradient",
      },
    ],
    image: muskATears,
    source_code_link: "https://github.com/r-tom90/muskatears",
    live_site_link: "https://www.muskatears.com/",
  },
  {
    name: "MuskATears NFT Emporium",
    description:
      "MuskATears NFT Emporium allows you to mint, buy and sell NFTs on the Ethereum blockchain, powered by ThirdWebs SDK.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ThirdWeb SDK",
        color: "pink-text-gradient",
      },
    ],
    image: emporium,
    source_code_link: "https://github.com/r-tom90/marketplace-v3",
    live_site_link: "https://nfts.muskatears.com/",
  },
  {
    name: "RichEtherscan",
    description:
      "RichEtherscan is a feature-rich platform that offers a user-friendly interface and utilizes advanced data retrieval from the Ethereum blockchain. Users can easily explore block, transaction, and address history on the Ethereum network using the Alchemy network API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "EthersJS",
        color: "pink-text-gradient",
      },
    ],
    image: richEtherscan,
    source_code_link: "https://github.com/r-tom90/blockexplorer",
    live_site_link: "https://alchemy-w3-blockexplorer.vercel.app/",
  },
  {
    name: "BlockStarter",
    description:
      "This platform boasts an impressive interface coupled with advanced blockchain technology, including Metamask integration, interaction with smart contracts, and the capacity to send Ethereum through the blockchain network with notable features to create, view, and donate to crowdfunding campaigns directly through the blockchain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: blockstarter,
    source_code_link: "https://github.com/r-tom90/blockstarter",
    live_site_link: "https://blockstarter-r-tom90.vercel.app",
  },
  {
    name: "3D Portfolio",
    description:
      "Visually stunning and responsive websites using industry-standard best practices, including reusable code with Higher Order Components, immersive 3D models with ThreeJS and React Three Fiber, seamless animations with Framer Motion, and website performance across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/r-tom90/3d-portfolio",
    live_site_link: "https://www.richardtom.site/",
  },
  {
    name: "Clothing Store",
    description:
      "Modern and elegant design created with Styled Components for styling. The app uses Firebase No-SQL DB, Authentication, and Firestore Database to handle user data and enable secure login. It also implements Redux and Redux Thunk for efficient state management, ensuring a smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "styled components",
        color: "pink-text-gradient",
      },
    ],
    image: store,
    source_code_link: "https://github.com/r-tom90/clothing-store",
    live_site_link: "https://my-clothing.vercel.app/",
  },

  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
