import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<div className="min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text transition-colors duration-300">
			<Routes>
				{/* Main route */}
				<Route path="/" element={<Main />} />

				{/* Catch-all route for 404 errors */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
