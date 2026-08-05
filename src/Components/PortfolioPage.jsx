// import IMG1 from "../Assets/reactEcomerce.png";
import IMG2 from "../Assets/todoredux.png";

import IMG4 from "../Assets/perosnalPortfolio.jpg";
import CookPostImg from "../Assets/recipeapp.jpg";

// import MernEcom from "../Assets/MernEcom.jpg";
import BloodBank from "../Assets/BloodBankMern.jpg";
import DoctorBooking from "../Assets/DoctorBooking.jpg";
import OasisFitness from "../Assets/oasis.jpg";
import get_set from "../Assets/get-set.jpg";
import reactNativeTodo from "../Assets/reactNative.jpg";
import React from "react";
import "./Portfolio.css";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

import "./Portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "GetSet Hospitality Travel agency",
      img: get_set, // Make sure to import this image asset at the top
      description:
        "A responsive web platform designed for a travel and hospitality agency to showcases tour packages, travel services, and seamless client inquiries.",
      technologies: "React.js | CSS ",
      github: "https://github.com/athuljain/sky-routes-tours",
    },
    {
      id: 2,
      title: "Cook Post Share - Recipe App",
      img: CookPostImg, // Ensure you import your image asset at the top
      description:
        "A full-stack culinary platform featuring user authentication, recipe creation and discovery, admin moderation, and dynamic filtering.",
      technologies: "Next.js | React | Tailwind CSS | MongoDB | NextAuth ",
      link: "https://next-js-recipe-app-six.vercel.app/",
      github: "https://github.com/athuljain/recipe-app-nextjs",
    },
    {
      id: 3,
      title: "Perosnal Portfolio app",
      img: IMG4,
      description:
        "A sleek, responsive portfolio application highlighting developer projects, core technical skills, and background experience with dynamic UI components.",
      technologies: "React.js | JavaScript | HTML5 | CSS3",
      link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/Personal-Website",
    },
    {
      id: 4,
      title: "Fitness Academy",
      img: OasisFitness,
      description:
        "A comprehensive web application for a fitness academy featuring service overviews, trainer profiles,  and client inquiries.",
      technologies: "React.js | Django | CSS3 | REST API",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/oasis-fitness-academy",
    },
    {
      id: 5,
      title: "React Native Todo App",
      img: reactNativeTodo,
      description:
        "A cross-platform mobile task management application featuring offline persistence, task categorization, and smooth user interactions.",
      technologies: "React Native | Expo | JavaScript | Async Storage",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/react-native-todo",
    },

    {
      id: 6,
      title: "To-Do App with Redux",
      img: IMG2,
      description:
        "A responsive web application featuring predictable state management with Redux to handle task creation, editing, filtering, and local storage persistence.",
      technologies: "React.js | Redux | JavaScript | CSS3",
      link: "https://main--marvelous-trifle-b2888a.netlify.app/",
      github: "https://github.com/athuljain/React_Redux_ToDoApp",
    },

    {
      id: 7,
      title: "MERN Blood-Bank",
      img: BloodBank,
      description:
        "A full-stack donor and inventory management platform to track blood availability, manage donor profiles, and streamline emergency request fulfillment.",
      technologies: "React.js | Node.js | Express.js | MongoDB | CSS3",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/Mern-Blood-Bank",
    },
    {
      id: 8,
      title: "MERN Doctor Booking app",
      img: DoctorBooking,
      description:
        "A full-stack healthcare scheduling platform enabling patients to search doctors, book appointments, and manage consultations.",
      technologies: "React.js | Node.js | Express.js | MongoDB | CSS3",
      // link: "https://athuljain-personal-website.vercel.app/",
      github: "https://github.com/athuljain/Mern-DoctorBooking",
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

    // {
    //   id:5 ,
    //   title: "MERN E-commerce App",
    //   img: MernEcom,
    //   description: "Personal Portfolio app ",
    //   technologies: " CSS | ReactJS | nodeJs | ExpressJs | MongoDb                       ",
    //   // link: "https://athuljain-personal-website.vercel.app/",
    //   github: "https://github.com/athuljain/ECommerce-Mern.git",
    // },
    // {
    //   id: 1,
    //   title: "Online Furniture Shop Website with React.js",
    //   img: IMG1,
    //   description: "An Online Furniture Shop Website.",
    //   technologies: "Html | CSS | Javascript | React Js",
    //   link: "https://lucky-hummingbird-9e9472.netlify.app/",
    //   github: "https://github.com/athuljain/React-online-furniture-shop",
    // },
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
                  <a
                    href={pro.github}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={pro.link}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-icon"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <div className="portfolio__item-content">
                <h3>{pro.title}</h3>
                <p className="description">{pro.description}</p>
                <div className="tech-stack">
                  {pro.technologies.split("|").map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn-modern btn-view"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn-modern btn-connect"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
