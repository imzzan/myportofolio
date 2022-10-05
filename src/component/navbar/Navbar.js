import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">Muhamaad Muzani</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" className="items">
          Home
        </Link>
        <Link to="/aboutme" className="items">
          About Me
        </Link>
        <Link to="/project" className="items">
          Project
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
