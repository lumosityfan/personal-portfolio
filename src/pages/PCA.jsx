import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function PCA() {
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
          <h3 className="text-4xl font-bold mb-4 text-center">PCA Implementation</h3>
          <p>The following GitHub link goes to a project where I implemented Principal Component Analysis (PCA) to reduce dimensions of a dataset and assist in face detection.</p><br></br>
        </CardContent></Card><br></br>
        <Button><a href="https://github.com/lumosityfan/pca_implementation">PCA Analysis</a></Button>
        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Jeff Xie. All rights reserved.
        </footer>
      </motion.section>
    </motion.div>
  )
}