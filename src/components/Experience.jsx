import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  let tabs = [
    {
      tab: "Thomson Reuters",
      role: "Product Application Specialist",
      tabTitle: "Hybrid Work",
      duration: "July 2024 - Present",
      details:
        "Providing application support and expertise for product solutions.",
      list: [
        "Utilized Microsoft SQL Server and XML for data management.",
        "Collaborated on hybrid work projects across Poland.",
        "Developed and optimized application processes for clients.",
      ],
    },
    {
      tab: "State Street",
      role: "Financial Analyst",
      tabTitle: "Data Analysis",
      duration: "April 2023 - December 2024",
      details:
        "Conducted financial and statistical data analysis in a hybrid environment.",
      list: [
        "Leveraged data science skills to analyze financial trends.",
        "Performed statistical data analysis to support decision-making.",
        "Collaborated with international teams on financial forecasting.",
      ],
    },
    {
      tab: "Infosys",
      role: "Senior Process Executive",
      tabTitle: "Remote Operations",
      duration: "April 2022 - May 2023",
      details:
        "Managed processes and developed Salesforce-based solutions remotely.",
      list: [
        "Designed and implemented JavaScript solutions for process automation.",
        "Enhanced Salesforce development practices.",
        "Streamlined remote process execution workflows.",
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
