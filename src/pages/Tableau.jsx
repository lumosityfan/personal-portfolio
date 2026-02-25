import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";

const visualizations = [
  {
    title: "Retention Data Visualization",
    description: "Explores the various factors that influence employee or student retention, identifying key drivers through comparative analysis.",
    href: "https://public.tableau.com/views/RetentionDataVisualization/VariousFactorsInfluencingRetention?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Adult Data Visualization",
    description: "Examines how demographic and socioeconomic factors correlate with salary levels using the UCI Adult dataset.",
    href: "https://public.tableau.com/views/AdultDataVisualization/VariousFactorsvs_Salary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Diagnosis Data Visualization",
    description: "Compares clinical factors with influence on nephritis diagnosis outcomes, highlighting the most predictive indicators.",
    href: "https://public.tableau.com/views/DiagnosisDataVisualization/ComparingFactorswithInfluenceonNephritis?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Chinese New Year vs. Thanksgiving",
    description: "Compares consumer expenditures and travel volumes between Chinese New Year and Thanksgiving holiday periods.",
    href: "https://public.tableau.com/views/DataVisualizationProject_17196830239700/ComparingChineseNewYearsandThanksgivingExpendituresandTrips?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "A World As 100 People",
    description: "A scaled-down representation of global population statistics — condensing world demographics into an intuitive 100-person model.",
    href: "https://public.tableau.com/views/DataVisualizationExercise_17192435954180/AWorldas100People?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Apple Employment History",
    description: "Visualizes Apple Inc.'s headcount growth over time, reflecting key moments in the company's expansion and product cycles.",
    href: "https://public.tableau.com/views/XieJeff_Assignment1/AppleEmploymentHistory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "Sales By State",
    description: "A geographic breakdown of sales performance across U.S. states, enabling regional comparison at a glance.",
    href: "https://public.tableau.com/shared/B7F9S9X7P?:display_count=n&:origin=viz_share_link",
  },
];

export default function Tableau() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 text-gray-100 min-h-screen" : "bg-gray-50 text-gray-900 min-h-screen"}>

      {/* HEADER */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700"
      >
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:opacity-80 transition">
            Jeff Xie • Backend & Cloud Software Engineer
          </Link>
        </h1>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl hover:scale-110 transition" />
          </a>
          <a href="https://www.linkedin.com/in/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl hover:scale-110 transition" />
          </a>
          <a href="/JeffXie-Resume-February2026.pdf" aria-label="Download Resume" download>
            <GrDocumentPdf className="text-2xl hover:scale-110 transition" />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span>Dark Mode</span>
          <Switch checked={dark} onCheckedChange={() => setDark(!dark)} />
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">

        {/* Title & Meta */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Tableau Visualizations</h2>
          <p className="text-gray-700 dark:text-gray-500">
            Academic Project — Software Engineering Visualization Course, Summer 2024
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Tableau", "Data Visualization", "Exploratory Analysis", "Storytelling with Data"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Overview */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Overview</h3>
          <p className="text-gray-700 dark:text-gray-500">
            As part of a Software Engineering Visualization course, I produced a series of seven
            Tableau dashboards spanning diverse real-world datasets — from global demographics and
            healthcare diagnostics to consumer spending patterns and corporate employment history.
            Each visualization was designed to communicate a specific analytical narrative clearly
            and interactively for a non-technical audience.
          </p>
        </section>

        {/* Visualizations Grid */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-4">Visualizations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visualizations.map((viz) => (
              <a
                key={viz.title}
                href={viz.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {viz.title}
                  </h4>
                  <FaExternalLinkAlt className="text-gray-400 group-hover:text-blue-500 transition flex-shrink-0 mt-1 text-xs" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{viz.description}</p>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600">
        &copy; 2026 Jeff Xie. All rights reserved.
      </footer>

    </div>
  );
}
