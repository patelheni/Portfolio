import React from 'react';
import profile from '../assets/profile.JPG';  // Make sure this path is correct
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h1>Hi, I am Heni Patel</h1>
        <p>
          I am a motivated and versatile individual, always eager to take on new challenges.
          With a passion for learning, I aim to contribute to cutting-edge projects at Amazon.
        </p>
        <a href="/Resume.pdf" target="_blank" className="resume-btn">View My Resume</a>
      </div>
      <div className="about-image">
        <div className="led-light"></div>  {/* LED light behind the image */}
        <img src={profile} alt="Heni Patel" />
      </div>
    </section>
  );
}

export default About;
