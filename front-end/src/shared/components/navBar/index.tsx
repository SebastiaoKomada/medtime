import "./styles/styles.css";
import { Link } from 'react-router-dom';
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <nav className="nav___navbar">
        <a href="/" className="logo___navbar">MedTime</a>
        <div className="bars___navbar"><i className="fas fa-bars"></i></div>
        <div className="menu___navbar">
          <Link className="menu--links___navbar" id="button" to="/logIn">logIn</Link>
        </div>
      </nav>

    </nav>
  )
}

export default NavBar;
