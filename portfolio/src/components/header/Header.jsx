import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assests/me.jpg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Sanskar Kapoor</h1>
        <h5 className="text_light">
          Former SDE Summer Intern at Barclays India'23
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">{/* <img src={ME} alt="me" /> */}</div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
