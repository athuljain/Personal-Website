import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"
import "./Header.css";

//import AthulJainResumePDF from "../Assets/AthulJainResume.pdf";
import AthulJainResume from "../Assets/AthulJain.pdf"

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Athul Jain</h1>
        <h5 className="text-light">Mern-Stack-Developer</h5>
        <div className="cta">
          <a href={AthulJainResume} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <div className="header__socials">
          <a
            href="https://www.linkedin.com/in/athul-jain-5382b0215/"
            target="_blank"
            rel=" noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/athuljain/"
            target="_blank"
            rel=" noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/athul_jain?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/"
            target="_blank"
            rel=" noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
