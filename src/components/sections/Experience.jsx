"use client";

import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import trigent from "../../assets/images/trigent.jpeg";
import uhg from "../../assets/images/uhg.png";
import Hubgroup from "../../assets/images/Hubgroup.png";

export default function Experience() {
	const [activeIndex, setActiveIndex] = useState(0);

	const experiences = [
		{
			company: "Hub Group",
			roles: [
				{
					title: "Business Systems Analyst",
					duration: "April 2025 - Present",
				},
			],
			description: `Working across finance and operations, I focus on improving billing, cost visibility, and performance reporting for intermodal transportation programs. My work involves translating business needs into structured requirements and building dashboards that track freight spend, carrier performance, and operational KPIs. I’ve worked closely with shipment billing workflows, including fuel surcharge calculations, rate structures, lane/destination-based pricing, and different billing formats across customers and carriers. I analyze how charges are applied across routes and identify inconsistencies or gaps impacting revenue and cost accuracy. I also support data validation and UAT, ensuring outputs align with source systems and business rules, helping reduce discrepancies and improve reporting reliability.`,
			image: Hubgroup,
			useTextLogo: false,
		},
		{
			company: "UnitedHealth Group",
			roles: [
				{ 
					title: "Business Systems Analyst", 
					duration: "Jan 2024 - March 2025" 
			    },
			],
			description: `At UHG, I worked on healthcare data and system transformation initiatives, focusing on patient data, insurance claims processing, and care management workflows. My role involved bridging business, clinical, and technical teams to define requirements and support system enhancements across payer systems. I worked with end-to-end claims lifecycle data (intake, adjudication, and reimbursement), along with member eligibility, provider data, and benefit plan structures, helping improve data consistency and reduce discrepancies across systems. I also supported initiatives around payer-provider data exchange, claims validation, and cost-of-care analysis, ensuring alignment with operational and regulatory requirements. In addition, I analyzed clinical and claims datasets to identify trends in utilization, readmissions, and treatment costs, while supporting UAT and ensuring compliance with HIPAA, CMS guidelines, and healthcare data standards.`,
			image: uhg,
			useTextLogo: false,			
		},
		{
			company: "Trigent Software Inc,",
			roles: [
				{ title: "Business Systems Analyst ", duration: "Jan 2020 - June 2022" },
			],
 			description: `At Trigent, I worked on a range of enterprise and e-commerce projects for different clients, supporting business analysis, system enhancements, and reporting initiatives. My role involved gathering and translating business requirements into functional specifications, user stories, and process flows aligned with client needs. I worked with transactional data, order management workflows, and customer-related data, supporting systems handling order processing, inventory tracking, and payment flows. I performed gap analysis and collaborated with technical teams to ensure solutions were aligned with business requirements and scalable across use cases. In addition, I supported reporting and analytics efforts using SQL and Excel, helping validate data, track KPIs, and improve visibility into business performance. I also contributed to UAT cycles, test case creation, and defect tracking to ensure smooth releases across client environments.`,			
  			image: trigent,
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
					<div className="w-full rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 p-4 shadow-md dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 md:w-1/4">
						{experiences.map((exp, index) => (
							<div
								key={exp.company}
								className={`mb-4 flex cursor-pointer items-center gap-4 rounded-2xl p-4 transition-transform duration-300 ease-out ${
									activeIndex === index
										? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg"
										: "border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 shadow-sm hover:shadow-md dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white"
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

					<div className="w-full rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 shadow-md dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 md:w-3/4">
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
