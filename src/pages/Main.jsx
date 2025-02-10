import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Passion from "../components/sections/Passion";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import { Helmet } from "react-helmet";
import { metadata } from "../utils";
import ThemeToggle from "../components/navbar/ThemeToggle";

const Main = () => {
	return (
		<main className="min-h-screen bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text transition-colors duration-300">
			<Helmet>
				<meta charSet="utf-8" />
				<title>{metadata.title}</title>
				<link rel="canonical" href={metadata.pageUrl} />
				<meta name="description" content={metadata.description} />
				<meta property="og:title" content={metadata.title} />
				<meta
					property="og:description"
					content={metadata.description}
				/>
				<meta property="og:image" content={metadata.imageURL} />
				<meta property="og:url" content={metadata.pageUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content={metadata.title} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={metadata.title} />
				<meta
					name="twitter:description"
					content={metadata.description}
				/>
				<meta name="twitter:image" content={metadata.imageURL} />
			</Helmet>
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Passion />
			<Contact />
			<Footer />
		</main>
	);
};

export default Main;
