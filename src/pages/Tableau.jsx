import { motion } from "framer-motion";
import { useState } from "react";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Tableau() {
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
          <h3 className="text-4xl font-bold mb-4 text-center">Tableau Visualizations</h3>
          <p>I made a number of Tableau Visualizations as part of my Software Engineering Visualization course in the Summer of 2024. You can visit the links to the various visualizations below.</p>
        </CardContent></Card>
        <Card><CardContent className="bg-green-400">
          <table>
            <tr>
              <td><Button><a href="https://public.tableau.com/views/RetentionDataVisualization/VariousFactorsInfluencingRetention?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Retention Data Visualization</a></Button></td>
              <td><Button><a href="https://public.tableau.com/views/AdultDataVisualization/VariousFactorsvs_Salary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Adult Data Visualization</a></Button></td>
              <td><Button><a href="https://public.tableau.com/views/DiagnosisDataVisualization/ComparingFactorswithInfluenceonNephritis?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Diagnosis Data Visualization</a></Button></td>
              <td><Button><a href="https://public.tableau.com/views/DataVisualizationProject_17196830239700/ComparingChineseNewYearsandThanksgivingExpendituresandTrips?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Comparing Chinese New Year's and Thanksgiving</a></Button></td>
              <td><Button><a href="https://public.tableau.com/views/DataVisualizationExercise_17192435954180/AWorldas100People?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">A World As 100 People</a></Button></td>
              <td><Button><a href="https://public.tableau.com/views/XieJeff_Assignment1/AppleEmploymentHistory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link">Apple Employment History</a></Button></td>
              <td><Button><a href="https://public.tableau.com/shared/B7F9S9X7P?:display_count=n&:origin=viz_share_link">Sales By State</a></Button></td>
            </tr>
          </table>
        </CardContent></Card>

        <footer className="text-center py-6 text-sm opacity-60">
          &copy; 2025 Jeff Xie. All rights reserved.
        </footer>
      </motion.section>
    </motion.div>
  )
}