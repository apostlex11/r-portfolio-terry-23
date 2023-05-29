import React from 'react';
import './about.css';
import profilepic from '../assets/pfp.jpg'

function About() {
  return (
    <section className="about">
      <div className="about-content">
        <img src={profilepic} alt="Profile Photo" className="profile-photo" />
        <div className="bio">
          <h2>About Me</h2>
          <p>
          Hi, I'm Terry Sa, 
          </p>
          <p>
          I'm a full stack web developer with a business background. 
          Growing up in Los Angeles business was always an interest of mine. 
          Studying business, I came to an epiphany Developing or Engineering 
          would beneficial for my videlicet future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
