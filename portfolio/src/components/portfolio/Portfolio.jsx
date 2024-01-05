import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/IMG1.png";
import IMG2 from "../../assests/IMG2.png";
import IMG3 from "../../assests/IMG3.png";
import IMG4 from "../../assests/IMG4.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Groomin",
    github: "https://github.com/sanskar-23/GrooMin",
  },
  {
    id: 2,
    image: IMG2,
    title: "YelpCamp",
    github: "https://github.com/sanskar-23/YelpCamp",
  },
  {
    id: 3,
    image: IMG3,
    title: "Discord-Encourage-Bot",
    github: "https://github.com/sanskar-23/Discord-Encourage-Bot",
  },
  {
    id: 4,
    image: IMG4,
    title: "Hostel Allocation System",
    github: "https://github.com/sanskar-23/Hostel_Allocation_System",
    demo: null,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article className="portfolio__items" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
