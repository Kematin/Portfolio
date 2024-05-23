import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Я</NavLink>
      <NavLink to="/resume">Резюме</NavLink>
      <NavLink to="/projects">Проекты</NavLink>
      <NavLink to="/contact">Контакты</NavLink>
    </nav>
  );
}

export default Navbar;
