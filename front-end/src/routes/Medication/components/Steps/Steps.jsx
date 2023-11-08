/* eslint-disable react/prop-types */
//import React from 'react'
import {
  BsPrescription2,
  BsCalendarPlus,
  BsClock,
  BsCheck2Square,
} from "react-icons/bs";

import "./steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <BsPrescription2 />
        <p>Cadastro</p>
      </div>

      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <BsCalendarPlus />
        <p>Alteração</p>
      </div>

      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <BsClock />
        <p>Definição</p>
      </div>

      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <BsCheck2Square />
        <p>Completo</p>
      </div>
    </div>
  );
};

export default Steps;
