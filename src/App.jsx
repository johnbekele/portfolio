import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
