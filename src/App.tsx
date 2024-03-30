import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
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
        gradientStart = "red";
        gradientEnd = "orange";
        break;
      case "/projects":
        gradientStart = "green";
        gradientEnd = "blue";
        break;
      default:
        gradientStart = "blue";
        gradientEnd = "purple";
    }
  
    root.style.setProperty("--gradient-start", gradientStart);
    root.style.setProperty("--gradient-end", gradientEnd);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
};

export default App;
