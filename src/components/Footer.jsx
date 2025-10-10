import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/johnbekele',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yohans-bekele',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V8H14V10A5.48 5.48 0 0 1 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:yohans.Bekele@thomsonreuters.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-main'>
          <div className='footer-brand'>
            <h3 className='footer-name'>Yohans (John) Bekele</h3>
            <p className='footer-tagline'>DevOps Engineer + LLM Developer</p>
            <p className='footer-description'>
              Building reliable infrastructure and intelligent systems.
            </p>
          </div>

          <div className='footer-links-section'>
            <div className='footer-column'>
              <h4>Quick Links</h4>
              <ul>
                <li><a href='#aboutMe'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#experience'>Experience</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h4>Resources</h4>
              <ul>
                <li><a href='#contactMe'>Contact</a></li>
                <li><a href='/src/assets/resume/yohans(John)_bekele_Resume.pdf' download>Resume</a></li>
                <li><a href='https://github.com/johnbekele' target='_blank' rel='noreferrer'>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/yohans-bekele' target='_blank' rel='noreferrer'>LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-social'>
          <p className='social-title'>Connect with me</p>
          <div className='social-links'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='social-link'
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='footer-copyright'>
            © {currentYear} Yohans Bekele. Built with React + Vite.
          </p>
          <div className='footer-tech-badges'>
            <span className='tech-badge-small'>AWS</span>
            <span className='tech-badge-small'>Docker</span>
            <span className='tech-badge-small'>Kubernetes</span>
            <span className='tech-badge-small'>LangChain</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className='back-to-top'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label='Back to top'
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
