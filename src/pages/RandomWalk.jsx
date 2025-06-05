import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function RandomWalk() {
  const [dark, setDark] = useState(false);

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
        <div className="flex justify-center gap-4">
          <a href="https://github.com/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/lumosityfan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        <div className="flex justify-center gap-2">
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

        <Card><CardContent className="bg-red-400">
          <h3 className="text-4xl font-bold mb-4 text-center">Random Walk Simulation</h3>
          <p>I created a random walk simulator that lets you create a plot of a random walk cycle through 1000 steps using the "Generate values" button. It uses Dash and Plotly to generate the graph and Python to generate the points for the path.</p><br></br>
        </CardContent></Card>
        <Card><CardContent className="bg-green-400">
          <p>The link to the simulation is located below.</p>
          <Button><a href="https://github.com/lumosityfan/random_walk_simulation">Random Walk Simulation</a></Button><br></br>
        </CardContent></Card>
        <br></br>
        <img src={require("../images/random_walk_sample.png")} alt="Random Walk Simulation example" width="1375" height="700"></img>
        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Jeff Xie. All rights reserved.
        </footer>
      </motion.section>
    </motion.div>
  )
}