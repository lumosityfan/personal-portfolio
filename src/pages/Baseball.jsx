import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Baseball() {
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
          <h2 className="text-3xl font-bold mb-2">Baseball Visualizations</h2>
          <p className="text-gray-700 dark:text-gray-500">
            Personal Project — Sports Analytics & Interactive Data Visualization
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Datawrapper", "Baseball-Reference", "Data Visualization", "Sports Analytics"].map((tech) => (
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
            This project explores long-term trends in Major League Baseball performance through
            interactive visualizations built on historical data from Baseball-Reference. Both pitching
            and batting statistics are examined across multiple decades, revealing how the game has
            evolved in its fundamental dynamics — from strikeout rates to batting averages and home run trends.
          </p>
        </section>

        {/* Pitching */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">
            Pitching Statistics Visualization
          </h3>
          <p className="text-gray-700 dark:text-gray-500 mb-4">
            Built from Baseball-Reference's annual league averages, this chart focuses on key rate
            statistics — H/9, BB/9, SO/9, and HR/9 — that capture a pitcher's effectiveness independent
            of playing time. The interactive line chart allows direct comparison across eras, highlighting
            shifts like the modern strikeout surge and declining hit rates.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <iframe
              title="Pitching Statistics Over Time"
              aria-label="Interactive line chart"
              id="datawrapper-chart-DlmNc"
              src="https://datawrapper.dwcdn.net/DlmNc/3/"
              scrolling="no"
              frameBorder="0"
              className="w-full"
              height="400"
              data-external="1"
            />
          </div>
        </section>

        {/* Batting */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">
            Batting Statistics Visualization
          </h3>
          <p className="text-gray-700 dark:text-gray-500 mb-4">
            A companion visualization using the same methodology applied to batting statistics.
            Tracking metrics like batting average, on-base percentage, and slugging over time reveals
            how offensive production has shifted across different eras of the game — from the
            dead-ball era through the steroid era to today's three-true-outcomes environment.
          </p>
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <iframe
              title="Batting Statistics"
              aria-label="Interactive line chart"
              id="datawrapper-chart-xwqlj"
              src="https://datawrapper.dwcdn.net/xwqlj/1/"
              scrolling="no"
              frameBorder="0"
              className="w-full"
              height="400"
              data-external="1"
            />
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