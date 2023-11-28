// import React from 'react'

import React from "react";
import "../index.css"


const EndForm = () => {
  return (
    <>
      <div className="end">
        <section className="about ml-7 mb-5">
          <h1 className="text-5xl font-bold text-blue-600 text-center">
            Muito bem!
          </h1>
          <p className="about-text ml-1 text-2xl text-center">
            Clique em enviar para efetuar o cadastro
          </p>

          <img src="../assets/img/congrats.svg" />
        </section>
      </div>
    </>
  );
}

export default EndForm;
