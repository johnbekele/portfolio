import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open email client with pre-filled data
    const mailtoLink = `mailto:yohans.Bekele@thomsonreuters.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id='contactMe' className='sectionContainer contact-section'>
      <h2 className='sectionTitle' data-number="05.">
        Get In Touch
      </h2>

      <div className='contact-content'>
        <div className='contact-info'>
          <h3 className='contact-heading'>Let's Build Something Great</h3>
          <p className='contact-description'>
            I'm currently open to new opportunities in <strong>DevOps Engineering</strong> and <strong>LLM Development</strong>. 
            Whether you have a project in mind, need consulting, or just want to connect, I'd love to hear from you!
          </p>

          <div className='contact-methods'>
            <a href='mailto:yohans.Bekele@thomsonreuters.com' className='contact-method'>
              <div className='method-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className='method-details'>
                <h4>Email</h4>
                <p>yohans.Bekele@thomsonreuters.com</p>
              </div>
            </a>

            <a href='https://github.com/johnbekele' target='_blank' rel='noreferrer' className='contact-method'>
              <div className='method-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className='method-details'>
                <h4>GitHub</h4>
                <p>@johnbekele</p>
              </div>
            </a>

            <a href='https://www.linkedin.com/in/yohans-bekele' target='_blank' rel='noreferrer' className='contact-method'>
              <div className='method-icon'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V8H14V10A5.48 5.48 0 0 1 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className='method-details'>
                <h4>LinkedIn</h4>
                <p>Yohans Bekele</p>
              </div>
            </a>
          </div>

          <div className='response-time'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="var(--accent-lime)" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="var(--accent-lime)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Typically responds within 24 hours</span>
          </div>
        </div>

        <div className='contact-form-container'>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your Name'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='your.email@example.com'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='6'
                placeholder='Tell me about your project or opportunity...'
              />
            </div>

            <button type='submit' className='btn-primary form-submit'>
              <span>Send Message</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
