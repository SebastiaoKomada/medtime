/* eslint-disable no-unused-vars */
import React from "react";
import Add from "../components/Add/Add";
import "../index.css"

const TimeForm = () => {
  return (
    <>
      <div>
        <section className="about ml-7 mb-7">
          <h1 className="text-3xl font-bold text-blue-600">Quase lá!</h1>
          <p className="about-text ml-1 text-lg">
            Defina a(s) hora(s) para usar o medicamento
          </p>
        </section>
        <label className="block mb-2 text-lg font-medium text-blue-500 ml-7">
          Horário
        </label>
        <Add />
      </div>
    </>
  );
}

export default TimeForm;
