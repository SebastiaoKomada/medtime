import React from "react";
import { Link } from "react-router-dom"; // Importe Link se estiver usando React Router
import "./style/index.css";
import { FaPills } from "react-icons/fa";


const SideBar = () => {
  return (


    <aside className="sidebar">
      <div className="logo">
        <img src="img-2.jpg" alt="logo" />
        <h2>CodingNepal</h2>
      </div>
      <ul className="links">
        <li>
          <div className="icon">
            <FaPills size={30}/>
          </div>
          <Link to="/medication">medicação</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
