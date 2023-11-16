import React from "react";
import { FaPills } from "react-icons/fa6";


const Home = () => {
  return (
    <div className="container___home">
      <aside className="sidebar">
        <header className="sidebar_header">
          <img className="logo_img" src="img-2.jpg" alt="" />
        </header>

        <nav className="border">
          <button>
            <span>
              <FaPills />
              <span>cadastrar medicamento</span>
            </span>
          </button>

          <button>
            <span>
              <FaPills />
              <span>cadastrar medicamento</span>
            </span>
          </button>

          <button>
            <span>
              <FaPills />
              <span>cadastrar medicamento</span>
            </span>
          </button>

        </nav>
      </aside>
      <h1>teste</h1>
    </div>
  )
}

export default Home;
