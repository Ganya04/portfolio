"use client";
import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  // Subtle tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative w-full max-w-sm bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 overflow-hidden"
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Project Title */}
        <a
          href={project.linkOnline || project.linkGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-bold text-gray-800 dark:text-white group-hover:text-purple-600 transition-colors"
        >
          {project.title}
        </a>

        {/* Project Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          {project.linkOnline && (
            <motion.a
              href={project.linkOnline}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-sm text-gray-500 dark:text-gray-300 hover:text-purple-600 flex items-center gap-1 transition-colors"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
          )}

          {project.linkGithub && (
            <motion.a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-sm text-gray-500 dark:text-gray-300 hover:text-purple-600 flex items-center gap-1 transition-colors"
            >
              <FaGithub />
              GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
