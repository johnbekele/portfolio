import React, { useEffect, useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = () => {
    window.open("/src/assets/resume/yohans(John)_bekele_Resume.pdf", "_blank");
  };

  return (
    <div className="landing-hero">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <div className="hero-content" id="main-content">
        <div className={`hero-text ${isVisible ? "fade-in" : ""}`}>
          <div className="hero-greeting">
            <span className="greeting-icon">👋</span>
            <span className="greeting-text">Hi, I'm</span>
          </div>
          
          <h1 className="hero-name">
            <span className="name-highlight">Yohans (John) Bekele</span>
          </h1>
          
          <h2 className="hero-title">
            <span className="title-role">DevOps Engineer</span>
            <span className="title-separator">+</span>
            <span className="title-role">LLM Developer</span>
          </h2>
          
          <p className="hero-tagline">
            Building reliable CI/CD pipelines, cloud infrastructure, and intelligent AI-powered applications. 
            I bridge the gap between development and operations while leveraging cutting-edge LLM technologies.
          </p>
          
          <div className="hero-stack">
            <span className="stack-label">Core Stack:</span>
            <div className="stack-chips">
              <span className="stack-chip">AWS</span>
              <span className="stack-chip">Docker</span>
              <span className="stack-chip">Kubernetes</span>
              <span className="stack-chip">Terraform</span>
              <span className="stack-chip">GitHub Actions</span>
              <span className="stack-chip">LangChain</span>
              <span className="stack-chip">OpenAI/Gemini</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <button className="btn-primary" onClick={scrollToProjects}>
              <span>View Projects</span>
              <svg className="btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={handleResumeClick}>
              <svg className="btn-icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 3V13M10 13L6 9M10 13L14 9M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Resume</span>
            </button>
          </div>
          
          <div className="hero-metrics">
            <div className="metric-item">
              <span className="metric-value">5+</span>
              <span className="metric-label">Years Experience</span>
            </div>
            <div className="metric-separator">|</div>
            <div className="metric-item">
              <span className="metric-value">10+</span>
              <span className="metric-label">Projects Deployed</span>
            </div>
            <div className="metric-separator">|</div>
            <div className="metric-item">
              <span className="metric-value">99.9%</span>
              <span className="metric-label">Uptime Achieved</span>
            </div>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? "fade-in-delayed" : ""}`}>
          <div className="visual-container">
            {/* AI Robot Icon */}
            <div className="ai-robot">
              <svg className="robot-svg" viewBox="0 0 200 200" fill="none">
                {/* Robot Head */}
                <rect x="60" y="50" width="80" height="70" rx="8" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="2"/>
                
                {/* Antenna */}
                <line x1="100" y1="50" x2="100" y2="30" stroke="var(--accent-cyan)" strokeWidth="2"/>
                <circle cx="100" cy="30" r="5" fill="var(--accent-lime)" className="pulse-dot"/>
                
                {/* Eyes */}
                <circle cx="80" cy="75" r="8" fill="var(--accent-cyan)" className="robot-eye-left"/>
                <circle cx="120" cy="75" r="8" fill="var(--accent-cyan)" className="robot-eye-right"/>
                
                {/* Mouth/Display */}
                <rect x="75" y="95" width="50" height="15" rx="4" fill="var(--accent-lime-dim)" stroke="var(--accent-lime)" strokeWidth="1"/>
                <path d="M 80 102 L 90 105 L 100 102 L 110 105 L 120 102" stroke="var(--accent-lime)" strokeWidth="2" fill="none" className="robot-wave"/>
                
                {/* Body */}
                <rect x="70" y="130" width="60" height="50" rx="6" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="2"/>
                
                {/* Chest Panel */}
                <rect x="85" y="145" width="30" height="20" rx="3" fill="var(--accent-cyan-dim)" stroke="var(--accent-cyan)" strokeWidth="1"/>
                <circle cx="95" cy="155" r="2" fill="var(--accent-lime)" className="pulse-dot"/>
                <circle cx="105" cy="155" r="2" fill="var(--accent-lime)" className="pulse-dot" style={{animationDelay: "0.5s"}}/>
              </svg>
            </div>
            
            {/* DevOps Infinity Loop with Gears */}
            <div className="devops-infinity">
              <svg className="infinity-svg" viewBox="0 0 300 150" fill="none">
                {/* Infinity Loop */}
                <path 
                  d="M 50 75 Q 75 25, 125 50 T 200 75 Q 225 100, 250 75 T 175 50 Q 125 25, 100 75 T 50 75" 
                  stroke="url(#gradient)" 
                  strokeWidth="3" 
                  fill="none"
                  className="infinity-path"
                />
                
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="50%" stopColor="var(--accent-lime)" />
                    <stop offset="100%" stopColor="var(--accent-cyan)" />
                  </linearGradient>
                </defs>
                
                {/* Dev Gear (Left) */}
                <g className="gear gear-left">
                  <circle cx="100" cy="75" r="20" fill="var(--bg-card)" stroke="var(--accent-cyan)" strokeWidth="2"/>
                  <text x="100" y="82" textAnchor="middle" fill="var(--accent-cyan)" fontSize="14" fontFamily="var(--font-code)">DEV</text>
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x1 = 100 + 20 * Math.cos(angle);
                    const y1 = 75 + 20 * Math.sin(angle);
                    const x2 = 100 + 25 * Math.cos(angle);
                    const y2 = 75 + 25 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent-cyan)" strokeWidth="3"/>;
                  })}
                </g>
                
                {/* Ops Gear (Right) */}
                <g className="gear gear-right">
                  <circle cx="200" cy="75" r="20" fill="var(--bg-card)" stroke="var(--accent-lime)" strokeWidth="2"/>
                  <text x="200" y="82" textAnchor="middle" fill="var(--accent-lime)" fontSize="14" fontFamily="var(--font-code)">OPS</text>
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x1 = 200 + 20 * Math.cos(angle);
                    const y1 = 75 + 20 * Math.sin(angle);
                    const x2 = 200 + 25 * Math.cos(angle);
                    const y2 = 75 + 25 * Math.sin(angle);
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--accent-lime)" strokeWidth="3"/>;
                  })}
                </g>
              </svg>
            </div>
            
            {/* Floating Code Elements */}
            <div className="floating-elements">
              <div className="code-snippet snippet-1">{"{ CI/CD }"}</div>
              <div className="code-snippet snippet-2">{"< Docker />"}</div>
              <div className="code-snippet snippet-3">{"[ LLM ]"}</div>
              <div className="code-snippet snippet-4">{"~ AWS ~"}</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>
    </div>
  );
}

export default LandingPage;
