const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/portfolio",
  title: "Ganya Janardhan.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Ganya Janardhan",
  role: "Software Engineer",
  description:
    "Highly motivated and detail-oriented Software Developer with nearly two years of experience at Accenture. Adept at translating complex technical concepts into user-friendly solutions and passionate about staying up-to-date with emerging industry trends. Excited to apply my practical experience and strong foundation to contribute effectively to a dynamic software development team and continue my growth in the field.",
  resume:
    "https://drive.google.com/file/d/1gDHTfdf8iFFDWdkISt_D8QFzdrepdT43/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/abhirambj/",
    github: "https://github.com/abhirambj",
    twitter: "https://twitter.com/EL3CTR9N",
  },
};

const experiences = [
  {
    name: "Accenture Solutions Pvt. Ltd.",
    role: "Oracle Applications Developer",
    description:
      "Customize and extend Oracle Applications like APEX, Certa and Oracle Forms to align with business requirements, ensuring seamless functionality and user experience, resulting in 23% more efficiency than previous connections made. Design, Develop, and fine-tune OTBI reports for maximum efficiency, ensuring stakeholders receive timely and actionable insights to drive swift decision-making, resulting in reduction of a job schedule execution by 12 seconds.",
    stack: [
      "Oracle Cloud ERP",
      "Oralce Forms",
      "Oracle Reports",
      "Oracle PL/SQL",
      "Oracle Suite R12",
    ],
    startDate: "October 2021",
  },
  {
    name: "Ownacar.in",
    role: "Full Stack Web Developer Intern",
    description:
      "Designed and developed responsive UI using Bulma for visual appealing interfaces, resulting in designing 45 Webpages. Created reusable UI Components, ensuring consistent design and cross-browser compatibility. Optimized performance through techniques like lazy loading and code splitting for faster page load times. Stayed current with frontend development trends to incorporate best practices and innovations.",
    stack: ["NextJS", "Bulma", "FastAPI", "PostgreSQL"],
    startDate: "March 2021",
  },
  {
    name: "Ownacar.in",
    role: "Mobile Application Developer",
    description:
      "Efficient handling of data within the app using State management effectively. Secure API Integration with effective data management. Enhanced functionality based on user’s feedback and successfully published the application in app store.",
    stack: ["NextJS", "Bulma", "FastAPI", "PostgreSQL"],
    startDate: "June 2021",
  },
];

const projects = [
  {
    name: "Project Team Management System",
    description:
      "Developed an automated system to streamline college department team formation, with a focus on minimalist design and optimized functionality. Incorporated a CGPA-based grouping algorithm to facilitate random team selection, eliminating the need for manual faculty involvement in team creation.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
    sourceCode: "https://github.com/abhirambj/ptms",
  },
  {
    name: "College Website - GECM College",
    description:
      "Developed a multifunctional website that offers students user-friendly registration and navigation features. Designed an intuitive admin panel for college administrators to efficiently manage departments, faculties, and event notifications. Ensuring a seamless online experience for both students and college staff.",
    stack: ["HTML", "CSS", "JavaScript"],
    livePreview: "http://gecm.in",
  },
];

const skills = [
  "Java",
  "C",
  "C++",
  "Python",
  "Data Structures",
  "Algorithms",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "NodeJS",
  "Oracle Cloud ERP",
  "Heroku",
  "React",
  "TailwindCSS",
  "Material UI",
  "Git",
  "GitHub",
  "Bulma",
  "NextJS",
  "Flutter",
  "Ionic",
  "Bravo Studio",
  "Visual Studio Code",
  "Restful APIs",
  "Postman",
  "Jira",
  "MongoDB",
  "MySQL",
  "FastAPT",
  "Windows",
  "Linux",
];

const contact = {
  email: "abhiram.bj@gmail.com",
};

export { header, about, experiences, projects, skills, contact };
