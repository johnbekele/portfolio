import React from "react";
import "./Footer.css";
function Footer() {
  let contacts = [
    {
      icon: "fa fa-github",
      link: "https://github.com/dagmawibabi/",
    },
    {
      icon: "fa fa-instagram",
      link: "https://www.instagram.com/dagmawibabi/",
    },
    {
      icon: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/dagmawibabi/",
    },
    {
      icon: "fa fa-twitter",
      link: "https://twitter.com/DagmawiBabi",
    },
    {
      icon: "fa fa-telegram",
      link: "https://t.me/Dagmawi_Babi/",
    },
  ];

  return (
    <div>
      <div className="footerContainer">
        <div className="contactList">
          {contacts.map((contact, index) => {
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
              >
                <i className={contact.icon} style={{ fontSize: "26px" }}></i>
              </a>
            );
          })}
          <div className="verticalLine"></div>
        </div>
        <div className="footerRemark">
          <p> Built Yohans Bekele </p>
          <p> {Date().substring(0, 16)} </p>
        </div>
        <div className="email">
          <a href="mailto:1babidagi@gmail.com">
            <p> 1babidagi@gmail.com </p>
          </a>
          <div className="verticalLine moveRight"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
