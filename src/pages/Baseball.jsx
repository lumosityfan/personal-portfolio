import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { Card, CardContent } from "../components/ui/card"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Baseball() {
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
        <Card><CardContent className="bg-red-400">
          <h3 className="text-4xl font-bold text-center">Baseball Visualizations</h3>
        </CardContent></Card>
        <Card><CardContent className="bg-green-400">
          <h2 className="text-2xl font-semibold mb-4">Pitching Statistics Visualization</h2>
          <p>I created a pitching statistics visualization from Baseball-Reference's annual averages and focused on the rate stats of H/9, BB/9, SO/9, and HR/9. You can see the visualization below and interact with it.</p>
        </CardContent></Card>
        <br></br><iframe title="Pitching Statistics Over Time" aria-label="Interactive line chart" id="datawrapper-chart-DlmNc" src="https://datawrapper.dwcdn.net/DlmNc/3/" scrolling="no" frameborder="0" width="600" height="400" data-external="1"></iframe><br></br>

        <Card><CardContent className="bg-orange-400">
          <h2 className="text-2xl font-semibold mb-4">Batting Statistics Visualization</h2>
          <p>I made a similar visualization except in this case using batting statistics instead of pitching.</p>
        </CardContent></Card>
        <br></br><iframe title="Batting Statistics" aria-label="Interactive line chart" id="datawrapper-chart-xwqlj" src="https://datawrapper.dwcdn.net/xwqlj/1/" scrolling="no" frameborder="0" width="600" height="400" data-external="1"></iframe>
        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Jeff Xie. All rights reserved.
        </footer>
      </motion.section>
    </motion.div>
  )
}