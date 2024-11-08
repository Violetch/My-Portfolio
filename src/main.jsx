import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPages from "./pages/landingPages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
      </Routes>
    </Router>
  </StrictMode>
);
