// // CODE 1

// import React from "react";
// import SectionHeader from "../ui/SectionHeader";
// import sparks from "../../assets/images/sparks.jpeg";
// import smmud from "../../assets/images/smmud.jpeg";
// import veriteam from "../../assets/images/veriteam.jpeg";
// import saayam from "../../assets/images/saayam.jpeg";
// import neuroleap from "../../assets/images/neuroleap.png";

// const experiences = [
//   {
//     company: "The Sparks Foundation",
//     role: "Data Scientist",
//     image: sparks,
//   },
//   {
//     company: "Smmud Technologies Pvt.Ltd",
//     role: "Full Stack Developer",
//     image: smmud,
//   },
//   {
//     company: "Veriteam Software Solutions",
//     role: "Full Stack Developer",
//     image: veriteam,
//   },
//   {
//     company: "Saayam For All",
//     role: "Full Stack Developer",
//     image: saayam,
//   },
//   {
//     company: "Neuroleap Corporation",
//     role: "Software Developer",
//     image: neuroleap,
//   },
// ];

// const CareerPathGraph = () => {
//   const cardSpacingX = 250; // Horizontal spacing
//   const cardSpacingY = 150; // Vertical spacing
//   const graphHeight = 700; // Overall graph height

//   return (
//     <section id="career-path" className="py-12 relative">
//       <SectionHeader title="Experience" subtitle="My Career Growth Path" />

//       <div className="relative max-w-7xl mx-auto mt-12">
//         <div className="relative w-full" style={{ height: `${graphHeight}px` }}>
//           {/* Zig-Zag Connecting Lines */}
//           {experiences.map((experience, index) => {
//             if (index === experiences.length - 1) return null;

//             const startLeft = 150 + index * cardSpacingX;
//             const startBottom = 50 + index * cardSpacingY;
//             const endLeft = 150 + (index + 1) * cardSpacingX;
//             const endBottom = 50 + (index + 1) * cardSpacingY;

//             return (
//               <svg
//                 key={`line-${index}`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute w-full h-full pointer-events-none"
//               >
//                 <polyline
//                   points={`${startLeft},${graphHeight - startBottom} ${
//                     (startLeft + endLeft) / 2
//                   },${graphHeight - startBottom} ${(startLeft + endLeft) / 2},${
//                     graphHeight - endBottom
//                   } ${endLeft},${graphHeight - endBottom}`}
//                   fill="none"
//                   stroke="#9333EA" // Purple Theme
//                   strokeWidth="2"
//                   strokeDasharray="5,5"
//                 />
//               </svg>
//             );
//           })}

//           {/* Experience Cards */}
//           {experiences.map((experience, index) => {
//             const leftPosition = 150 + index * cardSpacingX;
//             const bottomPosition = 50 + index * cardSpacingY;

//             return (
//               <div
//                 key={index}
//                 className="absolute flex flex-col items-center group"
//                 style={{
//                   left: `${leftPosition}px`,
//                   bottom: `${bottomPosition}px`,
//                 }}
//               >
//                 {/* Experience Card */}
//                 <div className="bg-white dark:bg-gray-800 text-center shadow-md border border-gray-300 rounded-lg p-6 w-56 transform group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300">
//                   <img
//                     src={experience.image}
//                     alt={`${experience.company} logo`}
//                     className="w-12 h-12 rounded-full mx-auto object-cover"
//                   />
//                   <h3 className="text-base font-semibold mt-3">
//                     {experience.company}
//                   </h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-400">
//                     {experience.role}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerPathGraph;

// // CODE 2

// "use client";

// import { useState, useEffect } from "react";
// import SectionHeader from "../ui/SectionHeader";
// import neuroleap from "../../assets/images/neuroleap.png";
// import saayam from "../../assets/images/saayam.jpeg";
// import veriteam from "../../assets/images/veriteam.jpeg";
// import smmud from "../../assets/images/smmud.jpeg";
// import sparks from "../../assets/images/sparks.jpeg";
// import techlance from "../../assets/images/techlance.jpg";

// export default function ExperiencePath() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const experiences = [
//     {
//       company: "Techlance Software Solutions",
//       roles: [
//         { title: "Full Stack Developer", duration: "Dec 2020 - Jun 2021" },
//       ],
//       logo: techlance,
//     },
//     {
//       company: "The Sparks Foundation",
//       roles: [{ title: "Data Scientist", duration: "Dec 2020 - Jun 2021" }],
//       logo: sparks,
//     },
//     {
//       company: "Smmud Technologies Pvt.Ltd",
//       roles: [
//         { title: "Data Analyst", duration: "Jan 2021 - Dec 2021" },
//         { title: "Software Developer", duration: "Jan 2022 - Jun 2022" },
//       ],
//       logo: smmud,
//     },
//     {
//       company: "Veriteam Software Solutions Pvt.Ltd",
//       roles: [{ title: "Software Developer", duration: "Jun 2022 - Jul 2022" }],
//       logo: veriteam,
//     },
//     {
//       company: "Saayam For All",
//       roles: [{ title: "Software Developer", duration: "Oct 2024 - Nov 2024" }],
//       logo: saayam,
//     },
//     {
//       company: "Neuroleap Corporation",
//       roles: [{ title: "Software Developer", duration: "Nov 2024 - Present" }],
//       logo: neuroleap,
//     },
//   ];

//   const totalLevels = experiences.length;
//   const graphWidth = 1300;
//   const graphHeight = 800;
//   const cardWidth = 250;
//   const cardHeight = 150;
//   const cardSpacingX = (1.5 * (graphWidth - cardWidth)) / totalLevels;
//   const cardSpacingY = (graphHeight - cardHeight) / totalLevels;

//   return (
//     <section id="experience-path" className="py-12">
//       <SectionHeader
//         title="Experience."
//         subtitle="A timeline of my professional journey"
//       />

//       <div className="relative max-w-7xl mx-auto mt-4">
//         <div
//           className="relative"
//           style={{ width: `${graphWidth}px`, height: `${graphHeight}px` }}
//         >
//           {/* Zig-zag connecting lines */}
//           <svg className="absolute inset-0 w-full h-full">
//             {experiences.map((_, index) => {
//               if (index === experiences.length - 1) return null;
//               const startX = index * cardSpacingX + cardWidth / 2;
//               const startY =
//                 graphHeight - index * cardSpacingY - cardHeight / 2;
//               const endX = (index + 1) * cardSpacingX + cardWidth / 2;
//               const endY =
//                 graphHeight - (index + 1) * cardSpacingY - cardHeight / 2;
//               const midX = (startX + endX) / 2;
//               const midY = (startY + endY) / 2;

//               return (
//                 <path
//                   key={index}
//                   d={`M ${startX},${startY} 
//                      Q ${midX},${startY} ${midX},${midY} 
//                      T ${endX},${endY}`}
//                   fill="none"
//                   stroke="#9333EA"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               );
//             })}
//           </svg>

//           {/* Experience Cards */}
//           {experiences.map((exp, index) => {
//             const x = index * cardSpacingX;
//             const y = graphHeight - index * cardSpacingY - cardHeight;
//             return (
//               <div
//                 key={exp.company}
//                 className={`absolute bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 
// 					dark:from-gray-800 dark:to-gray-900 dark:text-white p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${
//             hoveredIndex === index ? "hover:border-purple-600 scale-105" : ""
//           }`}
//                 style={{
//                   left: `${x}px`,
//                   top: `${y}px`,
//                   width: `${cardWidth}px`,
//                   height: `${cardHeight}px`,
//                   border: hoveredIndex === index ? "1px solid #9333EA" : "none",
//                 }}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div className="flex items-center gap-4 h-full">
//                   <img
//                     src={exp.logo || "/placeholder.svg"}
//                     alt={`${exp.company} logo`}
//                     className="w-12 h-12 rounded-full object-contain"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-sm text-gray-800">
//                       {exp.company}
//                     </h3>
//                     {exp.roles.length === 1 ? (
//                       <p className="text-sm text-gray-600">
//                         {exp.roles[0].title}
//                       </p>
//                     ) : (
//                       <ul className="text-sm text-gray-600 list-disc ml-4">
//                         {exp.roles.map((role, idx) => (
//                           <li
//                             key={idx}
//                             className={`${
//                               exp.company === "Smmud Technologies Pvt.Ltd"
//                                 ? "text-purple-600"
//                                 : "text-gray-600"
//                             }`}
//                           >
//                             {role.title} ({role.duration})
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                     {exp.roles.length === 1 && (
//                       <div className="mt-1 text-xs text-purple-600">
//                         {exp.roles[0].duration}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
