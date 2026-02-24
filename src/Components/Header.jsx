// import React from "react";
// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import {AiFillInstagram} from "react-icons/ai"
// import "./Header.css";
// import { AiFillCodeSandboxCircle } from "react-icons/ai";

// import AthulJainMern from '../Assets/athuljainMernStack.pdf'
// // import AthulJainMern from '../Assets/AthulJainCv2024.pdf'
// const Header = () => {
//   return (
//     <header id="home">
//       <div className="container header-container">
//         <h5>Hello I'm</h5>
//         <h1>Athul Jain</h1>
//         <h5 className="text-light">Mern-Stack-Developer</h5>
//         <div className="cta">
//           <a href={AthulJainMern} download className="btn">
//             Download CV
//           </a>
//           <a href="#contact" className="btn btn-primary">
//             Let's talk
//           </a>
//         </div>
//         <a href="#contact" className="scroll__down">
//           Scroll Down
//         </a>

//         <div className="header__socials">
//           <a
//             href="https://www.linkedin.com/in/athul-jain-5382b0215/"
//             target="_blank"
//             rel=" noreferrer"
//           >
//             <BsLinkedin />
//           </a>
//           <a
//             href="https://github.com/athuljain/"
//             target="_blank"
//             rel=" noreferrer"
//           >
//             <FaGithub />
//           </a>
//           <a
//               href="https://codesandbox.io/u/athuljain/"
//           target="_blank"
//             rel=" noreferrer"
//           >
//             <AiFillCodeSandboxCircle />
//           </a>
//           <a
//             href="https://instagram.com/athul_jain?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D/"
//             target="_blank"
//             rel=" noreferrer"
//           >
//             <AiFillInstagram />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header; 


import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram, AiFillCodeSandboxCircle } from "react-icons/ai";
import "./Header.css";
import AthulJainMern from '../Assets/athuljainMernStack.pdf';

const Header = () => {
  return (
    <header id="home">
      {/* Texture Layer */}
      <div className="header__texture"></div>
      
      <div className="container header__container">
        <div className="glass-card">
          <h5 className="intro-text">Hello I'm</h5>
          <h1 className="name-gradient">Athul Jain</h1>
          <div className="role-wrapper">
             <h5 className="text-light typing-animation">Full-Stack Developer | MERN | Next.js</h5>
          </div>
          
          <div className="cta">
            <a href={AthulJainMern} download className="btn btn-outline">Download CV</a>
            <a href="#contact" className="btn btn-primary pulse">Let's Talk</a>
          </div>
        </div>

        <div className="header__socials">
          <a href="https://linkedin.com/..." target="_blank" rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com..." target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://codesandbox.io..." target="_blank" rel="noreferrer"><AiFillCodeSandboxCircle /></a>
           <a href="https://linkedin.com/..." target="_blank" rel="noreferrer"><AiFillInstagram /></a>
          <div className="socials-line"></div>
        </div>

        <a href="#about" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;