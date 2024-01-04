import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Programming</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in Front-End Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient with using React and JavaScript</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in Back-End Development</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient with using MongoDB, NodeJS and ExpressJS</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>DSA and Hackathons</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proefficient in solving DSA Problems</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Solved 1000+ problems across various platforms</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Finalist in JPMC Code for Good'22</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Top 27 in Amazon Hackon'22</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
