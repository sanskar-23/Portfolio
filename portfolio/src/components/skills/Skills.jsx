import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <section id="skills">
      <h5> What skills I have </h5> <h2> Web Development </h2>
      <div className="container skills__container">
        <div className="skills__frontend">
          <h3> Frontend Development </h3>{" "}
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> ReactJS </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> HTML </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> CSS </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> Javascript </h4>
            </article>
          </div>
        </div>
        <div className="skills__backend">
          <h3> Backend Development </h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> NodeJS </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> ExpressJS </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> MongoDB </h4>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon" />
              <h4> SQL </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
