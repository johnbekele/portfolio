import React from "react";
import "./AboutMe.css";
import photo from "../assets/me.png";

function About() {
  return (
    <div id="aboutMe" className="sectionContainer about-section">
      <h2 className="sectionTitle" data-number="01.">
        About Me
      </h2>

      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm <span className="highlight">Yohans (John) Bekele</span>, a DevOps Engineer and LLM Developer passionate about building scalable infrastructure and intelligent systems.
          </p>

          <p className="about-body">
            I specialize in <strong>automating deployment pipelines</strong>, designing <strong>cloud-native architectures</strong>, and integrating <strong>large language models</strong> into production applications. My expertise spans CI/CD automation, containerization (Docker/Kubernetes), AWS infrastructure, and developing AI-powered solutions with OpenAI/Gemini.
          </p>

          <p className="about-body">
            With 5+ years of experience across <strong>system automation</strong>, <strong>data engineering</strong>, and <strong>security</strong>, I bring a holistic approach to modern software delivery. I'm constantly exploring new ways to optimize workflows, reduce deployment friction, and leverage AI to solve complex problems.
          </p>

          <div className="about-quick-facts">
            <div className="fact-item">
              <svg className="fact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <h4>Cloud-Native Expert</h4>
                <p>AWS, Docker, Kubernetes, Terraform</p>
              </div>
            </div>

            <div className="fact-item">
              <svg className="fact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" stroke="var(--accent-lime)" strokeWidth="2"/>
                <path d="M12 2V4M12 20V22M4 12H2M6.31 6.31L4.9 4.9M17.69 6.31L19.1 4.9M6.31 17.69L4.9 19.1M17.69 17.69L19.1 19.1M22 12H20" stroke="var(--accent-lime)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4>LLM Integration</h4>
                <p>OpenAI, Gemini, LangChain, RAG</p>
              </div>
            </div>

            <div className="fact-item">
              <svg className="fact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8A2 2 0 0019 6H5A2 2 0 003 8V16A2 2 0 005 18H19A2 2 0 0021 16Z" stroke="var(--accent-cyan)" strokeWidth="2"/>
                <path d="M8 12H16M12 8V16" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div>
                <h4>CI/CD Automation</h4>
                <p>GitHub Actions, Jenkins, GitLab CI</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <a href="#contact Me">
              <button className="btn-secondary">
                <span>Get in Touch</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </a>
            <a href="/src/assets/resume/yohans(John)_bekele_Resume.pdf" download>
              <button className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 3V13M10 13L6 9M10 13L14 9M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Download CV</span>
              </button>
            </a>
          </div>
        </div>

        <div className="about-visual">
          <div className="photo-container">
            <div className="photo-frame">
              <img src={photo} alt="Yohans Bekele" className="about-photo" />
              <div className="photo-overlay"></div>
            </div>
            <div className="photo-border"></div>
          </div>

          {/* Floating Icons */}
          <div className="floating-icons">
            <div className="float-icon icon-1" title="AWS">☁️</div>
            <div className="float-icon icon-2" title="Docker">🐳</div>
            <div className="float-icon icon-3" title="AI">🤖</div>
            <div className="float-icon icon-4" title="Security">🔒</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
