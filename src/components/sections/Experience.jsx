"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import sparks from "../../assets/images/sparks.jpeg";
import smmud from "../../assets/images/smmud.jpeg";
import veriteam from "../../assets/images/veriteam.jpeg";
import saayam from "../../assets/images/saayam.jpeg";
import neuroleap from "../../assets/images/neuroleap.png";
import techlance from "../../assets/images/techlance.jpg";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      company: "Neuroleap Corporation",
      roles: [{ title: "Software Developer", duration: "Nov 2024 - Present" }],
      description: `
        Developing software solutions for cutting-edge neurological research and advancements.
        Focused on creating modular React.js components with Node.js APIs for scalable and accessible applications.
      `,
      additionalInfo: `
        Improved system performance by 30%, optimized state management, and implemented Docker-based deployments.
        Collaborated on integrating RESTful APIs for seamless functionality and efficient data flow.
      `,
      image: neuroleap,
    },
    {
      company: "Saayam For All",
      roles: [{ title: "Software Developer", duration: "Oct 2024 - Nov 2024" }],
      description: `
        Worked on impactful community engagement software, ensuring accessibility and usability across devices.
        Designed dynamic user interfaces using React.js and Tailwind CSS, elevating mobile responsiveness.
      `,
      additionalInfo: `
        Established cloud infrastructure using AWS services, automated CI/CD deployments, and monitored performance
        using AWS CloudWatch, revamping scalability and operational productivity.
      `,
      image: saayam,
    },
    {
      company: "Veriteam Software Solutions Pvt.Ltd",
      roles: [{ title: "Software Developer", duration: "Jun 2022 - Jul 2022" }],
      description: `
        Contributed to enterprise-level projects with a focus on backend integrations and API development.
        Facilitated a flexible news feed system leveraging microservices, enhancing user engagement by 35%.
      `,
      additionalInfo: `
        Improved real-time data updates using RESTful APIs, reduced latency by 15%, and launched versatile back-end
        solutions with AWS and CI/CD automation.
      `,
      image: veriteam,
    },
    {
      company: "Smmud Technologies Pvt.Ltd",
      roles: [
        { title: "Data Analyst", duration: "Jan 2021 - Dec 2021" },
        { title: "Software Developer", duration: "Jan 2022 - Jun 2022" },
      ],
      description: `
        Transitioned from data analysis to full-stack development, focusing on scalable e-commerce solutions.
        Partnered with backend teams to broaden system capacity, ensuring high availability and scalability.
      `,
      additionalInfo: `
        Amplified page load times by 30% through code splitting and lazy loading, and streamlined MySQL databases
        for improved query response by 25%.
      `,
      image: smmud,
    },
    {
      company: "The Sparks Foundation",
      roles: [{ title: "Data Scientist", duration: "Dec 2020 - Jun 2021" }],
      description: `
        Conducted advanced data-driven research and implemented machine learning models for impactful solutions.
        Delivered actionable insights through predictive analytics and data visualization pipelines.
      `,
      additionalInfo: `
        Achieved 97% accuracy in K-means clustering on a 16-dimensional dataset and refined SQL queries,
        expanding database capability by 30% and reducing query execution time by 20%.
      `,
      image: sparks,
    },
    {
      company: "Techlance Software Solutions",
      roles: [{ title: "Software Developer", duration: "Jan 2019 - Jun 2020" }],
      description: `
        Designed and developed full-stack applications for clients across diverse industries as a freelancer.
        Focused on building scalable solutions, integrating APIs, and ensuring optimal performance for end users.
      `,
      additionalInfo: `
        Successfully implemented RESTful APIs that enhanced application efficiency by 25%.
        Improved database query execution times by 20% through advanced SQL query optimization
        and developed dynamic front-end interfaces that boosted client satisfaction by 30%.
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
