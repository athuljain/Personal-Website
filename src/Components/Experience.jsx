
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript, SiJavascript } from "react-icons/si";
import "./Experience.css";

const Experience = () => {
  const skills = [
    { name: "HTML / CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "React / Vite", level: "Experienced" },
    { name: "Redux Toolkit", level: "Experienced" },
    { name: "Node.js / Express", level: "Experienced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Git / GitHub", level: "Experienced" },
    { name: "Digital Marketing", level: "Basic" },
  ];

  return (
    <section id="experience">
      {/* 1. Background Texture & Icons */}
      <div className="header__texture"></div>
      <div className="tech-orbit">
        <FaReact className="orbit-icon react-icon-exp" />
        <SiNextdotjs className="orbit-icon next-icon-exp" />
        <SiExpress className="orbit-icon express-icon-exp" />
        <SiMongodb className="orbit-icon mongo-icon-exp" />
        <SiTypescript className="orbit-icon ts-icon-exp" />
        <FaNodeJs className="orbit-icon node-icon-exp" />
        <SiJavascript className="orbit-icon js-icon-exp" /> {/* Added JS Icon */}
      </div>

      <div className="container experience__container">
        <h5>The Skills I Have</h5>
        <h2 className="section-title">Technical Proficiency</h2>

        <div className="experience__card glass-card">
          <div className="experience__header">
            <h3 className="gradient-text">Development Skills</h3>
            {/* <div className="badge-glow">MERN Stack Enthusiast</div> */}
          </div>

          <div className="experience__content">
            {skills.map((skill, index) => (
              <article 
                className="experience__details" 
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BsFillPatchCheckFill className="experience__details-icon" />
                <div className="skill__text-wrapper">
                  <h4>{skill.name}</h4>
                  <small className="skill__level">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;