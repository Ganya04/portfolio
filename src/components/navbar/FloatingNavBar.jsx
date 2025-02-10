"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import {
  IconHome,
  IconUser,
  IconArticle,
  IconPrompt,
  IconBriefcase,
  IconMenu,
  IconX,
  IconPhone,
} from "@tabler/icons-react";
import { Link, animateScroll } from "react-scroll";

export const FloatingNavBar = ({ className, visible }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = (navItem) => {
    if (navItem.name === "Home") {
      animateScroll.scrollToTop();
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`flex max-w-fit fixed top-5 inset-x-0 mx-auto px-4 md:px-8 py-3 gap-4 items-center rounded-full shadow-md backdrop-blur-md z-[5000]
              bg-white/70 dark:bg-neutral-800/70 border border-gray-200 dark:border-neutral-700 ${className}`}
      >
        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-neutral-700 dark:text-neutral-300 hover:text-indigo-500"
          >
            {menuOpen ? (
              <IconX className="h-6 w-6" />
            ) : (
              <IconMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Items for Larger Screens */}
        <div className="hidden lg:flex items-center gap-2">
          {floatingNavItems.map((navItem, idx) => (
            <Link
              to={navItem.name.toLowerCase().replace(/\s+/g, "-")}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="active"
              key={`link-${idx}`}
              className="flex items-center px-4 py-2 text-neutral-700 dark:text-neutral-300 font-medium transition-all hover:text-purple-500 cursor-pointer"
            >
              <span className="mr-2">{navItem.icon}</span>
              <span className="hidden lg:inline-block">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
          activeClass="active"
          className="border text-sm md:text-base font-medium relative border-neutral-300 dark:border-neutral-600 text-indigo-600 dark:text-indigo-400
                px-5 py-2 rounded-full transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:text-indigo-700"
        >
          Contact
        </Link>
        <ThemeToggle />
      </motion.div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md z-[5000] flex flex-col items-center justify-center gap-6 p-4"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-neutral-700 dark:text-neutral-300 hover:text-indigo-500"
          >
            <IconX className="h-6 w-6" />
          </button>
          {floatingNavItems.map((navItem, idx) => (
            <Link
              to={navItem.name.toLowerCase().replace(/\s+/g, "-")}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="active"
              key={`mobile-link-${idx}`}
              className="relative px-4 py-2 text-xl text-neutral-700 dark:text-neutral-300 font-medium transition-all hover:text-indigo-500 cursor-pointer text-center"
              onClick={toggleMenu}
            >
              {navItem.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const floatingNavItems = [
  {
    name: "Home",
    icon: <IconHome className="h-5 w-5" />,
  },
  {
    name: "About",
    icon: <IconUser className="h-5 w-5" />,
  },
  {
    name: "Experience",
    icon: <IconBriefcase className="h-5 w-5" />,
  },
  {
    name: "Projects",
    icon: <IconPrompt className="h-5 w-5" />,
  },
  {
    name: "Passion",
    icon: <IconArticle className="h-5 w-5" />,
  },
  // {
  //   name: "Contact",
  //   icon: <IconPhone className="h-5 w-5" />,
  // },
];
