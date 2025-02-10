import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="z-50 group flex items-center justify-center w-10 h-10 rounded-full text-gray-800 dark:text-white bg-white dark:bg-dark-secondary shadow-md hover:bg-light-accent dark:hover:bg-purple-500 transition-all duration-300"
    >
      {isDarkMode ? (
        <BsFillSunFill className="text-xl group-hover:text-white" />
      ) : (
        <BsFillMoonFill className="text-xl group-hover:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
