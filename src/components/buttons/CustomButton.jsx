"use client";
import { motion } from "framer-motion";

export const CustomButton = ({ label, onClick, svg }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
      },
    },
  };

  return (
    <motion.button
      variants={variants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      className="flex items-center justify-center gap-x-2 py-3 px-6 mt-3 w-full text-sm uppercase font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 active:from-purple-700 active:to-indigo-800 transition-all duration-300 ease-in-out rounded-lg shadow-lg sm:mt-0 sm:w-auto"
    >
      {label}
      {svg}
    </motion.button>
  );
};
