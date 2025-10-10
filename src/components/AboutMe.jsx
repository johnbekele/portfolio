import React from "react";
import "./AboutMe.css";
import photo from "../assets/me.png";

function About() {
  return (
    <div
      id="aboutMe"
      className="sectionContainer  justify-center aboutMeContainer "
    >
      <div className="aboutMeContent">
        <div className="flexSpaceBetween">
          <h2 id="aboutMe" className="sectionTitle">
            {" "}
            <span className="linkText"> 01. </span> About Me{" "}
          </h2>
          <div className="horizontalLine"></div>
        </div>
        <div className="someSpace ">
          <p className="hover:text-amber-50 text-small">
          Hello, I'm Yohans (John) Bekele , a tech enthusiast specializing in the MERN stack (MongoDB, Express.js, React, Node.js) for web application development. I utilize AWS and Amazon RDS with PostgreSQL for robust backend services. My Linux expertise supports efficient server management.
   <br />
I work with network testing tools like Nmap, Bettercap, Wireshark, and Metasploit, developing scripts for security assessments. I have a strong understanding of vulnerabilities including man-in-the-middle attacks, SQL injection, cross-site scripting (XSS), and privilege escalation. Currently, I'm expanding my skills in cloud architecture.
          </p>

          <br></br>
          <p>Here are a few technologies I've been working with recently:</p>
          <div
            className="flexSpaceBetween list"
            style={{ maxWidth: "540px", width: "100%", marginLeft: "10px" }}
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
              <li> Amazon RDS </li>
              <li> Linux </li>
              <li> Bash </li>
            </ul>
            <ul>
              <li> Sales Force </li>
              <li> ERP </li>
              <li> Nmap </li>
              <li>Service Now </li>
              

            </ul>
            <ul>
              
              <li> Nmap </li>
              <li> Burp Suite </li>
              <li> Metasploit </li>
              <li> Wireshark </li>
              <li> Bettercap </li>
              <li>Nessuss</li>
              <li>Snort</li>

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
