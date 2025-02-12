import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../Assets/athuljain.jpg";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Athul Jain" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a highly skilled and motivated web developer specializing in the MERN Stack, I bring comprehensive expertise in full-stack
development. My front-end proficiency encompasses React.js, Next.js, Redux, TypeScript, and related libraries, while my
back-end expertise includes NodeJS,TypeScript ExpressJS, and MongoDB. I am eager to contribute to a dynamic
organization where I can leverage my technical skills, advance my professional growth, and drive impactful results to support
the company’s success.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default Intro;
