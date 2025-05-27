import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar px-10 py-4 flex justify-end">
        <div>
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
        <ul className="navBarItem flex space-x-14">
          <li>
            <a href="#aboutMe">
              <span>01.</span> About
            </a>{" "}
          </li>
          <li>
            <a href="#experience">
              <span>02.</span> Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>03.</span> Project
            </a>
          </li>
          <li>
            <a href="#contactMe">
              <span>04.</span> Contact
            </a>
          </li>
          <li>
            <a href="#resume" rel="noreferrer" target="_blank">
              <button className="btn btn-outline btn-success">Resume</button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
