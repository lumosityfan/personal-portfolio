import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from "react-router-dom";

const skills = [
  { skill: 'Algorithms', value: 80 },
  { skill: 'Systems', value: 70 },
  { skill: 'Web Dev', value: 60 },
  { skill: 'AI/ML', value: 80 },
  { skill: 'Security', value: 60 },
  { skill: 'Databases', value: 60 }
];

const featuredProjects = [
  {
    title: "Spacesuit Testing Apparatus",
    description: "Designed and built a hardware test apparatus for NASA's Artemis mission spacesuit, validating structural integrity under simulated conditions.",
    link: "/spacesuit",
    tags: ["Hardware", "NASA", "Engineering"]
  },
  {
    title: "PCA Analysis",
    description: "Applied Principal Component Analysis to reduce high-dimensional datasets and improve accuracy in face detection pipelines.",
    link: "/pca",
    tags: ["Python", "ML", "Computer Vision"]
  },
];

const funProjects = [
  {
    title: "Random Walk Simulator",
    description: "Modeled and visualized stochastic random walk behavior over 1000 steps to explore probability distributions.",
    link: "/randomwalk",
    tags: ["Python", "Simulation"]
  },
  {
    title: "Tableau Visualizations",
    description: "Built a suite of interactive dashboards exploring health factors, global trends, and Apple download history.",
    link: "/tableau",
    tags: ["Tableau", "Data Viz"]
  },
  {
    title: "Baseball Graphs",
    description: "Analyzed 150 years of MLB batting and pitching data to surface long-term performance trends across eras.",
    link: "/baseball",
    tags: ["Python", "Analytics"]
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
        <CardContent className="p-6 bg-orange-400 flex flex-col h-full gap-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-orange-950 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-orange-600 text-white px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            aria-label={`View further details about ${project.title}`}
            className="mt-2 inline-block bg-[#0a1128] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#1a2540] transition-colors duration-200 self-start"
          >
            Further Details →
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzgbrvy", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={dark ? "bg-gray-950 text-white min-h-screen" : "bg-white text-black min-h-screen"}
    >
      {/* Navbar */}
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
            aria-label="GitHub profile"
          >
            <FaGithub className="text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/lumosityfan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-2xl hover:scale-110 transition" />
          </a>

          <a
            href="/JeffXie-Resume-February2026.pdf"
            aria-label="Download resume as PDF"
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

      {/* Hero */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-10"
      >
        <h2 className="text-4xl font-bold mb-4">
          <Typewriter words={["Hi, I'm Jeff", "Software Engineer", "Backend Developer", "Cloud Infrastructure Maintainer", "AI Explorer"]} loop={true} />
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          Software engineer focused on backend systems, APIs, and cloud infrastructure.
          I hold an M.S. in Computer Science and enjoy designing reliable, scalable services.
        </p>
      </motion.section>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 py-6 max-w-3xl mx-auto"
      >
        <Card>
          <CardContent className="bg-green-400">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p>
              I'm a software engineer with a strong foundation in backend development and systems design.
              I enjoy building software that is reliable, maintainable, and thoughtfully engineered,
              whether that's designing APIs, debugging edge-case failures, or improving system performance.
            </p>
            <p className="mt-4">
              I recently completed my M.S. in Computer Science and am particularly interested in backend, platform, and infrastructure-adjacent roles.
              Outside of coding, I enjoy sports, video games, and reading, and I'm always happy to talk tech or collaborate on interesting problems.
            </p>
          </CardContent>
        </Card>
      </motion.section>

      {/* Featured Projects */}
      <section className="px-6 py-10">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Featured Projects
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Fun Projects */}
      <section className="px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h3 className="text-3xl font-bold">Fun Projects</h3>
          <p className="text-sm opacity-60 mt-1">Side explorations and data experiments</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {funProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Radar */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-10"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Skills Radar</h3>
        <div className="w-full h-96">
          <ResponsiveContainer>
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <Radar name="Skill" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-10 max-w-xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-4 text-center">Contact Me</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded text-black"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded text-black"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-2 border rounded text-black"
          ></motion.textarea>
          <input type="hidden" name="_captcha" value="true" />
          <Button type="submit">Send Message</Button>
        </form>
        {status === "success" && <p className="text-green-500 mt-2">Thanks! Your message has been sent.</p>}
        {status === "error" && <p className="text-red-500 mt-2">Oops! Something went wrong. Please try again.</p>}
      </motion.section>

      <footer className="text-center py-6 text-sm opacity-60">
        &copy; 2026 Jeff Xie. All rights reserved.
      </footer>
    </motion.div>
  );
}
