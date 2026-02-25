
import IMG1 from "../Assets/reactEcomerce.png";
import IMG2 from "../Assets/todoredux.png";
// import IMG3 from "../Assets/backend.png";
import IMG4 from "../Assets/perosnalPortfolio.jpg"
import CookPostImg from "../Assets/recipeapp.jpg"

import MernEcom from "../Assets/MernEcom.jpg"
import BloodBank from '../Assets/BloodBankMern.jpg'
import DoctorBooking from '../Assets/DoctorBooking.jpg'
 // import IMG4 from "../../assets/Covid-19 Project.jpg";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";
import "./Portfolio.css";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript,SiJavascript } from "react-icons/si";
// ... (keep all your existing IMG imports)
import "./Portfolio.css";

const Portfolio = () => {
   const soloProjects = [
    {
      id: 1,
      title: "Online Furniture Shop Website with React.js",
      img: IMG1,
      description: "An Online Furniture Shop Website.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://lucky-hummingbird-9e9472.netlify.app/",
      github: "https://github.com/athuljain/React-online-furniture-shop",
    },
{
  id: 2,
  title: "Cook Post Share - Recipe App",
  img: CookPostImg, // Ensure you import your image asset at the top
  description: "A full-stack platform to discover, create, and share culinary recipes.",
  technologies: "Next.js | Tailwind CSS | MongoDB | NextAuth",
  link: "https://next-js-recipe-app-six.vercel.app/", 
  github: "https://github.com/athuljain/recipe-app-nextjs", 
},

    {
      id: 3,
      title: "To-Do App with Redux",
      img: IMG2,
      description: "Todo Application.",
      technologies: "React | Redux",
      link: "https://main--marvelous-trifle-b2888a.netlify.app/",
      github: "https://github.com/athuljain/React_Redux_ToDoApp",
    },
    // {
    //   id: 3,
    //   title: "E-commerce BackEnd project - online shirt shop",
    //   img: IMG3,
    //   description: "E-commerce BackEnd project - online shirt shop ",
    //   technologies: "NodeJs | Express | MongoDB",
    //   link: "https://github.com/athuljain/ecommerce.git",
    //   github: "https://github.com/athuljain/ecommerce.git",
    // },
    {
      id:4 ,
      title: "Perosnal Portfolio app",
      img: IMG4,
      description: "Personal Portfolio app ",
      technologies: "HTML | CSS | JavaScript | ReactJS ",
      link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/Personal-Website",
    },
    {
      id:5 ,
      title: "MERN E-commerce App",
      img: MernEcom,
      description: "Personal Portfolio app ",
      technologies: " CSS | ReactJS | nodeJs | ExpressJs | MongoDb                       ",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/ECommerce-Mern.git",
    },
    {
      id:6 ,
      title: "MERN Blood-Bank",
      img: BloodBank,
      description: "MERN Blood bank app ",
      technologies: "CSS | ReactJS | nodeJs | ExpressJs | MongoDb  ",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/Mern-Blood-Bank",
    },
    {
    id:7 ,
    title: "MERN Doctor Booking app",
    img: DoctorBooking,
    description: "MERN Doctor Booking app",
    technologies: "CSS | ReactJS | nodeJs | ExpressJs | MongoDb  ",
    // link: "https://athuljain-personal-website.vercel.app/",
    github: "https://github.com/athuljain/Mern-DoctorBooking",
  },
    
  ];

  return (
    <section id="portfolio">
      {/* Background Texture & Orbit Icons */}
      <div className="header__texture"></div>
    <div className="tech-orbit">
    <FaReact className="orbit-icon port-icon-react" />
    <SiNextdotjs className="orbit-icon port-icon-next" />
    <SiMongodb className="orbit-icon port-icon-mongo" />
    <SiExpress className="orbit-icon port-icon-express" />
    <FaNodeJs className="orbit-icon port-icon-node" />
    <SiTypescript className="orbit-icon port-icon-ts" />
    <SiJavascript className="orbit-icon port-icon-js" />
  </div>

      <div className="container portfolio__container">
        <h5>My Recent Work</h5>
        <h2 className="section-title-glow">Portfolio</h2>

        <div className="portfolio__grid">
          {soloProjects.map((pro) => (
            <article className="portfolio__item glass-card" key={pro.id}>
              <div className="portfolio__item-image">
                <img src={pro.img} alt={pro.title} />
                <div className="portfolio__overlay">
                   <a href={pro.github} target="_blank" rel="noreferrer" className="overlay-icon"><FaGithub /></a>
                   <a href={pro.link} target="_blank" rel="noreferrer" className="overlay-icon"><FaExternalLinkAlt /></a>
                </div>
              </div>
              
              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p className="description">{pro.description}</p>
                <div className="tech-stack">
                  {pro.technologies.split("|").map((tech, i) => (
                    <span key={i} className="tech-badge">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              <div className="portfolio__item-cta">
                <a href={pro.github} target="_blank" className="btn-modern btn-view" rel="noreferrer">GitHub</a>
                <a href={pro.link} target="_blank" className="btn-modern btn-connect" rel="noreferrer">Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;