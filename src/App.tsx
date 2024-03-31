import React, { Children, useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './styles/App.css';

const App: React.FC = () => {
    return (
        <Router>
        <AppContent />
        </Router>
    );
};

const AppContent: React.FC = () => {
    const location = useLocation();
    const [showGradient, setShowGradient] = useState(false);
    const [gradientClass, setGradientClass] = useState("gradient-text-home");

    useEffect(() => {
        // Update gradient colors based on route
        // const root = document.documentElement;

        switch (location.pathname) {
            case "/contact":
                setGradientClass("gradient-text-contact");
                // root.style.setProperty("--gradient-start", "red");
                // root.style.setProperty("--gradient-end", "orange");
                break;
            case "/projects":
                setGradientClass("gradient-text-projects");
                // root.style.setProperty("--gradient-start", "green");
                // root.style.setProperty("--gradient-end", "blue");
                break;
            default:
                setGradientClass("gradient-text-home");
                // root.style.setProperty("--gradient-start", "blue");
                // root.style.setProperty("--gradient-end", "purple");
                break;
        }

        const timeout = setTimeout(() => {
            setShowGradient(true);
        }, 100);

        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <div className={`App ${showGradient ? "show-gradient" : ""}`}>
            <Layout gradientClass={gradientClass}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />                
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
