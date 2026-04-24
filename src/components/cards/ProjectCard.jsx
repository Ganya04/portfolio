"use client";
import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useMotionValue, useTransform } from "framer-motion";

const ProjectCard = ({ project, featured = false }) => {
  const cardRef = useRef(null);

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
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative w-full overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 shadow-md transition-transform duration-300 hover:shadow-xl dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white ${
        featured ? "max-w-none" : "max-w-sm"
      }`}
    >
      <div className={featured ? "grid lg:grid-cols-[1.15fr_0.85fr]" : ""}>
        <div className={`overflow-hidden ${featured ? "h-72 lg:h-full" : "h-48"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className={`p-6 ${featured ? "lg:p-8" : ""}`}>
          {featured && (
            <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
              Featured Project
            </span>
          )}

          <a
            href={project.linkOnline || project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold text-gray-800 transition-colors group-hover:text-gray-900 dark:text-white dark:group-hover:text-white ${
              featured ? "mt-4 block text-2xl" : "text-md"
            }`}
          >
            {project.title}
          </a>

          <p
            className={`mt-3 text-gray-600 dark:text-gray-400 ${
              featured ? "text-base leading-7" : "text-sm"
            }`}
          >
            {project.description}
          </p>

          {project.techStack?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4">
            {project.linkGithub && (
            <motion.a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-2 text-sm text-white transition-colors hover:bg-purple-600 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-400"
            >
              <FaGithub />
              GitHub
            </motion.a>
            )}
            {project.linkOnline && (
            <motion.a
              href={project.linkOnline}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full bg-purple-500 px-4 py-2 text-sm text-white transition-colors hover:bg-purple-600 dark:bg-purple-500 dark:text-white dark:hover:bg-purple-400"
            >
              <FaExternalLinkAlt />
              Live Demo
            </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
