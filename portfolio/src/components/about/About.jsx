import React from "react";
import "./about.css";
import { MdPeopleAlt } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { GiGraduateCap } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdPeopleAlt className="about__icon" />
              <h5>Experinece</h5>
              <small>SDE Summer Intern at Barclays India.</small>
              <br />
              <small>June-July 2023</small>
            </article>
            <article className="about__card">
              <GiBrain className="about__icon" />
              <h5>Coding Problems Solved</h5>
              <small>1000+ Across Various Platforms</small>
            </article>
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Education</h5>
              <small>CSE at TIET Patiala, expected 2024</small>
            </article>
          </div>
          <p className="para">
            Hey There! I am Sanskar Kapoor, former SDE Intern at Barclays India
            and an Upcoming Software Engineer at Barclays India, final year CSE
            Student at Thapar Institute of Engineering and Technology, Patiala.I
            like coding and problem-solving, I have Solved over 1000+ Problems
            on various platforms like Leetcode and GFG. I am comfortable with
            Full-Stack web development and have worked with libraries and
            frameworks like React, Express and Node.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
