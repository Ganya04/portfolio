"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import smmud from "../../assets/images/smmud.jpeg";
import Hubgroup from "../../assets/images/Hubgroup.png";

export default function Experience() {
	const [activeIndex, setActiveIndex] = useState(0);

	const experiences = [
		{
			company: "Hub Group",
			roles: [
				{
					title: "Data Analytics Engineer",
					duration: "April 2025 - Present",
				},
			],
			description: `I build data pipelines and analytics systems that power financial forecasting and reporting across the company. Using Azure Data Factory, Snowflake, and Databricks, I automate data ingestion and transformation, improving reliability and reducing latency. My work blends data engineering, analytics, and MLOps to turn raw data into trusted insights for business and finance teams.`,
			image: Hubgroup,
			useTextLogo: false,
		},
		{
			company: "DaVita",
			roles: [
				{ title: "Data Engineer", duration: "Jan 2024 - March 2025" },
			],
			description: `I built and managed data and machine learning pipelines that powered healthcare analytics at scale. Using Python, PySpark, dbt, and GCP Dataflow, I unified data from EHR, CRM, and claims systems into clean, analytics-ready layers on BigQuery and Snowflake. I also helped deploy predictive models through Vertex AI and Jenkins, enabling smarter forecasts and more reliable clinical insights.`,
			useTextLogo: true,
			logoText: "DV",
			logoColor: "bg-gradient-to-br from-orange-500 to-red-600",
		},
		{
			company: "Smmud Technologies",
			roles: [
				{ title: "Data Analyst", duration: "Sept 2020 - July 2022" },
			],
 			description: `I helped modernize the company’s analytics platform by automating ETL workflows and building scalable pipelines on AWS. Using Glue, Redshift, and SageMaker, I streamlined data ingestion and built predictive models for demand forecasting and resource planning. I also created interactive dashboards in Power BI and Tableau, turning complex operational data into clear business insights.`,			
  			image: smmud,
			useTextLogo: false,
		},
	];

	return (
		<section id="experience" className="py-12">
			<div className="mt-16">
				<SectionHeader
					title={"Work Experience."}
					subtitle={"A timeline of my professional journey."}
				/>
			</div>

			<div className="relative max-w-7xl mx-auto mt-4 px-4 md:px-6">
				<div className="flex flex-col md:flex-row gap-6 items-start">
					<div className="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
						{experiences.map((exp, index) => (
							<div
								key={exp.company}
								className={`p-4 rounded-lg shadow-lg transition-transform duration-300 ease-out cursor-pointer flex items-center gap-4 mb-4 ${activeIndex === index
									? "border-l-4 border-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 text-white"
									: "hover:from-blue-500 hover:to-purple-500 hover:shadow-2xl hover:scale-105 hover:rotate-1"
									}`}
								onClick={() => setActiveIndex(index)}
							>
								{exp.useTextLogo ? (
									<div
										className={`w-10 h-10 rounded-full ${exp.logoColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}
									>
										{exp.logoText}
									</div>
								) : (
									<img
										src={exp.image}
										alt={`${exp.company} logo`}
										className="w-10 h-10 rounded-full object-cover"
									/>
								)}
								<span className="font-medium">
									{exp.company}
								</span>
							</div>
						))}
					</div>

					<div className="w-full md:w-3/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold mb-6">
							{experiences[activeIndex].company}
						</h3>
						<div className="relative pl-6">
							{experiences[activeIndex].roles.map((role, idx) => (
								<div
									key={idx}
									className="flex items-center mb-8 hover:scale-105 transition-transform duration-300"
								>
									<div className="relative flex items-center">
										<div className="w-4 h-4 rounded-full shadow-md bg-purple-500"></div>
										{idx !==
											experiences[activeIndex].roles
												.length -
											1 && (
												<div className="absolute left-[50%] top-4 w-[2px] h-16 bg-gradient-to-b from-purple-500 to-blue-500"></div>
											)}
									</div>

									<div className="ml-6">
										<span className="text-lg font-semibold text-purple-500">
											{role.title}
										</span>
										<div className="text-sm text-gray-600 dark:text-gray-300">
											{role.duration}
										</div>
									</div>
								</div>
							))}
						</div>
						<p className="mt-6 mb-4 text-gray-800 dark:text-gray-300">
							{experiences[activeIndex].description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
