import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/AboutMe";
import Landingpage from "./components/LandingPage";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="App space-y-20">
      <NavBar />
      <Landingpage />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
