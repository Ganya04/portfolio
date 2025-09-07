import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import profilePic from "../../assets/images/GanyaRP.jpg";
import { skillsWork, certificates } from "../../utils/index";
import Marquee from "react-fast-marquee";

const skillStacks = [
  {
    title: "💻 Full-Stack Development",
    description:
      "Building responsive, user-centric applications with Vue.js, React.js, and Node.js. Crafting secure REST APIs, scalable frontends, and seamless database integration to support high-performance enterprise systems.",
    tools: ["React.js", "Node.js", "Vue.js", "MongoDB"],
  },
  {
    title: "⚙️ Backend & Systems Engineering",
    description:
      "Designing robust backends and event-driven systems to handle millions of daily transactions. Implementing authentication, database schemas, and modular services for secure and scalable architectures.",
    tools: ["Express.js", "JWT", "REST APIs", "MySQL"],
  },
  {
    title: "🚀 Cloud & DevOps",
    description:
      "Automating deployments with Azure DevOps, Jenkins, and OpenShift, ensuring zero-downtime releases. Containerizing workflows with Docker and monitoring production workloads to maintain reliability and scalability.",
    tools: ["Azure", "Docker", "Jenkins", "Openshift"],
  },
  {
    title: "📊 Data & Analytics",
    description:
      "Turning raw data into actionable insights with analytics and machine learning. Experienced in building predictive models, creating dashboards, and integrating ML pipelines to guide smarter decision-making.",
    tools: ["Python", "SQL", "Power BI", "Tableau"],
  },
];

// Animation Variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  const [speed, setSpeed] = React.useState(0);
  
  return (
    <section
      className="relative mx-auto max-w-7xl px-6 py-16 transition-colors duration-300"
      id="about"
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-10 top-16 left-1/4 dark:from-purple-400 dark:to-indigo-400"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-10 bottom-16 right-1/4 dark:from-blue-400 dark:to-indigo-400"></div>
      </div>

      {/* About Section */}
      <SectionHeader title={"About."} subtitle={"Skills & Journey"} />

      <div className="flex flex-col md:flex-row gap-12 mt-8 justify-center items-center">
        {/* Left: Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="space-y-8 text-center md:text-left max-w-lg"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! I&apos;m <strong>Ganya Janardhan</strong>, a software
            developer specializing in enterprise solutions based in Chicago. With expertise in 
            <strong> Vue.js</strong>, <strong>React.js</strong>, and <strong>Node.js</strong>, 
            I build scalable applications that drive business value through innovative technology solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently, I work for{" "}
            <a
              href="https://www.hubgroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
            >
              Hub Group Inc
            </a>{" "}
            as a Full-stack Developer in the logistics technology domain. I develop enterprise-scale 
            billing and financial systems, focusing on secure API architectures and efficient UI implementations. 
            My work involves modernizing critical business processes through cloud infrastructure, 
            automated deployment pipelines, and robust monitoring solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Outside of work, I enjoy exploring nature trails 🌲, experimenting
            with new recipes 🍲, and staying ahead of the curve with the latest
            trends in AI, data analytics, and tech 🤖.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m always interested in connecting with fellow developers and exploring
            opportunities to solve challenging problems in the tech space. Feel free to reach out
            if you&apos;d like to discuss technology, innovation, or potential collaborations!
          </p>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="flex justify-center md:justify-center"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-80 rounded-full border-2 border-secondary shadow-lg"
          />
        </motion.div>
      </div>

      {/* Programming Tools: Scrolling Carousel */}
      <div className="mt-16 relative">
        <SectionHeader
          title={"Programming Tools."}
          subtitle={"Dynamic view of my expertise."}
        />

        {(() => {

          return (
            <div className="relative">
              {/* Left and Right Edge Areas */}
              <div
                className="absolute top-0 left-0 h-full w-10 z-10"
                onMouseEnter={() => setSpeed(80)}
                onMouseLeave={() => setSpeed(0)}
              >
                {/* Fading Edge Left */}
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-100 via-transparent to-transparent dark:from-gray-800 dark:via-transparent dark:to-transparent animate-pulse"></div>
              </div>
              <div
                className="absolute top-0 right-0 h-full w-10 z-10"
                onMouseEnter={() => setSpeed(80)}
                onMouseLeave={() => setSpeed(20)}
              >
                {/* Fading Edge Right */}
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-100 via-transparent to-transparent dark:from-gray-800 dark:via-transparent dark:to-transparent animate-pulse"></div>
              </div>

              {/* Marquee Carousel */}
              <Marquee
                gradient={false}
                speed={speed}
                className="mt-8 overflow-hidden"
                pauseOnHover={false}
              >
                {skillsWork.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="w-36 h-36 flex flex-col items-center justify-center mx-4 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white rounded-xl shadow-lg hover:scale-100 hover:border-2 hover:border-purple-500 transition-transform duration-300 overflow-hidden"
                    >
                      <div className="text-4xl mb-2 text-purple-500 dark:text-purple-500">
                        <IconComponent />
                      </div>
                      <p className="text-sm font-semibold text-center">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          );
        })()}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <SectionHeader
          title={"Certifications."}
          subtitle={"Recognitions of my expertise."}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-wrap justify-center items-center gap-6 mt-8 mx-auto"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-gray-100 to-gray-300 text-dark-secondary dark:from-gray-800 dark:to-gray-900 dark:text-white hover:dark:text-white p-4 rounded-lg hover:bg-gradient-to-r hover:dark:bg-gradient-to-r hover:text-white hover:dark:from-blue-500 hover:dark:to-purple-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg w-72"
              variants={fadeInVariants}
            >
              <h3 className="text-lg text-center font-bold">{cert}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What I Do */}
      <div className="mt-16">
        <SectionHeader
          title={"What I Do."}
          subtitle={"Explore my skills visually as building blocks."}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {skillStacks.map((stack, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-out"
              variants={fadeInVariants}
            >
              <h3 className="text-xl font-bold">{stack.title}</h3>
              <p className="mt-2 text-sm">{stack.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {stack.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm dark:bg-purple-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;