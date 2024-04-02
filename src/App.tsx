import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Coding from "./components/Coding";
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

const AppLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Update gradient colors based on route
    const root = document.documentElement;
    let gradientStart = "blue";
    let gradientEnd = "purple";
  
    switch (location.pathname) {
      case "/contact":
        gradientStart = "var(--gradient-start-contact)"
        gradientEnd = "var(--gradient-end-contact)"
        break;
      case "/coding":
        gradientStart = "var(--gradient-start-coding)"
        gradientEnd = "var(--gradient-end-coding)"
        break;
    default:
        gradientStart = "var(--gradient-start-home)"
        gradientEnd = "var(--gradient-end-home)"
    }
  
    root.style.setProperty("--gradient-start", gradientStart);
    root.style.setProperty("--gradient-end", gradientEnd);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coding" element={<Coding />} />
      </Routes>
    </Layout>
  );
};

export default App;
