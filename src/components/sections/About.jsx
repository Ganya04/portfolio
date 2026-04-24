import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import profilePic from "../../assets/images/GanyaRP.jpg";
import { skillsWork } from "../../utils/index";
import Marquee from "react-fast-marquee";

const skillStacks = [
	{
		title: "📊 Analytics & Business Intelligence",
		description:
			"Creating interactive dashboards and reports with Power BI, Tableau, and Looker. Developing DAX measures, advanced Excel automation, and self-service analytics solutions that drive data-driven decision-making across organizations.",
		tools: ["Power BI", "Tableau", "Looker", "Excel"],
	},
	{
		title: "💾 Data Engineering & ETL",
		description:
			"Designing scalable ETL pipelines with Azure Data Factory, Matillion, dbt, and Airflow. Building robust data integrations across Snowflake, Databricks, and cloud platforms to deliver analytics-ready datasets for enterprise reporting and compliance.",
		tools: ["Azure Data Factory", "Snowflake", "dbt", "PySpark"],
	},
	{
		title: "☁️ Cloud & Data Platforms",
		description:
			"Architecting cloud-based analytics solutions across Azure, AWS, and GCP. Implementing data lakes, warehouses, and streaming pipelines with services like BigQuery, Redshift, Dataflow, and Kafka for scalable data processing.",
		tools: ["Azure", "AWS", "GCP", "Kafka"],
	},
	{
		title: "🤖 Machine Learning & Predictive Analytics",
		description:
			"Building predictive models for forecasting, anomaly detection, and risk assessment using Python, TensorFlow, and Scikit-learn. Deploying ML pipelines that deliver actionable insights and improve business outcomes.",
		tools: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
	},
];

const fadeInVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const About = () => {
	const [speed, setSpeed] = React.useState(0);

	return (
		<section
			className="relative mx-auto max-w-7xl px-6 py-16 transition-colors duration-300"
			id="about"
		>
			<div className="absolute inset-0 pointer-events-none -z-10">
				<div className="absolute w-96 h-96 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-10 top-16 left-1/4 dark:from-purple-400 dark:to-indigo-400"></div>
				<div className="absolute w-72 h-72 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-10 bottom-16 right-1/4 dark:from-blue-400 dark:to-indigo-400"></div>
			</div>

			<SectionHeader title={"About."} subtitle={"Skills & Journey"} />

			<div className="flex flex-col md:flex-row gap-12 mt-8 justify-center items-center">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeInVariants}
					className="space-y-8 text-center md:text-left max-w-lg"
				>
				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  					I&apos;m <strong>Ganya Janardhan</strong>, a Business Systems Analyst with 5+ years of experience working across data, reporting, and business processes. I focus on translating business needs into structured data solutions using <strong>SQL</strong>, <strong>Python</strong>, and BI tools.
				</p>

				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
				At{" "}
				<a
					href="https://www.hubgroup.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
				>
					Hub Group
				</a>{" "}
				I&apos;ve worked on financial and operational reporting, supported data pipelines, validated data quality, and built dashboards that help teams track performance and make decisions. Over time, I&apos;ve also worked more closely with data transformations, pipeline logic, and how data is structured for analytics.
				</p>

				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
				I hold a <strong>Master&apos;s in Computer Science (Data Analytics)</strong> from Illinois Institute of Technology, along with certifications in IBM Data Science and Google Cloud. My work spans across analytics, reporting, and building reliable data workflows.
				</p>

				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
				Currently, I&apos;m focused on strengthening my skills in data engineering and applied AI—working on projects around data pipelines, automation, and scalable analytics systems.
				</p>

				<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
				Outside of work, I enjoy exploring nature trails 🌲, trying out new recipes 🍲, and keeping up with what&apos;s happening in data and AI 🤖.
				</p>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeInVariants}
					className="flex justify-center md:justify-center"
				>
					<img
						src={profilePic}
						alt="Profile"
						className="w-80 rounded-full border-2 border-secondary shadow-lg"
					/>
				</motion.div>
			</div>

			<div className="mt-16 relative">
				<SectionHeader
					title={"Programming Tools."}
					subtitle={"Dynamic view of my expertise."}
				/>

				{(() => {
					return (
						<div className="relative">
							<div
								className="absolute top-0 left-0 h-full w-10 z-10"
								onMouseEnter={() => setSpeed(80)}
								onMouseLeave={() => setSpeed(0)}
							>
								<div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-100 via-transparent to-transparent dark:from-gray-800 dark:via-transparent dark:to-transparent animate-pulse"></div>
							</div>
							<div
								className="absolute top-0 right-0 h-full w-10 z-10"
								onMouseEnter={() => setSpeed(80)}
								onMouseLeave={() => setSpeed(20)}
							>
								<div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-100 via-transparent to-transparent dark:from-gray-800 dark:via-transparent dark:to-transparent animate-pulse"></div>
							</div>

							<Marquee
								gradient={false}
								speed={speed}
								className="mt-8 overflow-hidden"
								pauseOnHover={false}
							>
								{skillsWork.map((skill, index) => {
									const IconComponent = skill.icon;
									return (
										<div
											key={index}
											className="mx-4 flex h-36 w-36 flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 shadow-md transition-transform duration-300 hover:border-purple-300 hover:shadow-xl dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white"
										>
											<div className="text-4xl mb-2 text-purple-500 dark:text-purple-500">
												<IconComponent />
											</div>
											<p className="text-sm font-semibold text-center">
												{skill.name}
											</p>
										</div>
									);
								})}
							</Marquee>
						</div>
					);
				})()}
			</div>

			<div className="mt-16">
				<SectionHeader
					title={"What I Do."}
					subtitle={"Explore my skills visually as building blocks."}
				/>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
				>
					{skillStacks.map((stack, index) => (
						<motion.div
							key={index}
							className="relative rounded-2xl border border-white/40 bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 text-gray-800 shadow-md transition-transform duration-300 ease-out hover:shadow-xl dark:border-white/10 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 dark:text-white"
							variants={fadeInVariants}
						>
							<h3 className="text-xl font-bold">{stack.title}</h3>
							<p className="mt-2 text-sm">{stack.description}</p>
							<div className="flex flex-wrap gap-2 mt-4">
								{stack.tools.map((tool, idx) => (
									<span
										key={idx}
										className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm dark:bg-purple-500"
									>
										{tool}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default About;
