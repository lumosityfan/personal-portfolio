import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  { skill: 'Algorithms', value: 80 },
  { skill: 'Systems', value: 70 },
  { skill: 'Web Dev', value: 60 },
  { skill: 'AI/ML', value: 80 },
  { skill: 'Security', value: 60 },
  { skill: 'Databases', value: 60 }
];

const projects = [
  {
    title: "Random Walk Simulator",
    description: "A simulation that shows a random walk over 1000 steps.",
    link: "/randomwalk"
  },
  {
    title: "Tableau Visualizations",
    description: "A list of tableau visualization that I made over various topics such as health factors, world trends, and Apple download history.",
    link: "/tableau"
  },
  { 
    title: "Baseball Graphs",
    description: "A group of baseball graphs I made concerning batting and pitching trends over the past 150 years.",
    link: "/baseball"
  },
  {
    title: "PCA Analysis",
    description: "The usage of Principal Component Analysis to shrink dimensions of dataset and assist in face detection.",
    link: "/pca"
  }
];

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
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center px-6 py-4"
      >
        <h1 className="text-2xl font-bold"><a href="/">Jeff Xie • CS Portfolio</a></h1>
        <div className="flex items-center gap-2">
          <span>Dark Mode</span>
          <Switch checked={dark} onCheckedChange={() => setDark(!dark)} />
        </div>
      </motion.div>

      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-10"
      >
        <h2 className="text-4xl font-bold mb-4">
          <Typewriter words={["Hi, I'm Jeff", "Software Engineer", "Mixed Reality Innovator", "AI Explorer"]} loop={true} />
        </h2>
        <p className="text-lg max-w-xl mx-auto">
          I’m a curious and pragmatic developer with a passion for elegant systems and thoughtful design.
          Having finished my M.S. in Computer Science, I'm exploring the intersection of AI and human-computer interaction.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </motion.section>

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
          Ever since I wrote my first line of Python in high school, I've been obsessed with building things that work beautifully.
          Whether it’s crafting intelligent tools or debugging edge-case bugs, I thrive on problem-solving with purpose.
        </p>
        <p className="mt-4">
          Outside of coding, I enjoy watching sports, playing video games, and reading books. Feel free to reach out if you want to collaborate or just talk tech!
        </p>
        </CardContent>
        </Card>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10">
        {projects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            key={index}
          >
             <Card>
              <CardContent className="p-4 bg-orange-400">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <p><a href={project.link}>Further Details</a></p>
              </CardContent>
            </Card> 
          </motion.div>
        ))}
      </section>

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
            className="bg-red-400 w-full p-2 border rounded text-black"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-red-400 w-full p-2 border rounded text-black"
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="bg-red-400 w-full p-2 border rounded text-black"
          ></motion.textarea>
          <input type="hidden" name="_captcha" value="true" />
          <Button type="submit">Send Message</Button>
        </form>
        {status === "success" && <p className="text-green-500 mt-2">Thanks! Your message has been sent.</p>}
        {status === "error" && <p className="text-red-500 mt-2">Oops! Something went wrong. Please try again.</p>}
      </motion.section>

      <footer className="text-center py-6 text-sm opacity-60">
        &copy; 2025 Jeff Xie. All rights reserved.
      </footer>
    </motion.div>
  );
}
