// import "./Contact.css";

// import React, { useRef, useState } from "react";

// import { MdOutlineEmail } from "react-icons/md";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [message, setMessage] = useState(false);
//   const formRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//     emailjs
//       .sendForm(
//         "service_mr1qmsn",
//         "template_o6l273i",
//         formRef.current,
//         "-XW4WCdMNgW87tiep"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };
//   return (
//     <section id="contact" className="contactFull">
//       <h5>Get In Touch</h5>
//       <h5>
//         I do receive your messages and will respond asap if the valid email is
//         provided :)
//       </h5>
//       <h2>Contact Me</h2>
//       <div className="container contact__container">
//         <div className="contact__options">
//           <article className="contact__option">
//             <MdOutlineEmail className="contact__option-icon" />
//             <h4>Email</h4>
//             <h5>athuljainkj2@gmail.com</h5>
//             <a href="mailto:athuljainkj2@gmail.com">Send a message</a>
//           </article>
//         </div>
//         <form ref={formRef} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Your Full Name"
//             name="user_name"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Your Email"
//             name="user_email"
//             required
//           />
//           <textarea
//             placeholder="Your message"
//             rows="7"
//             name="message"
//             required
//           ></textarea>
//           <button type="submit" className="btn btn-primary">
//             Send Message
//           </button>
//           {message && <span>Thanks, I'll reply ASAP :)</span>}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import "./Contact.css";
import React, { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaReact, FaNodeJs, FaPaperPlane } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTypescript, SiJavascript } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_mr1qmsn",
        "template_o6l273i",
        formRef.current,
        "-XW4WCdMNgW87tiep"
      )
      .then(
        (result) => { console.log(result.text); },
        (error) => { console.log(error.text); }
      );
    e.target.reset();
    setTimeout(() => setMessage(false), 5000); // Hide message after 5s
  };

  return (
    <section id="contact">
      {/* Background Texture & All Tech Icons */}
      <div className="header__texture"></div>
      <div className="tech-orbit">
        <FaReact className="orbit-icon con-icon-1" />
        <SiNextdotjs className="orbit-icon con-icon-2" />
        <SiMongodb className="orbit-icon con-icon-3" />
        <SiExpress className="orbit-icon con-icon-4" />
        <FaNodeJs className="orbit-icon con-icon-5" />
        <SiTypescript className="orbit-icon con-icon-6" />
        <SiJavascript className="orbit-icon con-icon-7" />
      </div>

      <div className="container contact__container">
        <div className="contact__head">
          <h5 className="sub-heading">Get In Touch</h5>
          <h2 className="section-title-glow">Contact Me</h2>
          <p className="contact__info-text">
            I respond to all valid inquiries within 24 hours. Let's build something great!
          </p>
        </div>

        <div className="contact__wrapper">
          <div className="contact__options">
            <article className="contact__option glass-card">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>athuljainkj2@gmail.com</h5>
              <a href="mailto:athuljainkj2@gmail.com" target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact__form glass-card">
            <div className="input__group">
              <input type="text" name="user_name" placeholder="Your Full Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="btn-modern btn-connect">
              Send Message <FaPaperPlane className="send-icon" />
            </button>

            {message && (
              <div className="success-message">
                <span>Thanks! I'll reply to you ASAP.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;