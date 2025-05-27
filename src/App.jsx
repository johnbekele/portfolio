import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/AboutMe";
import Landingpage from "./components/LandingPage";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App space-y-20">
      <NavBar />
      <Landingpage />
      <About />
      <Experience />
      <Projects />
     <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
