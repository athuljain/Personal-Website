import React from "react";
import { BsLinkedin, } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import {AiFillInstagram} from "react-icons/ai"


// import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Athul Jain
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/athul-jain-5382b0215/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/athuljain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/athul_jain?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram />

        </a>
       


      </div>
      <div className="footer__copyright">
        <small>&copy; AJ 2023. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
