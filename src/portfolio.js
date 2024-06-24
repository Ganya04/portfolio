const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/portfolio",
  title: "Ganya Janardhan.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Ganya Janardhan",
  role: "Data Analyst",
  description:
    "Dynamic and analytical Data Analyst with a solid foundation in statistics and data analysis. Highly skilled in SQL, Python, and R, with practical experience in machine learning, data visualization, and big data technologies. Passionate about transforming complex data into actionable insights and optimizing performance through advanced analytics. Committed to continuous learning and professional growth, ready to make a significant impact on a forward-thinking team.",
  resume:
    "https://docs.google.com/document/d/12qQMB_uzXyh3ioazM5CxgVF9adUJSJPS08K2QThPnPQ/edit?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/ganya-janardhan/",
    github: "https://github.com/ganya04",
    twitter: "https://twitter.com/ganya_janardhan",
  },
};

const experiences = [
  {
    name: "SMMUD Technologies Pvt. Ltd.",
    role: "Data Analyst",
    description:
      "Enhanced data accuracy by 25% through meticulous data cleaning and preprocessing using Python and SQL, while automating data processing tasks to reduce manual effort by 35%. Designed and implemented robust data models and interactive dashboards with Power BI and Tableau, elevating decision-making efficiency by 40% and boosting operational performance by 15%. Refined SQL queries to increase database efficiency by 30%, cutting query execution time by 20% and enhancing data retrieval processes for more accurate and timely analysis.",
    stack: [
      "Python",
      "SQL",
      "Power BI",
      "Tableau",
      "Hadoop",
      "Spark",
      "Azure",
      "AWS",
    ],
    startDate: "January 2021",
  },
  {
    name: "The Sparks Foundation",
    role: "Data Scientist Intern",
    description:
      "Executed K-means clustering on a 16-dimensional iris dataset, achieving 97% accuracy using Python's scikit-learn, demonstrating strong data analysis and machine learning skills. Collaborated on the development of a student success predictive model, achieving 94% accuracy by utilizing and optimizing models with Python's scikit-learn, showcasing expertise in predictive analytics.",
    stack: [
      "Python",
      "scikit-learn",
      "Jupyter Notebook",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Seaborn",
    ],
    startDate: "March 2021",
  },
  {
    name: "The Accenture North America (Open Source Project, Remote, USA)",
    role: "Data Analyst Intern",
    description:
      "Led a comprehensive big data infrastructure audit using advanced SQL, collaborating with the Data Team to recommend strategic enhancements that improved data quality and performance.",
    stack: ["SQL", "Hadoop", "Spark", "AWS", "Azure", "Jira", "Confluence"],
    startDate: "June 2024",
  },
  {
    name: "PwC Switzerland (Open Source Project, Remote, USA)",
    role: "Power BI Intern",
    description:
      "Developed a Power BI dashboard integrating key metrics and complex DAX calculations, creating visually compelling and interactive charts for a telecom client, which significantly aided in informed decision-making and performance evaluation.",
    stack: ["Power BI", "DAX", "SQL", "Excel", "Tableau"],
    startDate: "June 2024",
  },
  {
    name: "Quantium (Open Source Project, Remote, USA)",
    role: "Data Analyst Intern",
    description:
      "onducted comprehensive analysis of transaction and customer data, developing key metrics to identify sales drivers using R and Python. Created visualized strategic recommendations that provided actionable insights to enhance sales performance and drive business growth.",
    stack: [
      "R",
      "Python",
      "Excel",
      "Numpy",
      "Pandas",
      "SQL",
      "Matplotlib",
      "Seaborn",
    ],
    startDate: "June 2024",
  },
];

const projects = [
  {
    name: "Facial Expression Recognition using Convolutional Neural Networks",
    description:
      "Directed the Facial Expression Recognition project, utilizing Custom CNN and Dense Net models on the FER2013 dataset. Demonstrated expertise in deep learning and image classification, achieving test accuracies of 62% and 64%.",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "Seaborn",
      "Matplotlib",
    ],
    sourceCode: "https://github.com/Ganya04/Facial_expression_recognition",
  },
  {
    name: "Optimizing Movie Recommendation for Enhanced User Experience",
    description:
      "Engineered a movie recommendation system using collaborative filtering techniques, including matrix factorization, cosine similarity, and KNN algorithm. Enhanced user satisfaction and engagement through tailored movie suggestions.",
    stack: [
      "Python",
      "Matrix Factorisation",
      "Cosine Similarity",
      "KNN",
      "Matplotlib",
      "Seaborn",
      "Pandas",
      "Numpy",
    ],
    sourceCode: "https://github.com/Ganya04/Optimizing_Movie_Recommendation",
  },
  {
    name: "Online Fake News Detection",
    description:
      "Applied R for data preprocessing and Python for algorithm implementation, utilizing logistic regression, multinomial naive bayes, and LSTM models. Achieved 81% detection accuracy, demonstrating strong capabilities in machine learning and data analysis.",
    stack: [
      "R",
      "Python",
      "Logistic Regression",
      "Naive Bayes",
      "LSTM",
      "Matplotlib",
      "Seaborn",
      "Pandas",
      "Numpy",
      "ggplot2",
    ],
    sourceCode: "https://github.com/Ganya04/Online-fakenews-detection",
  },
  {
    name: "Demographic Analysis in a Population",
    description:
      "Leveraged PySpark for exploratory data analysis, extracting demographic insights such as gender distribution, manner of death, and country-wise population. Implemented predictive models to support informed decision-making, enhancing analytical capabilities.",
    stack: ["PySpark", "Python", "Matplotlib", "Seaborn", "Pandas", "Numpy"],
    sourceCode: "https://github.com/Ganya04/Demographic-analysis",
  },
];

const skills = [
  "MySQL",
  "Python",
  "R Programming",
  "AWS - S3, EC2, RDS, IAM, EC2, EMR, Elastic IPs, Elastic Beanstalk",
  "Azure - Blob Storage, Virtual Machines, Azure SQL Database, Azure Data Lake, Azure Databricks",
  "Hadoop",
  "Spark",
  "Tableau",
  "Power BI",
  "Microsoft Excel",
  "Python IDLE",
  "Jupyter Notebook",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Git",
  "Bitbucket",
  "Jira",
  "Pandas",
  "Numpy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
];

const contact = {
  email: "ganyajanardhan04@gmail.com",
};

export { header, about, experiences, projects, skills, contact };
