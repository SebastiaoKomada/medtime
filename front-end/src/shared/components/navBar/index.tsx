import "./styles/styles.scss";
import "./styles/styles.css";
import { Link } from 'react-router-dom';
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <nav className="navbar">
        <a href="/" className="navbar__logo">MedTime</a>
        <div className="navbar__bars"><i className="fas fa-bars"></i></div>
        <div className="navbar__menu">
          <Link className="navbar__menu--links" to="/" >Home</Link>
          <Link className="navbar__menu--links" to="/confirmation">confirmar</Link>
          <Link className="navbar__menu--links" to="/medication">medicação</Link>
          <Link className="navbar__menu--links" id="button" to="/logIn">logIn</Link>
        </div>
      </nav>

    </nav>
  )
}

export default NavBar;
