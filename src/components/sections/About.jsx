import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import profilePic from "../../assets/images/GanyaRP.jpg";
import { skillsWork, certificates } from "../../utils/index";
import Marquee from "react-fast-marquee";

const skillStacks = [
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
		title: "📊 Analytics & Business Intelligence",
		description:
			"Creating interactive dashboards and reports with Power BI, Tableau, and Looker. Developing DAX measures, advanced Excel automation, and self-service analytics solutions that drive data-driven decision-making across organizations.",
		tools: ["Power BI", "Tableau", "Looker", "Excel"],
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
						Hey there! I&apos;m <strong>Ganya Janardhan</strong>, a
						Data Analytics Engineer with 4 years of experience
						designing scalable ETL pipelines, financial/healthcare
						data models, and cloud-based analytics solutions. Based
						in Chicago, I specialize in
						<strong> SQL</strong>, <strong>Python</strong>,{" "}
						<strong>PySpark</strong>, and{" "}
						<strong>dbt (data build tool) </strong>
						across Azure, AWS, and GCP platforms.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						Currently, I work for{" "}
						<a
							href="https://www.hubgroup.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
						>
							Hub Group
						</a>{" "}
						as a Data Analytics Engineer, where I design scalable
						ETL pipelines using Azure Data Factory, Snowflake,
						Matillion, and Kafka. I develop financial data models in
						Databricks and dbt, build automated validation
						frameworks, and deliver interactive reporting solutions
						in Power BI and Looker that drive business insights and
						improve data governance.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						I hold a{" "}
						<strong>
							Master of Computer Science in Data Analytics
						</strong>{" "}
						from Illinois Institute of Technology, and I&apos;m
						certified in Google Data Analytics, AWS Solutions
						Architecture, and IBM Data Science. My expertise spans
						the full data lifecycle from ingestion and
						transformation to analytics and ML-driven insights.
					</p>
					<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
						Outside of work, I enjoy exploring nature trails 🌲,
						experimenting with new recipes 🍲, and staying ahead of
						the curve with the latest trends in AI, data analytics,
						and tech 🤖. I&apos;m always interested in connecting
						with fellow data professionals and exploring
						opportunities to solve challenging problems in the
						analytics space!
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
											className="w-36 h-36 flex flex-col items-center justify-center mx-4 bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white rounded-xl shadow-lg hover:scale-100 hover:border-2 hover:border-purple-500 transition-transform duration-300 overflow-hidden"
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
					title={"Certifications."}
					subtitle={"Recognitions of my expertise."}
				/>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="flex flex-wrap justify-center items-center gap-6 mt-8 mx-auto"
				>
					{certificates.map((cert, index) => (
						<motion.div
							key={index}
							className="bg-gradient-to-r from-gray-100 to-gray-300 text-dark-secondary dark:from-gray-800 dark:to-gray-900 dark:text-white hover:dark:text-white p-4 rounded-lg hover:bg-gradient-to-r hover:dark:bg-gradient-to-r hover:text-white hover:dark:from-blue-500 hover:dark:to-purple-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg w-72"
							variants={fadeInVariants}
						>
							<h3 className="text-lg text-center font-bold">
								{cert}
							</h3>
						</motion.div>
					))}
				</motion.div>
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
							className="relative bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 dark:from-gray-800 dark:to-gray-900 dark:text-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-1 transition-transform duration-300 ease-out"
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