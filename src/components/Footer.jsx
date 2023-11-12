import { useState } from 'react';
import GitHubIcon from '../assets/github-mark.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import StackOverflowIcon from '../assets/stack.svg';
import './Footer.css';

const Footer = () => {
  const [githubHovered, setGithubHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);
  const [stackoverflowHovered, setStackoverflowHovered] = useState(false);

  const handleGithubClick = () => {
    window.open('https://github.com/JonBay', '_blank'); 
  }

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/jonnybay', '_blank'); 
  }

  const handleStackoverflowClick = () => {
    window.open('https://stackoverflow.com/users/21885200/jonbay', '_blank'); 
  }
  
  return (
    <footer className="footer">
      <div className="icon-container">
        <img
          src={GitHubIcon}
          alt="GitHub"
          onMouseOver={() => setGithubHovered(true)}
          onMouseOut={() => setGithubHovered(false)}
          onClick={handleGithubClick}
          className={`icon ${githubHovered && 'hovered'}`}
        />
        <img
          src={LinkedInIcon}
          alt="LinkedIn"
          onMouseOver={() => setLinkedinHovered(true)}
          onMouseOut={() => setLinkedinHovered(false)}
          onClick={handleLinkedinClick}
          className={`icon ${linkedinHovered && 'hovered'}`}
        />
        <img
          src={StackOverflowIcon}
          alt="Stack Overflow"
          onMouseOver={() => setStackoverflowHovered(true)}
          onMouseOut={() => setStackoverflowHovered(false)}
          onClick={handleStackoverflowClick}
          className={`icon ${stackoverflowHovered && 'hovered'}`}
        />
      </div>
    </footer>
  );
}

export default Footer;