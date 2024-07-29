//
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Home=()=>{
//     const navigate=useNavigate();
//     const getStarted=()=>{
//         navigate('/signup');
//     }
//     return(
//         <div>
//             <button onClick={getStarted}>Get Started</button>
//         </div>
//     );
// }
// export default Home
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
// import ReactDOM from "react-dom/client";
import "./mainStyles.css";
const Home = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate("/signup");
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cxlxkxm", "template_6moyfek", form.current, {
        publicKey: "r-x-JI9FJfd_PBaai",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Your message was sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="home-page">
        <div className="main">
          <div className="left-container">
            <h1>Get the code of your project in no time ..!</h1>
            <a onClick={getStarted}>Get started</a>
            <a className="grape" href="grape.html">
              Drag & Drop
            </a>
          </div>
          <div className="right-container">
            <div>
              <img src={require("../Assets/sketch.png")} alt="sketch-img" />
              <a onClick={getStarted}>Upload image</a>
            </div>
            <div>
              <img src={require("../Assets/code-img.jpg")} alt="code-img" />
              <a onClick={getStarted}>Download image</a>
            </div>
          </div>
        </div>
        <section class="about">
          <div class="about-content" id="about">
            <img src={require("../Assets/phone.png")} alt="about-img" />
            <div class="about-text">
              <h1>About Us</h1>
              <h5>
                Sketch <span> 2 Code </span>
              </h5>
              <p class="about-p">
                Sketch2Code is an innovative project with the aim to change the
                way UI designs are translated into code. This project leverages
                machine learning algorithms and computer vision to interpret
                hand-drawn sketches and automatically generate corresponding
                HTML markup. The primary goal is to simplify and accelerate the
                transition from design concepts to functional code, reducing the
                time and effort required in the prototyping stage of software
                development.
              </p>
              <button type="button" className="btn-about">
                <a href="#contact-us">let's talk</a>
              </button>
            </div>
          </div>
        </section>
        <section class="tech" id="tech">
          {/* <div></div> */}
          <div>
            <h1 class="tech-header">ML-Powered Image to HTML CSS Converter</h1>
          </div>
        </section>
        <section class="tech-body">
          <div>
            <h1 class="abstract-header">Abstract</h1>
            <p class="abstract-paragraph">
              The system provides an effective and user-friendly solution to
              convert an image or paper into a web page consisting of HTML and
              CSS. The system works within a specific environment that includes
              digital components, namely Sketch2Code, which uses artificial
              intelligence to convert handwritten drawings into working HTML
              prototypes, thus saving some programmers the time and effort
              expended on creating these pages.
            </p>
            <h1 class="abstract-header">Technologies used</h1>
            <div className="clearfix">
              <div class="img-container">
                <img
                  class="tech-img"
                  src={require("../Assets/firebase.png")}
                  alt="about-img"
                />
                <img
                  class="tech-img"
                  src={require("../Assets/react1.png")}
                  alt="about-img"
                />
                <img
                  class="tech-img"
                  src={require("../Assets/tensorflow1.png")}
                  alt="about-img"
                />
              </div>
            </div>
            <h1 class="abstract-header">How it works?</h1>
            <p class="abstract-paragraph">
              1- The user starts by providing a screenshot image that you want
              to convert into HTML and CSS code.
              <br />
              <br />
              2- The screenshot image is subjected to various image processing
              techniques to enhance its quality and prepare it for code
              conversion. <br />
              <br /> 3- A machine learning model is employed to recognize
              patterns and structures within the image. such as headers, text,
              buttons, and more. <br />
              <br />
              4- If the image contains text, an OCR system extracts this text.
              <br />
              <br /> 5- A code generation system is used to produce HTML and CSS
              code. It maps the recognized elements to corresponding HTML tags
              and applies CSS styles accordingly.
              <br />
              <br /> 6- To store user-generated drawings and code, a database is
              implemented, ensuring that the data is securely managed.
            </p>
            <h1 class="abstract-header">Who will use it?</h1>
            <p class="abstract-paragraph">
              Web developers. Non-technical users. UI/UX designers. Students &
              learners.
            </p>
          </div>
        </section>
        <section class="contact-us" id="contact-us">
          <div>
            <h1 class="contact-header">Contact us</h1>
          </div>
        </section>
        <section class="contact-us-body">
          <div class="form">
            <form ref={form} onSubmit={sendEmail}>
              <label class="form-label">Name</label>
              <input class="form-input" type="text" name="user_name" />
              <label class="form-label">Email</label>
              <input class="form-input" type="email" name="user_email" />
              <label class="form-label">Message</label>
              <textarea class="form-text-area" name="message" />
              <input class="form-button" type="submit" value="Send" />
            </form>
          </div>
          <img
            class="contact-us-image"
            src={require("../Assets/contact2.png")}
            alt="contactus"
          />
        </section>
      </div>
      <footer>
        <div class="row">
          <div class="column1">
            <img
              class="footer-img"
              src={require("../Assets/sketch2code.png")}
              alt=""
            />
          </div>
          <div class="column2">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About us</a>
              </li>
              <li>
                <a href="#tech">Technology</a>
              </li>
              <li>
                <a href="#contact-us">Contact us</a>
              </li>
              <li>
                <a href="login">Account</a>
              </li>
            </ul>
          </div>
          <div className="column3">
            <h3>search</h3>
            <input type="text" name="" id="" />
            <a>Enter</a>
          </div>
        </div>
      </footer>
    </>
  );
};
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<MyForm />);
export default Home;
