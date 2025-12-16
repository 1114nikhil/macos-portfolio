const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "June 24, 2022",
    title:
      "My Profile: Showcasing My Journey as a Developer",
    image: "/images/blog1.jpeg",
    link: "https://www.linkedin.com/in/tknikhil/",
  },
  {
    id: 2,
    date: "Sep 2022",
    title: "Skey-ERP: Revolutionizing Business Management with SaaS ",
    image: "/images/feature4.svg",
    link: "https://skeyerp.com/",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript","Angular"],
  },

  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS","Bootstrap","PrimeNg","StimulSoft"],
  },
  {
    category: "Backend",
    items: ["Python", "Django","NodeJS","ExpressJS","Java","SpringBoot"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native","Ionic","Kotlin","Java"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL","SQLite"],
  },
  {
    category: "Others",
    items: ["Git", "GitHub", "Deployment", "GitLab CI/CD", "SaaS", "REST APIs","GraphQL" , "Docker","Kubernetes","AWS","GitLab"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/1114nikhil",
  },
  {
    id: 2,
    text: "Portfolio",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://nikhiltk.vercel.app/",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/tknikhil/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "",
  },
  {
    id: 2,
    img: "",
  },
  {
    id: 3,
    img: "",
  },
  {
    id: 4,
    img: "",
  },
];

export {
  blogPosts,
  dockApps,
  gallery,
  navIcons,
  navLinks,
  photosLinks,
  socials,
  techStack,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "SkeyErp SaaS Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[10vh] right-20", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "SkeyErp.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Led cross-functional team in upgrading Angular from version 14 to 18, boosting application speed by 30%",
            "Developed modular, reusable UI components, reducing frontend development time by 25%",
            "Optimized module loading with Lazy Loading, reducing initial load time by 40%",
            "Incorporated Angular Signals and new structural directives like @defer and @if for enhanced performance",
            "Integrated automated testing with Jasmine and Karma, achieving 90% test coverage",
          ],
        },
        {
          id: 2,
          name: "skeyErp.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://skeyerp.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "skeyErp.png",
          icon: "/images/image.jpeg",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "UltimateShop E-commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 left-5",
      windowPosition: "top-[30vh] right-20",
      children: [
        {
          id: 1,
          name: "UltimateShop E-commerce.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Engineered high-performance e-commerce platform with microservices architecture, reducing API response time by 40%",
            "Designed and deployed containerized microservices with Docker and Kubernetes, improving scalability by50%.",
            "Strengthened system security by implementing JWT-based authentication using Spring Security.",
            "Optimized database queries and implemented caching strategies for enhanced performance.",
          ],
        },
        // {
        //   id: 2,
        //   name: "ai-resume-analyzer.com",
        //   icon: "/images/safari.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
        //   position: "top-20 left-20",
        // },
        // {
        //   id: 4,
        //   name: "ai-resume-analyzer.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 left-80",
        //   imageUrl: "/images/project-2.png",
        // },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Orna Care (Order Management System )",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-5",
      windowPosition: "top-[50vh] right-20",
      children: [
        {
          id: 1,
          name: "Orna Care.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Developed comprehensive real-time order tracking system, reducing order processing errors by 20%.",
            "Implemented push notification system that improved customer engagement and response rates.",
            "Enhanced user interface and user experience design, leading to 15% increase in user retention.",
            "Integrated payment gateway and inventory management features.",
          ],
        },
        {
          id: 2,
          name: "Orna Care",
          icon: "/images/appStore.jpeg",
          kind: "file",
          fileType: "url",
          href: "https://apps.apple.com/in/app/uts-ornacare/id6448084620UTS_OrnaCare",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "OrnaCare.png",
          icon: "/images/ornacare.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/ornacare.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
    {
      id: 8,
      name: "RisingSun GPS Tracking ",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-40 right-5",
      windowPosition: "top-[50vh] right-20",
      children: [
        {
          id: 1,
          name: "RisingSun.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Built real-time GPS-based location tracking application, reducing location inaccuracies by 30%.",
            "Led development team of 3 developers, mentoring an intern and ensuring successful project delivery.",
            "Integrated dynamic map visualization with real-time updates, improving user interaction and usability.",
            "Implemented offline functionality and data synchronization capabilities.",
          ],
        },
        // {
        //   id: 2,
        //   name: "Orna Care",
        //   icon: "/images/appStore.jpeg",
        //   kind: "file",
        //   fileType: "url",
        //   href: "https://apps.apple.com/in/app/uts-ornacare/id6448084620UTS_OrnaCare",
        //   position: "top-10 right-20",
        // },
        // {
        //   id: 4,
        //   name: "OrnaCare.png",
        //   icon: "/images/ornacare.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/ornacare.png",
        // },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.jpeg",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.jpeg",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpg",
      description: [
        "Hey! I’m Nikhil 👋, a Full Stack Developer with 3+ years of experience building scalable applications",
        "Strong expertise in Angular, React,Flutter, Node.js, and Spring Boot",
        "Focused on designing high-performance, scalable systems",
        "Experienced in automating deployments and CI/CD pipelines",
        "Passionate about turning complex problems into clean, maintainable solutions",
        "Usually ships features before the coffee gets cold ",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.jpeg",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false,isMinimized: false,isMaximized: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };