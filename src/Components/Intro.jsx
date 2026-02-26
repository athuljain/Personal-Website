import React from "react";
import { FaAward, FaRocket } from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
import img from "../Assets/Profile.JPG";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="about">
      {/* Background Texture Layers */}
      <div className="header__texture"></div>
      <div className="tech-orbit">
  <FaReact className="orbit-icon react-icon" />
  <SiNextdotjs className="orbit-icon next-icon" />
  <SiMongodb className="orbit-icon mongo-icon" />
  <FaNodeJs className="orbit-icon node-icon" />
  <SiExpress className="orbit-icon express-icon" />
  <SiTypescript className="orbit-icon ts-icon" />
</div>
      
      <div className="container about__container">
        <h5>Get to know</h5>
        <h2 className="section-title">About Me</h2>

        <div className="about__layout">
          {/* LEFT: Perfectly Framed Image */}
          <div className="about__left">
            <div className="image-neon-frame">
              <div className="image-inner">
                <img src={img} alt="Athul Jain" />
              </div>
            </div>
          </div>

          {/* RIGHT: Content Area */}
          <div className="about__right">
            <div className="about__cards-flex">
              <article className="stat-card glass-card">
                <FaAward className="stat-icon" />
                <h3>Experience</h3>
                <p>2+ Years</p>
              </article>

              <article className="stat-card glass-card">
                <FaRocket className="stat-icon" />
                <h3>Projects</h3>
                <p>10+ Completed</p>
              </article>
            </div>

            <div className="description-box">
              <p className="description-text">
                I am a <span className="highlight-blue">Full-Stack Developer</span> specializing in the 
                <span className="highlight-blue">MERN Stack & Next.js</span>. I build high-performance, 
                scalable web applications with a focus on clean architecture.
                <br /><br />
                With expertise in <span className="highlight-blue">TypeScript, Express, and MongoDB</span>, 
                I bridge the gap between complex back-end logic and intuitive front-end designs. 
                Currently exploring <span className="highlight-blue">C#</span> to broaden my 
                enterprise-level capabilities.
              </p>
            </div>

            <div className="about__btns">
              <a href="#contact" className="btn-modern btn-connect pulse">Let's Connect</a>
              <a href="#portfolio" className="btn-modern btn-view">View Work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;