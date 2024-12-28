import React from "react";
import "./AboutMe.css";
import photo from "../assets/me.png";

function About() {
  return (
    <div id="aboutMe" className="sectionContainer  aboutMeContainer">
      <div className="aboutMeContent">
        <div className="flexSpaceBetween">
          <h2 id="aboutMe" className="sectionTitle">
            {" "}
            <span className="linkText"> 01. </span> About Me{" "}
          </h2>
          <div className="horizontalLine"></div>
        </div>
        <div className="someSpace">
          <p>
            Hello, I'm Yohans Bekele (John) I’m a creative and passionate tech
            enthusiast who loves building innovative solutions. Currently, I’m
            working with the PERN stack (PostgreSQL, Express.js, React, Node.js)
            and thoroughly enjoying the process. I’m also excited to dive into
            Electron.js to develop desktop applications focused on delivering
            impactful solutions. Collaboration and creativity fuel my journey,
            and I’m always eager to create, learn, and work on meaningful
            projects. Let’s connect and bring ideas to life!{" "}
          </p>

          <br></br>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div
            className="flexSpaceBetween list"
            style={{ width: "440px", marginLeft: "15px" }}
          >
            <ul>
              <li> React </li>
              <li> React Native </li>
              <li> Bootstarp 5 </li>
              <li> Tailwind </li>
              <li> Figma </li>
              <li> XML </li>
            </ul>
            <ul>
              <li> MongoDB </li>
              <li> NodeJS </li>
              <li> Express.js </li>
              <li> PostgreSQL </li>
            </ul>
            <ul>
              <li>Dockers</li>
              <li> git </li>
              <li> AWS </li>
            </ul>
            <ul>
              <li> Sales Force </li>
              <li> ERP </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="myPhotoReveal">
        <div className="highlightBorder someSpace"> </div>
        <img alt="myPhoto" className="myPhoto" src={photo}></img>
      </div>
    </div>
  );
}

export default About;
