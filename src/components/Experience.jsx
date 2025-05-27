import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  let tabs = [
    {
      tab: "Thomson Reuters",
      role: "Product Application support Specialist",
      tabTitle: "Hybrid Work",
      duration: "August 2024 - Present",
      details:
        "Providing application support and expertise for product solutions.",
      list: [
        "Utilized Microsoft SQL Server and XML for data management.",
        "Collaborated on hybrid work projects across Poland.",
        "Developed and optimized application processes for clients.",
        "Implemented solutions to enhance product functionality and user experience.",
        "manage client Citrix environments, ensuring seamless application performance and user satisfaction.",
        "investigte and resolve complex Microsoft SQL Server issues, demonstrating strong problem-solving skills and technical expertise.",
      ],
    },
    {
      tab: "State Street",
      role: "Financial Analyst",
      tabTitle: "Data Analysis",
      duration: "March 2023 - July 2024",
      details:
        "Executed daily financial reconciliations with meticulous accuracy, indicative of strong problem-solving skills, a vital asset for software support roles.",
      list: [
        "Developed advanced Excel macros to enhance financial reporting efficiency,showcasing an ability to optimize and support complex software systems.",
        "Championed new regulatory compliance initiatives, ensuring adaptability and a keen understanding of legal and compliance software functionalities.",
        "Collaborated with international teams on financial forecasting.",
      ],
    },
    {
      tab: "Infosys",
      role: "Senior Process Executive",
      tabTitle: "Remote Operations",
      duration: "March 2022 - April 2023",
      details:
        "Managed processes and developed Salesforce-based solutions remotely.",
      list: [
        "Spearheaded the development and implementation of a comprehensive business process management system, focusing on optimizing IT processes and enhancing system efficiencies across the organization.",
        "Led a transformative initiative to redesign the customer onboarding process, integrating advanced IT solutions to significantly improve user experience and operational effectiveness.",
        "Facilitated effective cross-departmental collaboration to integrate customer feedback into IT process improvements, directly contributing to a 15% increase in customer satisfaction scores through enhanced IT service management strategies.",
      ],
    },
    {
      tab: "Cisco",
      role: "Data Analyst",
      tabTitle: "Remote Analytics",
      duration: "August 2022 - February 2023",
      details:
        "Supported data-driven decision-making through technical leadership.",
      list: [
        "Applied data science skills to large datasets for actionable insights.",
        "Demonstrated technical project leadership in analytics.",
        "Collaborated with cross-functional teams to meet business goals.",
      ],
    },
  ];

  const [curTabContent, setCurTabContent] = useState(0);

  function tabSwitcher(e) {
    setCurTabContent(parseInt(e.target.id));
  }
  return (
    <div>
      <div id="experience">
        <div className="sectionContainer experienceContainer">
          <div className="flexSpaceBetween">
            <h2 className="sectionTitle">
              {" "}
              <span className="linkText"> 02. </span> Experience{" "}
            </h2>
            <div className="horizontalLine"></div>
          </div>
          <div className="tabsContainer">
            <div className="tabs">
              <div className="tabList">
                {tabs.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className={
                        curTabContent === index ? "selectedTab" : "eachTab"
                      }
                      id={index}
                      onClick={(e) => tabSwitcher(e)}
                    >
                      {" "}
                      {item["tab"]}{" "}
                    </p>
                  );
                })}
              </div>
              <div className="tabExpanded">
                {/* Role */}
                <h2 className="tabTitle" style={{ fontSize: "18px" }}>
                  {" "}
                  {tabs[curTabContent]["role"]}{" "}
                </h2>

                {/* Title */}
                <h2 className="linkText tabTitle">
                  {" "}
                  {"" + tabs[curTabContent]["tabTitle"]}{" "}
                </h2>

                {/* Duration */}
                <p className="tabDuration">
                  {" "}
                  {tabs[curTabContent]["duration"]}{" "}
                </p>

                {/* Brief Explanation */}
                <p className="tabDescription">
                  {" "}
                  {tabs[curTabContent]["details"]}{" "}
                </p>

                {/* What I did and learnt */}
                <div className="tabExpandedList">
                  <ul>
                    {tabs[curTabContent]["list"].map((item, index) => {
                      return (
                        <li className="experiencesList" key={index}>
                          {" "}
                          {item}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
