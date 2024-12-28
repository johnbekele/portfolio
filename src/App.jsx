import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/AboutMe";
import Landingpage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landingpage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
