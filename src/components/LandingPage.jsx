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
          JOHN BEKELE
        </p>
        <p className="text-5xl text-slate-100 font-bold font-main">
          I am a Creative Developer .
        </p>
        <p className="font-main text-gray-400">
        With a keen interest in system design, process automation, and data analysis, 
        my experience in web and mobile application development, data analysis, 
        and system administration has equipped me with strong technical skills and 
        a problem-solving mindset. I am passionate about exploring new technologies 
        and continuously expanding my knowledge in the field. Committed to innovation 
        and learning, I am eager to take on new challenges and contribute effectively
         in dynamic environments. </p>
        <Button className="outlinedBtn ca" onClick={handleClick}> <p className="text-white">Check out my latest Project</p></Button>
      </div>
    </div>
  );
}

export default LandingPage;
