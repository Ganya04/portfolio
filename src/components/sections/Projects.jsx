import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const allProjectsPreviewCount = 3;
  const tabs = [
    {
      id: "All",
      label: "All Projects",
      description: "A quick scan of the full body of work.",
    },
    {
      id: "Analytics & BI",
      label: "Analytics & BI",
      description: "Dashboards, reporting, operations, and decision support.",
    },
    {
      id: "ML & AI",
      label: "ML & AI",
      description: "Predictive models, deep learning, and applied research.",
    },
    {
      id: "Web & Product",
      label: "Web & Product",
      description: "Interactive front-end and product-minded builds.",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);
  const visibleProjects =
    activeTab === "All" && !showAllProjects
      ? filteredProjects.slice(0, allProjectsPreviewCount)
      : filteredProjects;
  const hiddenProjectCount =
    activeTab === "All"
      ? Math.max(filteredProjects.length - allProjectsPreviewCount, 0)
      : 0;

  const activeTabMeta = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section
      className="relative mx-auto mt-5 max-w-7xl px-4 md:px-6"
      id="projects"
    >
      <SectionHeader title={"Projects."} subtitle={"Most recent works"} />

      <div className="mt-10">
        <div className="flex flex-wrap justify-center gap-3 md:justify-start">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const count =
              tab.id === "All"
                ? projects.length
                : projects.filter((project) => project.category === tab.id)
                    .length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  if (tab.id !== "All") {
                    setShowAllProjects(false);
                  }
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-white text-gray-500 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div>
            <h3 className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {activeTabMeta.label}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
              {activeTabMeta.description}
            </p>
            {activeTab === "All" &&
              hiddenProjectCount > 0 &&
              !showAllProjects && (
                <p className="mt-2 text-sm font-medium text-purple-700 dark:text-purple-300">
                  Showing {visibleProjects.length} of {filteredProjects.length}{" "}
                  projects.
                </p>
              )}
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-purple-400/60 via-fuchsia-400/30 to-transparent md:block" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {activeTab === "All" && hiddenProjectCount > 0 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="rounded-full border border-purple-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] transition-all duration-300 hover:border-purple-400 hover:text-purple-700 hover:shadow-[0_10px_30px_-12px_rgba(168,85,247,0.45)] dark:border-purple-400/30 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-purple-300 dark:hover:text-purple-200"
            >
              {showAllProjects
                ? "Show fewer projects"
                : `Show ${hiddenProjectCount} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
