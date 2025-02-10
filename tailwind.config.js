import svgToDataUri from "mini-svg-data-uri";
import aspectRatio from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lato: ["Lato", "ui-sans-serif"],
      },
      colors: {
        // Light theme colors
        "light-primary": "#ffffff",
        "light-secondary": "#f1f5f9",
        "light-text": "#333333",
        "light-accent": "#6a5acd",

        // Dark theme colors
        "dark-primary": "#1e293b",
        "dark-secondary": "#334155",
        "dark-text": "#e2e8f0",
        "dark-accent": "#38bdf8",
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 1.5s infinite linear",
        dash: "dash 1s linear infinite", // Added dash animation
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        dash: {
          to: {
            backgroundPosition: "100%",
          },
        },
      },
    },
  },
  plugins: [
    aspectRatio,
    addVariablesForColors, // Adds CSS variables for color definitions
    backgroundSVG, // Adds utility for SVG background support
  ],
};

// Helper plugin to generate CSS variables for theme colors
function addVariablesForColors({ addBase, theme }) {
  const allColors = theme("colors");
  const newVars = Object.fromEntries(
    Object.entries(allColors).flatMap(([key, val]) =>
      typeof val === "string"
        ? [[`--${key}`, val]] // Handle single-level colors
        : Object.entries(val).map(([subKey, subVal]) => [
            `--${key}-${subKey}`,
            subVal, // Handle nested colors (e.g., light/accent)
          ])
    )
  );

  addBase({
    ":root": newVars, // Adds variables globally
  });
}

// Helper plugin to create SVG-based background utilities
function backgroundSVG({ matchUtilities, theme }) {
  matchUtilities(
    {
      "bg-grid": (value) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
    },
    { values: theme("backgroundColor"), type: "color" } // Map utilities to background colors
  );
}
