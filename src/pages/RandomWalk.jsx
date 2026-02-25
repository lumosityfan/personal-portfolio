import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function RandomWalk() {
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
          <h2 className="text-3xl font-bold mb-2">Random Walk Simulation</h2>
          <p className="text-gray-700 dark:text-gray-500">
            Personal Project — Stochastic Simulation & Interactive Visualization
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "Dash", "Plotly", "NumPy", "Data Visualization"].map((tech) => (
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
            This project is an interactive random walk simulator built with Python, Dash, and Plotly.
            Each simulation generates a new 1,000-step random walk path at the click of a button,
            visualizing stochastic movement through a 2D plane. The tool demonstrates core concepts
            in probability and simulation while delivering a polished, interactive user experience.
          </p>
        </section>

        {/* The Problem */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">The Problem</h3>
          <p className="text-gray-700 dark:text-gray-500">
            Random walks are a fundamental concept in probability theory, physics, and financial modeling,
            yet they can be difficult to intuit without visual feedback. Static plots fail to communicate
            the generative, unpredictable nature of stochastic processes. The goal was to create a
            dynamic tool that makes this behavior immediately tangible and explorable.
          </p>
        </section>

        {/* Solution */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Solution & Contributions</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-500">
            <li>
              Built a <strong>Dash</strong> web application with a "Generate Values" button that triggers
              a fresh 1,000-step random walk simulation on each click.
            </li>
            <li>
              Used <strong>NumPy</strong> to efficiently compute cumulative step positions from
              randomly sampled unit vectors.
            </li>
            <li>
              Rendered the walk as an interactive <strong>Plotly</strong> line chart with hover
              tooltips showing step index and position coordinates.
            </li>
            <li>
              Designed a clean, responsive layout suitable for both desktop and browser-based demos.
            </li>
          </ul>
        </section>

        {/* Technical Architecture */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Technical Approach</h3>
          <p className="text-gray-700 dark:text-gray-500">
            At each step, a random direction is sampled and accumulated to produce the walk trajectory.
            Dash callbacks bind the button interaction to Python-side computation, passing the resulting
            data to a Plotly figure rendered client-side. This architecture keeps the simulation logic
            cleanly server-side while delivering a responsive, interactive frontend.
          </p>
        </section>

        {/* Sample Image */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-3">Sample Output</h3>
          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm">
            <img
              src={require("../images/random_walk_sample.png")}
              alt="Random Walk Simulation example"
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* GitHub CTA */}
        <section>
          <a
            href="https://github.com/lumosityfan/random_walk_simulation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg transition"
          >
            <FaGithub className="text-lg" />
            View on GitHub
          </a>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="text-center py-6 text-sm text-gray-400 dark:text-gray-600">
        &copy; 2026 Jeff Xie. All rights reserved.
      </footer>

    </div>
  );
}