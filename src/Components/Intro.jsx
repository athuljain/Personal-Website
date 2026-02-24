// import { FaAward } from "react-icons/fa";
// import React from "react";
// import { VscFolderLibrary } from "react-icons/vsc";
// // import img from "../Assets/athuljain.jpg";
// import img from "../Assets/Profile.JPG"
// import "./Intro.css";

// const Intro = () => {
//   return (
//     <section id="about">
//       <h5>Get to know</h5>
//       <h2>About Me</h2>
//       <div className="container about__container">
//         <div className="about__me">
//           <div className="about__me-image">
//             <img src={img} alt="Athul Jain" />
//           </div>
//         </div>
//         <div className="about__content">
//           <div className="about__cards">
//             <article className="about__card">
//               <FaAward className="about__icon" />
//               <h5>Experience</h5>
//               <small>2 year</small>
//             </article>
//             <article className="about__card">
//               <VscFolderLibrary className="about__icon" />
//               <h5>Projects</h5>
//               <small>10+ Completed Projects</small>
//             </article>
//           </div>
//           {/* <p>
//           I am a highly skilled and motivated web developer specializing in the MERN Stack, I bring comprehensive expertise in full-stack
// development. My front-end proficiency encompasses React.js, Next.js, Redux, TypeScript, and related libraries, while my
// back-end expertise includes NodeJS,TypeScript ExpressJS, and MongoDB. I am eager to contribute to a dynamic
// organization where I can leverage my technical skills, advance my professional growth, and drive impactful results to support
// the company’s success.
//           </p> */}
//         <p>
//   I am a highly motivated Full-Stack Developer specializing in the MERN Stack and Next.js. 
//   With 2+ years of experience, I have built a strong foundation in modern web architecture.
//   <br /><br />
//   My core expertise includes React.js, Next.js, Redux, and TypeScript for crafting high-performance user interfaces. 
//   On the server side, I am proficient in Node.js, Express.js, and MongoDB. 
//   I am also expanding my versatility with basic knowledge of C#, allowing me to adapt to diverse enterprise environments 
//    and drive impactful results.
// </p>
//           <a href="#contact" className="btn btn-primary">
//             Let's Talk
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Intro;


import { FaAward, FaRocket } from "react-icons/fa";
import React from "react";
import img from "../Assets/Profile.JPG";
import "./Intro.css";

const Intro = () => {
  return (
    <section id="about">
      {/* Exact same background texture as header */}
      <div className="header__texture"></div>
      
      <div className="container about__container">
        <h5>Get to know</h5>
        <h2 className="section-title">About Me</h2>

        <div className="about__layout">
          {/* LEFT: Image with perfectly clipped neon border */}
          <div className="about__left">
            <div className="image-neon-frame">
              <div className="image-inner">
                <img src={img} alt="Athul Jain" />
              </div>
            </div>
          </div>

          {/* RIGHT: Stats and Content */}
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

          <p className="description-text">
              I am a <span className="highlight-text">Full-Stack Developer</span> specializing in the 
              **MERN Stack & Next.js**. I build high-performance, scalable web applications with a focus on clean architecture.
              <br /><br />
              With expertise in **TypeScript, Express, and MongoDB**, I bridge the gap between complex back-end logic and intuitive front-end designs. Currently exploring **C#** to broaden my enterprise-level capabilities.
            </p>

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