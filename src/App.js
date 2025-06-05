import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Baseball from "./pages/Baseball";
import RandomWalk from "./pages/RandomWalk.jsx"
import Tableau from "./pages/Tableau.jsx"
import PCA from "./pages/PCA.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />>
        <Route path="/baseball" element={<Baseball />} />
        <Route path="/tableau" element={<Tableau />} />
        <Route path="/pca" element={<PCA />} />
        <Route path="/randomwalk" element={<RandomWalk />} />
      </Routes>
    </Router>
  );
}

export default App;
