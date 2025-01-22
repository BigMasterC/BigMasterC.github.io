export const bio = [
  "Hi! &#128075; &#128516",
  "My name is Chibundu Onwuegbule, and I am currently pursuing a degree in Computer Science at the University of Maryland, College Park. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "Apart from coding, I love playing lacrosse &#x1F94D, listening to music (I'm always open to new song recommendations), and traveling.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thank you for taking the time to learn more about me, and I look forward to connecting with you soon!",
];


export const skills = [
  {
    title: "Languages",
    skillName: "Java, Python, Bash Scripting ",
    color: "1",
    percentage: "85",
  },
  
  {
    title: "Design",
    skillName: "HTML, CSS",
    color: "4",
    percentage: "60",
  },
  {
    title: "Version Control",
    skillName: "GitHub, Git",
    color: "7",
    percentage: "50",
  },
  {
    title: "Word Processing Tools",
    skillName: "Command-line, Vim",
    color: "3",
    percentage: "80",
  },
  {
    title: "Design",
    skillName: "Blender, Adobe Photoshop, Pixlr, Canva",
    color: "5",
    percentage: "80",
  },
  {
    title: "Editor (IDEs)",
    skillName: "VS Code, PyCharm, Eclipse",
    color: "6",
    percentage: "65",
  },
];

export const projects = {
  disclaimer:
    "*** Most of the projects I listed were completed during my college-level development journey as I am still a student. ***",
  webProjects: [
    {
      projectName: "Blackjack",
      image: "images/Blackjack.png",
      summary:
        "Implemented two classes, Deck and BlackjackModel, in the 'deckOfCards' and 'blackjack' packages, respectively, to simulate a standard deck of cards and the game of Blackjack in Java.",
      preview: "https://github.com/BigMasterC/-GAME-Blackjack",
      techStack: ["Java", "Object-Oriented Programming", "JUnit"],
    },
    {
      projectName: "Poker",
      image: "images/Poker.png",
      summary:
        "Implemented two classes, Deck and PokerHandEvaluator, to simulate Texas Hold 'Em, a popular style of Poker game.",
      preview: "https://github.com/BigMasterC/Poker/tree/master",
      techStack: ["Java", "Object-Oriented Programming", "JUnit"],
    },
    {
      projectName: "FishPond",
      image: "images/Fishpond.png",
      summary:
        "Implemented three classes, Model, Fish, and Plant to simulate an interactive primitive ecosystem designed to showcase the complex interactions and patterns tht emerge in a fish pong habitat.",
      preview: "https://github.com/BigMasterC/Fish-Pond",
      techStack: ["Java", "Object-Oriented Programming", "JUnit"],
    },
    {
      projectName: "Cafe",
      image: "images/Cafe.png",
      summary:
        "Developed a cafe simulation game using Java. The objective of the game is to manage a restaurant and make it successful.",
      preview: "https://github.com/BigMasterC/Cafe/tree/master",
      techStack: ["Java", "Object-Oriented Programming"],
    },
    {
      projectName: "In memory of Benoit Mandelbrot: Mandelbrot Set",
      image: "images/Mandelbrot Set.png",
      summary:
        "Developed a Mandelbrot Set GUI in memory of the very influential mathematician, Dr. Mandelbrot.",
      preview: "https://github.com/BigMasterC/Mandelbrot-Set/tree/master",
      techStack: ["Java"],
    },
    {
      projectName: "Clear Cell Game",
      image: "images/Cell Game.png",
      summary:
        "Developed a Java program for a game called Clear Cell. The objective of the game is to maximize the number of cleared cells in a colored board. Players can click on a cell to clear surrounding cells of the same color. Once a row of cells is cleared, it collapses and the player earns one point for each cleared cell.",
      preview: "https://github.com/BigMasterC/Cell-Game/tree/master",
      techStack: ["Java"],
    },
  ],
  softwareProjects: [
    {
      projectName: "LinkedLists",
      image: "images/Linked_list_data_format.jpg",
      summary:
        "Implemented a basic linked and a sorted linked list.",
      preview: "https://github.com/BigMasterC/LinkedList",
      techStack: ["Java", "LinkedList", "JUnit"],
    },
    {
      projectName: "HashSets",
      image: "images/HashSet_diagram.png",
      summary:
        "Implemented a class called MyHashSet, which is a slightly simplified version of Java HashSet class.",
      preview: "https://github.com/BigMasterC/Hashset/tree/master/src",
      techStack: ["Java", "HashSet", "JUnit"],
    },
  ],
  androidProjects: [
    { 
      projectName: "Bash Script Examples",
      image: "images/scripting.png",
      summary:
        "A portfolio displaying the progression of my Bash Shell scripting abilities.",
      preview: "https://github.com/BigMasterC/Bash-Script-1",
      techStack: ["Vim", "Bash", "Linux"],
    },
  ],
  androidProjects: [
    { 
      projectName: "Bash Script Examples",
      image: "images/scripting.png",
      summary:
        "A portfolio displaying the progression of my Bash Shell scripting abilities.",
      preview: "https://github.com/BigMasterC/Bash-Script-1",
      techStack: ["Vim", "Bash", "Linux"],
    },
  ],
  freelanceProjects: [
    //{
     // projectName: "Web Portfolio",
     // image: "images/portfolio.png",
     // summary:
        //"Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      //preview: "https://github.com/vinaysomawat/Travographer-Portal",
      //techStack: ["---", "Bootstrap", "JavaScript"],
    //},
    {
      projectName: "Snap Lens: Californian Summer ",
      image: "images/Snapchat-logo.png",
      summary:
        "Developed a SnapChat Lens using Lens Studio to ring in the Summer season",
      preview: "https://lens.snapchat.com/5ec81e87a9264be8adbd6778bc39b4c3",
      techStack: ["Lens Studio", "UX Design"],
    },
    {
      projectName: "Snap Lens: SouthPark ",
      image: "images/Snapchat-logo.png",
      summary:
        "Developed a SouthPark themed SnapChat Lens using Lens Studio",
      preview: "https://lens.snapchat.com/45b623eba01b453c98cfd37c54dc2fef?sender_web_id=dbcc74cd-c4b2-489d-a286-9196fe41ff35&device_type=desktop&is_copy_url=true",
      techStack: ["Lens Studio", "Art"],
    },
    {
      projectName: "Resume",
      image: "images/resumepic.png",
      summary: "My Resume :)",
      preview:
        "https://drive.google.com/file/d/15wPLof1PRP8wjaakG7lmICGksZRMiD-6/view?usp=sharing",
      techStack: ["Markdown", "CSS"],
    },
  ],
};

export const experience = [

   {
    title: "kAR Graphics",
    duration: "September 2023 — January 2024",
    subtitle: "Intern",
    details: [
      "Engineered an AR (Augmented Reality) experience for MEL Science, a client with 3 million+ subscribers.",
      "Collaborated closely with a client representative to ensure the experience met their criteria.",
      "Implemented interactive elements of the AR experience based on client specifications.",
    ],
    tags: ["Augmented Reality (AR)", "Python", "Javascript"],
    icon: "group",
  },
  {
    title: "Snap Lens Academy, Snap inc.",
    duration: "June 2023 — August 2023",
    subtitle: "Intern",
    details: [
      "Prepared assets (2D, 3D, audio, multimedia) for seamless integration into Lens Studio. Utilized software such as Illustrator and Blender to ensure optimal compatibility and quality.",
      "Used core Lens Studio features to bring innovative Lens concepts to life, resulting in engaging AR experiences for 363 million+ Snapchat users.",
      "Managed team projects in 3 Lens Hackathons, collaborating with cross-functional teams to develop AR lenses within strict timeframes, utilizing Javascript based Object-Oriented design techniques.",
    ],
    tags: ["Augmented Reality (AR)", "Blender (3D Modeling)", "JavaScript", "UX Design"],
    icon: "group",
  },
  // {
  //   title: "C.D.O. ENTERPRISES, LLC",
  //   duration: "April 2022 — Present",
  //   subtitle: "Registered Agent ",
  //   details: [
  //     "Delegates all legal documents on behalf of CDO ENTERPRISES’ e-commerce LLC ",
  //     "Relays essential information to LLC owner",
  //   ],
  //   tags: ["Leadership", "Communication"],
  //   icon: "group",
  // },
  {
    title: "Johns Hopkins Applied Physics Laboratory",
    duration: "November 2021 — May 2022 ",
    subtitle: "Intern",
    details: [
      "Executed 3 data visualization projects aiming to enhance comprehension of complex datasets.",
      "Utilized Blender's Python API to develop scripts that interpret and visualize data within Blender.",
    ],
    tags: ["Blender", "Python"],
    icon: "heartbeat",
  },
  {
    title: "Math, Engineering, Science, Achievement (MESA)",
    duration: "October 2018 — May 2022",
    subtitle: "Captain of Wearable Technology Team",
    details: [
      "Maintained position as the Captain of Wearable Technology team under Johns Hopkins' APL MESA program for all 4 years of high school career.",
      "Oversaw progress made by team members.",
      "Designed and built a wearable device meant to monitor a baby's vital signs.",
    ],
    tags: ["Python", "Leadership", "Project Management"],
    icon: "qrcode",
  },
];

export const education = [
  {
    title: "Bachelors of Science, Computer Science | Honors Advanced Cybersecurity Program (ACES)",
    duration: "May 2026",
    subtitle: "University of Maryland, College Park",
    details: [
      "Black Engineers Society (BES)",
      "CODE: Black",
      "Technica (Hackathon) ",
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Network Security",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Associate in Applied Science, Cybersecurity",
    duration: "",
    subtitle: "Prince George's Community College, Largo, MD",
    details: [
      "Maintained a 4.0 GPA while enrolled as a full-time student",
      "Earned 34 credits through Charles Herbert Flowers High School's 3D Scholar Dual Enrollment program.",
    ],
    tags: ["Networking"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "GitHub",
        link: "https://github.com/BigMasterC",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/BigMasterC/",
      },
    ],
  },
  {
    label: "Webpage Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },

    ],
  },
  {
    label: "Social Profile",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/chibunduo/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by ChiChi.",
    
    ],
  },
];

const gitUserName = "BigMasterC";
const mediumUserName = "BigMasterC";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
