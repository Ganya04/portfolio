import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import sparks from "../../assets/images/sparks.jpeg";
import smmud from "../../assets/images/smmud.jpeg";
import veriteam from "../../assets/images/veriteam.jpeg";
import saayam from "../../assets/images/saayam.jpeg";
import neuroleap from "../../assets/images/neuroleap.png";

const experiences = [
  {
    company: "Neuroleap Corporation",
    roles: [{ title: "Software Developer", duration: "Nov 2024 - Present" }],
    image: neuroleap,
  },
  {
    company: "Saayam For All",
    roles: [{ title: "Software Developer", duration: "Oct 2024 - Nov 2024" }],
    image: saayam,
  },
  {
    company: "Veriteam Software Solutions Pvt.Ltd",
    roles: [{ title: "Software Developer", duration: "Jun 2022 - Jul 2022" }],
    image: veriteam,
  },
  {
    company: "Smmud Technologies Pvt.Ltd",
    roles: [
      { title: "Software Developer", duration: "Jan 2022 - Jun 2022" },
      { title: "Data Analyst", duration: "Jan 2021 - Dec 2021" },
    ],
    image: smmud,
  },
  {
    company: "The Sparks Foundation",
    roles: [{ title: "Data Scientist", duration: "Dec 2020 - Jun 2021" }],
    image: sparks,
  },
];

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const dottedLineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "50%",
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="experiences"
      className="py-8 transition-colors duration-300 relative overflow-hidden"
    >
      <SectionHeader
        title="Experiences."
        subtitle="A timeline of my professional journey."
      />

      <motion.div
        className="relative flex flex-col items-center max-w-4xl mx-auto mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 h-full pointer-events-none"></div>

        {/* Experience Cards */}
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center w-full mb-6 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            {/* Dotted Line */}
            <motion.div
              className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 border-dotted border-t-2 border-purple-500 dark:border-purple-400 ${
                index % 2 === 0 ? "left-0" : "right-0"
              }`}
              variants={{
                hidden: { width: 0 },
                visible: { width: "50%", transition: { duration: 0.4 } },
              }}
            ></motion.div>

            {/* Experience Card */}
            <motion.div className="relative p-3 rounded-lg shadow-md bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white max-w-[16rem] hover:border-t-2 hover:border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center space-x-2">
                {/* Company Logo */}
                <img
                  src={experience.image}
                  alt={`${experience.company} logo`}
                  className="w-6 h-6 rounded-full object-cover"
                />
                <h3 className="text-base font-semibold">
                  {experience.company}
                </h3>
              </div>
              <div className="mt-2 space-y-1">
                {experience.roles.map((role, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-medium text-purple-500 dark:text-purple-400">
                      {role.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {role.duration}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-48 h-48 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-xl opacity-20 top-4 left-1/4 dark:from-purple-400 dark:to-indigo-400"></div>
        <div className="absolute w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-xl opacity-20 bottom-4 right-1/4 dark:from-blue-400 dark:to-indigo-400"></div>
      </div>
    </section>
  );
};

export default ExperienceSection;
