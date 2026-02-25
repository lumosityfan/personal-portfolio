import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function SpacesuitTesting() {
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
          <a
            href="https://github.com/lumosityfan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/lumosityfan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="/JeffXie-Resume-February2026.pdf"
            aria-label="Download Resume"
            download
          >
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

        <div>
          <h2 className="text-3xl font-bold mb-2">
            Spacesuit Testing Apparatus
          </h2>
          <p className="text-gray-700 dark:text-gray-500">
            Software Contractor — NASA Artemis Program
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "pytest", "Trick Simulation", "CI/CD"].map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Overview</h3>
          <p className="text-gray-700 dark:text-gray-500">
            As a contractor supporting NASA’s Artemis mission, I developed an
            automated testing framework to validate mission-critical spacesuit
            software and hardware interfaces. The system improved reliability,
            enabled repeatable regression testing, and reduced manual validation
            effort in a safety-critical aerospace environment.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">The Problem</h3>
          <p className="text-gray-700 dark:text-gray-500">
            Spacesuit control systems involve complex interactions between
            embedded software and hardware components. Existing workflows
            relied heavily on manual test execution and physical hardware
            validation, slowing iteration and limiting regression coverage.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Solution & Contributions</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-500">
            <li>
              Integrated <strong>pytest</strong> with the Trick simulation framework
              to enable automated simulation-driven validation.
            </li>
            <li>
              Designed comprehensive regression test suites for control logic
              and hardware interface behaviors.
            </li>
            <li>
              Enabled hardware validation within simulation environments to
              reduce dependency on physical test runs.
            </li>
            <li>
              Built a CI/CD pipeline to automatically trigger regression tests
              on code changes.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Technical Architecture</h3>
          <p className="text-gray-700 dark:text-gray-500">
            The Trick simulation environment executed system models while
            Python-based pytest frameworks orchestrated automated validation.
            CI/CD automation ensured regression testing occurred consistently
            across builds, providing rapid feedback and structured failure
            reporting.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-500 mb-2">Impact</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-500">
            <li>Improved automated regression coverage.</li>
            <li>Reduced manual validation workload.</li>
            <li>Accelerated development feedback cycles.</li>
            <li>Strengthened reliability assurance for Artemis systems.</li>
          </ul>
        </section>

      </div>
    </div>
  );
}