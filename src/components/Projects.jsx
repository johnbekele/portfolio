import React, { useState } from 'react';
import './Projects.css';
import BookMemo from '../assets/projects/BookMemo.png';
import GeezOS from '../assets/projects/GeezOS.png';
import WorkerDay from '../assets/projects/WorkerDay.png';
import LawConnect from '../assets/projects/LawConnect.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Book and Memories',
      subtitle: 'Book Sharing Social Media Platform',
      category: ['web', 'ai'],
      image: BookMemo,
      description: 'Full-stack social media app where users share book experiences and discover new reads. Integrated Gemini AI for personalized recommendations.',
      impact: [
        'Deployed on AWS EC2 with 99.5% uptime',
        'Automated deployment via Vercel CI/CD',
        'AI-powered book recommendations'
      ],
      techStack: ['React', 'NodeJS', 'Express', 'MongoDB', 'AWS EC2', 'Vercel', 'Gemini AI', 'Tailwind'],
      role: 'Full-Stack Developer & DevOps',
      year: '2024',
      links: {
        demo: 'https://book-and-memories.vercel.app/',
        repo: 'https://github.com/johnbekele/Book-and-Memories'
      }
    },
    {
      id: 2,
      title: 'Geez Network Scanner',
      subtitle: 'Security Assessment Tool',
      category: ['automation', 'devops'],
      image: GeezOS,
      description: 'Electron-based security scanning tool for macOS with automated vulnerability detection. Terminal-style output for penetration testing workflows.',
      impact: [
        'Automated network reconnaissance',
        'Cross-platform deployment',
        'Streamlined security workflows'
      ],
      techStack: ['Electron.js', 'NodeJS', 'Bash', 'Tailwind', 'CSS'],
      role: 'Security Automation Engineer',
      year: '2023',
      links: {
        repo: 'https://github.com/johnbekele/Geez-Offensive-Security-Scanner.git',
        demo: 'https://github.com/johnbekele/Geez-Offensive-Security-Scanner.git'
      }
    },
    {
      id: 3,
      title: 'LawConnect',
      subtitle: 'Legal Practice Management System',
      category: ['web', 'ai'],
      image: LawConnect,
      description: 'Full-stack platform for law firms to manage client communications, scheduling, case tracking, and fee management with AI-powered legal document analysis.',
      impact: [
        'Deployed on AWS with auto-scaling',
        'Gemini AI for document analysis',
        'Centralized legal workflow automation'
      ],
      techStack: ['React', 'NodeJS', 'Express', 'MongoDB', 'AWS EC2', 'Vercel', 'Gemini AI', 'Tailwind'],
      role: 'Full-Stack Developer & Cloud Engineer',
      year: '2024',
      links: {
        demo: 'https://law-connect-two.vercel.app/',
        repo: 'https://github.com/johnbekele/LawConnect.git'
      }
    },
    {
      id: 4,
      title: 'WorkerDay',
      subtitle: 'Employee Management Dashboard',
      category: ['web', 'devops'],
      image: WorkerDay,
      description: 'User management dashboard for tracking performance, attendance, and role-based access. Deployed on AWS infrastructure with RDS PostgreSQL.',
      impact: [
        'AWS RDS for scalable database',
        'AWS EC2 deployment with CI/CD',
        'Role-based access control'
      ],
      techStack: ['React', 'NodeJS', 'Express', 'PostgreSQL', 'Sequelize', 'AWS EC2', 'AWS RDS', 'Vercel', 'Tailwind'],
      role: 'Full-Stack Developer & Cloud Engineer',
      year: '2023',
      links: {
        demo: 'https://book-and-memories.vercel.app/',
        repo: 'https://github.com/johnbekele/WorkerDay-Frontend.git'
      }
    },
    {
      id: 5,
      title: 'Swift News Search',
      subtitle: 'AI-Powered News Analysis',
      category: ['ai', 'web'],
      image: null,
      description: 'Web app for searching, filtering, and analyzing news articles using Gemini AI for insights and summaries.',
      impact: [
        'Gemini AI integration for analysis',
        'Deployed on Render with auto-deploy',
        'PostgreSQL for article storage'
      ],
      techStack: ['Express', 'NodeJS', 'PostgreSQL', 'Gemini AI', 'EJS', 'CSS', 'Render'],
      role: 'Full-Stack Developer',
      year: '2024',
      links: {
        repo: 'https://github.com/johnbekele/Geez-Offensive-Security-Scanner.git'
      }
    },
    {
      id: 6,
      title: 'TemariGo',
      subtitle: 'Learning Platform Mobile App',
      category: ['web'],
      image: null,
      description: 'Udemy-style learning Android application built with React Native. Full-stack MERN implementation.',
      impact: [
        'Cross-platform mobile deployment',
        'MongoDB for course management',
        'RESTful API architecture'
      ],
      techStack: ['React Native', 'Vite', 'Tailwind', 'NodeJS', 'Express', 'MongoDB'],
      role: 'Mobile Developer',
      year: '2023',
      links: {
        repo: 'https://github.com/johnbekele/TemariGo.git'
      }
    },
    {
      id: 7,
      title: 'After-Connection-Tool',
      subtitle: 'Security Trace Removal Script',
      category: ['automation'],
      image: null,
      description: 'Multi-platform script for securely removing SSH/SCP activity traces from Linux/macOS and Windows systems.',
      impact: [
        'Cross-platform automation',
        'Security-focused scripting',
        'PowerShell + Bash implementation'
      ],
      techStack: ['Python', 'Bash', 'PowerShell'],
      role: 'Security Automation Engineer',
      year: '2023',
      links: {
        repo: 'https://github.com/johnbekele/After-connection-tool.git'
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Applications', count: projects.filter(p => p.category.includes('web')).length },
    { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category.includes('ai')).length },
    { id: 'automation', label: 'Automation', count: projects.filter(p => p.category.includes('automation')).length },
    { id: 'devops', label: 'DevOps Pipelines', count: projects.filter(p => p.category.includes('devops')).length }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  return (
    <div id='projects' className='sectionContainer projects-section'>
      <h2 className='sectionTitle' data-number="03.">
        Projects
      </h2>
      
      <p className='section-description'>
        A collection of production-grade applications showcasing DevOps practices, cloud infrastructure, and AI integration.
      </p>

      {/* Project Tabs */}
      <div className='project-tabs'>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.label}
            <span className='tab-count'>{category.count}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className='projects-grid'>
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className='project-card'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image/Placeholder */}
            <div className='project-image-container'>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='project-image'
                />
              ) : (
                <div className='project-image-placeholder'>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent-cyan)" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="var(--accent-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
              <div className='project-overlay'>
                <div className='project-links-overlay'>
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target='_blank' 
                      rel='noreferrer'
                      className='overlay-link'
                      title='View Live Demo'
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {project.links.repo && (
                    <a 
                      href={project.links.repo} 
                      target='_blank' 
                      rel='noreferrer'
                      className='overlay-link'
                      title='View Repository'
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className='project-info'>
              <div className='project-header'>
                <div>
                  <h3 className='project-title'>{project.title}</h3>
                  <p className='project-subtitle'>{project.subtitle}</p>
                </div>
                <div className='project-meta'>
                  <span className='project-role'>{project.role}</span>
                  <span className='project-year'>{project.year}</span>
                </div>
              </div>

              <p className='project-description'>{project.description}</p>

              {/* Impact Points */}
              <div className='project-impact'>
                <h4 className='impact-title'>Key Achievements:</h4>
                <ul className='impact-list'>
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className='project-tech-stack'>
                {project.techStack.map((tech, i) => (
                  <span key={i} className='tech-badge'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className='projects-footer'>
        <a href='https://github.com/johnbekele' target='_blank' rel='noreferrer'>
          <button className='btn-secondary'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>View All Projects on GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
