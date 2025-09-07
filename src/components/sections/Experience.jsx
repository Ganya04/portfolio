"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import smmud from "../../assets/images/smmud.jpeg";
import Hubgroup from "../../assets/images/Hubgroup.png";
import neuroleap from "../../assets/images/neuroleap.png";
import techlance from "../../assets/images/techlance.jpg";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Hub Group Inc",
      roles: [
        { title: "Full-stack Developer", duration: "Apr 2024 - Present" },
      ],
      description: `
        At Hub Group, I build enterprise-scale billing and financial applications using Vue.js, Node.js, and MongoDB. My work spans designing secure REST APIs, modular UIs, and automating deployments with Azure DevOps, Jenkins, and OpenShift, while ensuring reliability through monitoring with Kibana and Compass.
      `,
      image: Hubgroup,
    },
    {
      company: "Neuroleap Corporation",
      roles: [{ title: "Software Developer", duration: "Oct 2024 - Apr 2025" }],
      description: `
        Contributed to a healthcare platform for cognitive assessments by developing scalable components with React.js and Node.js. I containerized workflows with Docker, implemented secure authentication using AWS Cognito, and established reliable delivery pipelines with Azure.
      `,
      image: neuroleap,
    },
    {
      company: "Smmud Technologies Pvt.Ltd",
      roles: [{ title: "Software Developer", duration: "Jul 2020 - Jul 2022" }],
      description: `
        Worked on scalable, event-driven systems for media applications with Vue.js, Node.js, and MongoDB. I improved backend performance through optimized queries and streamlined deployments with Azure DevOps, ensuring high availability.
      `,
      image: smmud,
    },
    {
      company: "Techlance Software Solutions",
      roles: [{ title: "Software Developer", duration: "Jan 2019 - Jun 2020" }],
      description: `
        Developed healthcare tracking and enterprise platforms with React.js and Node.js, focusing on modernized architectures. I migrated legacy systems into modern stacks and improved usability through analytics-driven insights and responsive design.
      `,
      image: techlance,
    },
  ];

  return (
    <section id="experience" className="py-12">
      <div className="mt-16">
        <SectionHeader
          title={"Work Experience."}
          subtitle={"A timeline of my professional journey."}
        />
      </div>

      <div className="relative max-w-7xl mx-auto mt-4 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`p-4 rounded-lg shadow-lg transition-transform duration-300 ease-out cursor-pointer flex items-center gap-4 mb-4 ${
                  activeIndex === index
                    ? "border-l-4 border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:scale-105 hover:rotate-1"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">{exp.company}</span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">
              {experiences[activeIndex].company}
            </h3>
            <div className="relative pl-6">
              {experiences[activeIndex].roles.map((role, idx) => (
                <div
                  key={idx}
                  className="flex items-center mb-8 hover:scale-105 transition-transform duration-300"
                >
                  {/* Icon with Custom Shape */}
                  <div className="relative flex items-center">
                    <div className="w-4 h-4 rounded-full shadow-md bg-purple-500"></div>
                    {idx !== experiences[activeIndex].roles.length - 1 && (
                      <div className="absolute left-[50%] top-4 w-[2px] h-16 bg-gradient-to-b from-purple-500 to-blue-500"></div>
                    )}
                  </div>

                  {/* Role Information */}
                  <div className="ml-6">
                    <span className="text-lg font-semibold text-purple-500">
                      {role.title}
                    </span>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {role.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ul className="list-disc pl-6 mt-6 mb-4 text-gray-800 dark:text-gray-300">
              <li>{experiences[activeIndex].description}</li>
            </ul>
            <ul className="list-disc pl-6 text-gray-800 dark:text-gray-300">
              <li>{experiences[activeIndex].additionalInfo}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}