import React from "react";
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { LuContact2 } from "react-icons/lu";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <IoHome />
      </a>{" "}
      <a href="#about">
        <FaUserAlt />
      </a>{" "}
      <a href="#experience">
        <FiBook />
      </a>{" "}
      <a href="#services">
        <RiServiceLine />
      </a>{" "}
      <a href="#contact">
        <LuContact2 />
      </a>{" "}
    </nav>
  );
};

export default Nav;
