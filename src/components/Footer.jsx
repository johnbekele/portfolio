import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const contacts = [
    { icon: faGithub, link: "https://github.com/yohansbekele12" },
    { icon: faInstagram, link: "https://www.instagram.com/john_yebk/" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/yohans-b-a1a975205/",
    },
  
  ];

  return (
    <div>
      <div className="footerContainer">
        <div className="contactList space-y-10">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noreferrer"
              className="iconLink"
            >
              {/* Correct usage of FontAwesomeIcon */}
              <FontAwesomeIcon icon={contact.icon} size="2x" />
            </a>
          ))}
          <div className="verticalLine"></div>
        </div>
        <div className="footerRemark">
          <p>Built by Yohans Bekele</p>
          <p>{new Date().toDateString()}</p>
        </div>
        <div className="email">
          <a href="mailto:1babidagi@gmail.com">
            <p>yohansdemisie@gmail.com</p>
          </a>
          <div className="verticalLine moveRight"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
