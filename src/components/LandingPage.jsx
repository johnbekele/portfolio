import React from "react";
import {useNavigate} from "react-router-dom";
import "./LandingPage.css";
import { Button } from "../components/ui/moving-border";

function LandingPage() {
 
  const handleClick = () => {
    window.open("https://github.com/johnbekele/Book-and-Memories.git");
  };

  return (
    <div className="LandingPage  flex justify-center   font-main w-full h-lvh">
      <div className="container flex justify-center space-y-7 flex-col ">
        <span className="font-special font-main">Hi , My name is </span>
        <p className="text-5xl font-bold font-main text-slate-100">
          Yohans(JOHN)
        </p>
        <p className="text-5xl text-slate-100 font-bold font-main">
          I am a Creative Developer .
        </p>
        <p className="font-main text-gray-400">
        with a strong passion for designing interactive and responsive applications aimed at automating repetitive tasks. Currently, I am engaged in cloud platform projects to further enhance my technical skills. Additionally, I am developing web applications that address compelling social issues, striving to make a positive impact through innovative solutions.
        </p>
        <Button className="outlinedBtn ca" onClick={handleClick}> <p className="text-white">Check out my latest Project</p></Button>
      </div>
    </div>
  );
}

export default LandingPage;
