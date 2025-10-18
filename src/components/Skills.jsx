import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      icon: '☁️',
      color: '--accent-cyan',
      skills: [
        { name: 'Docker & Kubernetes', level: 90, description: 'Container orchestration & deployment' },
        { name: 'AWS (EC2, RDS, S3)', level: 85, description: 'Cloud infrastructure management' },
        { name: 'CI/CD (GitHub Actions)', level: 90, description: 'Automated deployment pipelines' },
        { name: 'Terraform', level: 80, description: 'Infrastructure as Code' },
        { name: 'Linux & Bash', level: 95, description: 'System administration & scripting' },
        { name: 'Nginx', level: 85, description: 'Web server & reverse proxy' }
      ]
    },
    {
      id: 'ai-llm',
      title: 'AI & LLM',
      icon: '🤖',
      color: '--accent-lime',
      skills: [
        { name: 'OpenAI GPT / Gemini AI', level: 85, description: 'LLM integration & implementation' },
        { name: 'LangChain', level: 80, description: 'LLM application framework' },
        { name: 'Vector Databases', level: 75, description: 'Embeddings & semantic search' },
        { name: 'RAG Architecture', level: 80, description: 'Retrieval-augmented generation' },
        { name: 'Python (AI/ML)', level: 85, description: 'AI/ML development' },
        { name: 'Prompt Engineering', level: 90, description: 'Optimizing LLM interactions' }
      ]
    },
    {
      id: 'development',
      title: 'Development',
      icon: '💻',
      color: '--accent-cyan',
      skills: [
        { name: 'React / Node.js/FastAPI', level: 95, description: 'Full-stack Web Development' },
        { name: 'MongoDB / PostgreSQL', level: 90, description: 'Database design & management' },
        { name: 'REST APIs', level: 95, description: 'API design & implementation' },
        { name: 'Git & Version Control', level: 95, description: 'Source control management' },
        { name: 'Microservices', level: 80, description: 'Distributed systems architecture' },
        { name: 'Python / JavaScript', level: 90, description: 'Multi-language proficiency' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Tools',
      icon: '🔒',
      color: '--accent-lime',
      skills: [
        { name: 'Network Security', level: 85, description: 'Security assessment & hardening' },
        { name: 'Nmap & Wireshark', level: 90, description: 'Network scanning & analysis' },
        { name: 'Metasploit', level: 75, description: 'Penetration testing' },
        { name: 'ServiceNow', level: 80, description: 'IT service management' },
        { name: 'Monitoring Tools', level: 85, description: 'System observability' },
        { name: 'Apache NiFi', level: 75, description: 'Data pipeline automation' }
      ]
    }
  ];

  return (
    <div id='skills' className='sectionContainer skills-section'>
      <h2 className='sectionTitle' data-number="02.">
        Skills & Technologies
      </h2>
      
      <p className='section-description'>
        A comprehensive toolkit for building, deploying, and maintaining modern cloud-native applications with AI integration.
      </p>

      <div className='skills-grid'>
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.id} 
            className='skill-category-card'
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className='category-header'>
              <span className='category-icon'>{category.icon}</span>
              <h3 className='category-title'>{category.title}</h3>
            </div>

            <div className='skills-list'>
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className='skill-item'
                  onMouseEnter={() => setHoveredSkill(`${category.id}-${skillIndex}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className='skill-header'>
                    <span className='skill-name'>{skill.name}</span>
                    <span className='skill-level-text'>{skill.level}%</span>
                  </div>
                  
                  <div className='skill-bar-container'>
                    <div 
                      className='skill-bar'
                      style={{
                        width: hoveredSkill === `${category.id}-${skillIndex}` ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, var(${category.color}), var(--accent-lime))`,
                        transition: 'width 0.8s ease-out'
                      }}
                    />
                  </div>
                  
                  {hoveredSkill === `${category.id}-${skillIndex}` && (
                    <div className='skill-description'>
                      {skill.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Certifications/Tools Section */}
      <div className='additional-skills'>
        <h3 className='additional-title'>Additional Tools & Platforms</h3>
        <div className='tools-cloud'>
          {[
            'Salesforce', 'ERP Systems', 'Burp Suite', 'Nessus', 'Snort',
            'Bettercap', 'New Relic', 'Tableau', 'Power BI', 'JIRA',
            'Figma', 'Postman', 'VS Code', 'Vercel', 'Render'
          ].map((tool, index) => (
            <span key={index} className='tool-chip'>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

