import React from 'react';
import './resume.css';
import resume from '../assets/resume.pdf'

function Resume() {
  return (
    <section className="resume">
      <h2>MY RESUME</h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Feel Free to look at my resume below!</p>
      <br></br>
      <a href={resume} download>
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
