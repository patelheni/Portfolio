import React from 'react';
import './Contact.css';
import emailIcon from '../assets/email.png';       // Add your Email icon
import instagramIcon from '../assets/instagram.png'; // Add your Instagram icon
import linkedinIcon from '../assets/linkedin.png';   // Add your LinkedIn icon
import githubIcon from '../assets/github.png';       // Add your GitHub icon

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <div className="contact-icons">
        {/* Email Icon */}
        <div className="contact-item">
          <a href="mailto:patelheni9555@gmail.com">
            <img src={emailIcon} alt="Email" className="contact-icon" />
          </a>
        </div>

        {/* Instagram Icon */}
        <div className="contact-item">
          <a href="https://www.instagram.com/henipatel_67/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="contact-icon" />
          </a>
        </div>

        {/* LinkedIn Icon */}
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/heni-patel-035699235/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          </a>
        </div>

        {/* GitHub Icon */}
        <div className="contact-item">
          <a href="https://github.com/patelheni" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
