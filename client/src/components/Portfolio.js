import React from 'react';
import './portfolio.css';
import sunnybeer from '../assets/sunny-beer-finder-demo.gif'; 
import quiz from '../assets/quiz.JPG';
import note from '../assets/note.png';
import text from '../assets/text-edit.JPG';
import regex from '../assets/regex.JPG';
import portfolio from '../assets/portfolio.JPG';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project Beer Finder',
      description: 'Group assignment for UCB',
      image: sunnybeer,
      link: 'https://github.com/apostlex11/Hyper-Texters-Bar-Project-By-Location-Time-Weather',
    },
    {
      id: 2,
      title: 'CS Quiz',
      description: 'A quick quiz game made from JS.',
      image: quiz,
      link: 'https://apostlex11.github.io/JavaScript_Timed_Quiz/',
    },
    {
      id: 3,
      title: 'Note Taker',
      description: 'Note taker assignment',
      image: note,
      link: 'https://dashboard.heroku.com/apps/morning-taiga-61312',
    },
    {
      id: 4,
      title: 'Text Editor',
      description: 'Edit Quick Texts and install.',
      image: text,
      link: 'https://thawing-gorge-12549.herokuapp.com/',
    },
    {
      id: 5,
      title: 'Regex',
      description: 'Modified from Context API to Regex',
      image: regex,
      link: 'https://young-fortress-75741.herokuapp.com/',
    },
    {
      id: 6,
      title: 'Portfolio',
      description: 'React created Portfolio',
      image: portfolio,
      link: 'https://apostlex11.github.io/JavaScript_Timed_Quiz/',
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
