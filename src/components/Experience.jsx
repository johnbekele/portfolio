import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Thomson Reuters",
      role: "Product Application Support Specialist",
      type: "DevOps & Application Support",
      duration: "August 2024 – Present",
      location: "Hybrid Work",
      description: "Orchestrate end-to-end environment setup and provide expert DevOps support for enterprise deployments.",
      achievements: [
        "Set up Microsoft SQL Server clusters with 99.9% uptime",
        "Automated infrastructure provisioning reducing setup time by 60%",
        "Optimized database performance queries improving response time by 40%",
        "Implemented monitoring solutions detecting incidents 50% faster"
      ],
      technologies: ["SQL Server", "Windows Server", "Network Provisioning", "Infrastructure Management", "Monitoring"]
    },
    {
      company: "State Street",
      role: "Financial Analyst",
      type: "Automation & Data Engineering",
      duration: "March 2023 – July 2024",
      location: "Hybrid",
      description: "Specialized in process automation and technical reporting to support financial operations.",
      achievements: [
        "Automated monthly reports reducing processing time from 8hrs to 30min",
        "Built VBA macros automating 70% of repetitive Excel workflows",
        "Created technical dashboards used by 100+ team members daily",
        "Reduced manual data errors by 85% through automation scripts"
      ],
      technologies: ["Excel VBA", "VS Code", "Python", "Automation", "Data Visualization"]
    },
    {
      company: "Cisco",
      role: "Data Analyst",
      type: "Data Pipeline & ETL Engineering",
      duration: "August 2022 – February 2023",
      location: "Remote",
      description: "Delivered automation and data pipeline engineering for large-scale MSSP migration projects.",
      achievements: [
        "Built Apache NiFi pipelines processing 1M+ records daily",
        "Created Python automation reducing manual data cleansing by 70%",
        "Developed SQL ETL scripts migrating 5TB+ data with 99.9% accuracy",
        "Reduced data validation time by 30% through Bash automation"
      ],
      technologies: ["Apache NiFi", "Python", "SQL", "Bash", "Oracle", "MySQL", "ETL"]
    },
    {
      company: "Infosys",
      role: "Senior Process Executive",
      type: "Application Performance & Monitoring",
      duration: "March 2022 – April 2023",
      location: "Remote",
      description: "Monitored application performance and automated operations for health suite platforms.",
      achievements: [
        "Achieved 99.8% application uptime through proactive monitoring",
        "Automated daily monitoring tasks saving 15hrs/week team time",
        "Implemented New Relic dashboards reducing MTTR by 45%",
        "Created automated alerting reducing incident response time by 50%"
      ],
      technologies: ["New Relic", "ServiceNow", "JIRA", "JavaScript", "Python", "SQL"]
    },
    {
      company: "Commercial Bank of Ethiopia",
      role: "Data Analytics Engineer",
      type: "Analytics & Compliance",
      duration: "Feb 2017 – Jan 2019",
      location: "On-site",
      description: "Led KYC data analysis and built compliance reporting systems for risk monitoring.",
      achievements: [
        "Built Tableau dashboards monitoring 500K+ customer accounts",
        "Automated KYC validation reducing review time by 60%",
        "Created SQL reports supporting compliance audits with 100% accuracy",
        "Developed analytics reducing flagged account review time by 40%"
      ],
      technologies: ["SQL", "Tableau", "Power BI", "VS Code", "Data Analytics"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="experience" className="sectionContainer experience-section">
      <h2 className="sectionTitle" data-number="04.">
        Experience
      </h2>

      <p className="section-description">
        5+ years building reliable systems, automating workflows, and delivering measurable impact across DevOps, data engineering, and cloud operations.
      </p>

      <div className="experience-container">
        {/* Company List */}
        <div className="company-list">
          {experiences.map((exp, index) => (
            <button
              key={index}
              className={`company-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="company-name">{exp.company}</span>
              <svg 
                className="company-arrow" 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none"
              >
                <path 
                  d="M7.5 5L12.5 10L7.5 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Experience Details */}
        <div className="experience-details">
          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{experiences[activeIndex].role}</h3>
                <p className="experience-company">
                  <span className="company-name-detail">{experiences[activeIndex].company}</span>
                  <span className="separator">|</span>
                  <span className="experience-type">{experiences[activeIndex].type}</span>
                </p>
              </div>
              <div className="experience-meta">
                <span className="experience-duration">{experiences[activeIndex].duration}</span>
                <span className="experience-location">{experiences[activeIndex].location}</span>
              </div>
            </div>

            <p className="experience-description">{experiences[activeIndex].description}</p>

            <div className="achievements-section">
              <h4 className="achievements-title">Key Achievements:</h4>
              <ul className="achievements-list">
                {experiences[activeIndex].achievements.map((achievement, i) => (
                  <li key={i} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-tech">
              <span className="tech-label">Technologies:</span>
              <div className="tech-tags">
                {experiences[activeIndex].technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Summary */}
      <div className="timeline-summary">
        <div className="timeline-stat">
          <span className="stat-value">5+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="timeline-stat">
          <span className="stat-value">5</span>
          <span className="stat-label">Companies</span>
        </div>
        <div className="timeline-stat">
          <span className="stat-value">60%</span>
          <span className="stat-label">Avg. Time Saved</span>
        </div>
        <div className="timeline-stat">
          <span className="stat-value">99.8%</span>
          <span className="stat-label">Uptime Achieved</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
