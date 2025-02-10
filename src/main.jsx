import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Main App Component
import "./index.css"; // Tailwind and global styles
import { BrowserRouter } from "react-router-dom"; // Router for navigation
import ThemeProvider from "./components/navbar/ThemeProvider.jsx";

// Root render function
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{" "}
		{/* Enforce React best practices */}
		<ThemeProvider>
			{" "}
			{/* Provides theme context to the app */}
			<BrowserRouter>
				{" "}
				{/* Enables routing */}
				<App /> {/* Main application */}
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
