import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import "./Header.css"

import AthulJainResumePDF from "../Assets/AthulJainResume.pdf";

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Athul Jain</h1>
        <h5 className="text-light">Mern-Stack-Developer</h5>
        <div className="cta">
          <a href={AthulJainResumePDF} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
          
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <div>
          <div className="header__socials">
            <a href="/https://www.linkedin.com/in/athul-jain-5382b0215/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="/https://github.com/athuljain" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
