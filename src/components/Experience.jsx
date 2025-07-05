import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
 
    let tabs = [
      {
        tab: "Thomson Reuters",
        role: "Product Application Support Specialist",
        tabTitle: "Hybrid Work",
        duration: "August 2024 – Present",
        details:
          "Orchestrate end-to-end environment setup and provide expert product application support for client deployments and legacy software solutions.",
        list: [
          "Set up Microsoft SQL Server, registry paths, and network/server provisioning to ensure smooth system integration.",
          "Verify and optimize infrastructure components (databases, VMs, connectivity) for high performance and availability.",
          "Investigate and resolve data discrepancies, ensuring data integrity for critical business workflows.",
          "Collaborate with platform and dev teams to fix bugs, implement features, and deliver custom solutions.",
          "Analyze and resolve chronic or major incidents in coordination with cross-functional teams.",
        ],
      },
      {
        tab: "State Street",
        role: "Financial Analyst (Technology & Automation Focus)",
        tabTitle: "Data Analysis & Automation",
        duration: "March 2023 – July 2024",
        details:
          "Specialized in trade analysis, automation, and technical reporting to support financial operations.",
        list: [
          "Performed quantitative trade analysis using advanced Excel, VBA, and VS Code for automation.",
          "Automated monthly reporting workflows to increase accuracy and reduce turnaround time.",
          "Built technical dashboards and data visualizations for actionable insights.",
          "Tracked and analyzed Trade and KYC incident reports on demand.",
        ],
      },
      {
        tab: "Cisco",
        role: "Data Analyst (MSSP Migration Project)",
        tabTitle: "Remote Data Migration",
        duration: "August 2022 – February 2023",
        details:
          "Delivered technical support and automation for large-scale data migration projects.",
        list: [
          "Authored technical guides and knowledge base articles on best practices and troubleshooting.",
          "Created and maintained Python scripts to automate repetitive tasks and improve data quality.",
          "Developed SQL scripts to handle ETL tasks from multiple sources (Oracle, MySQL, CSV).",
          "Built Bash scripts for data validation, cleansing, and transformation, reducing manual effort by 30%.",
          "Implemented Apache NiFi data pipelines for efficient data processing and transformation.",
        ],
      },
      {
        tab: "Infosys",
        role: "Senior Process Executive (Application Performance)",
        tabTitle: "Remote Operations & Monitoring",
        duration: "March 2022 – April 2023",
        details:
          "Monitored application performance, handled incident management, and automated operations to optimize reliability.",
        list: [
          "Analyzed performance on Health Suite Digital Platform using New Relic, ensuring high availability.",
          "Used ServiceNow for incident, problem, and change management, and JIRA for issue tracking.",
          "Automated daily monitoring, reporting, and maintenance tasks with JavaScript, Python, and SQL.",
          "Performed root cause analysis and collaborated with teams to resolve incidents and prevent recurrences.",
          "Created detailed performance reports and translated insights into actionable recommendations.",
        ],
      },
      {
        tab: "Commercial Bank of Ethiopia",
        role: "Data Analytics Engineer",
        tabTitle: "On-site Analytics",
        duration: "Feb 2017 – Jan 2019",
        details:
          "Led KYC data analysis and compliance reporting for risk and AML monitoring.",
        list: [
          "Analyzed customer data for KYC compliance using SQL and advanced analytics tools.",
          "Built interactive dashboards (Tableau/Power BI) for continuous monitoring.",
          "Automated routine KYC data validation and reporting using SQL and VS Code scripts.",
          "Worked with compliance teams to review flagged accounts and document AML findings.",
          "Maintained process documentation to support audits and regulatory reviews.",
        ],
      },
    ];

  

  const [curTabContent, setCurTabContent] = useState(0);

  function tabSwitcher(e) {
    setCurTabContent(parseInt(e.target.id));
  }
  return (
    <div>
      <div id="experience my-10">
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
