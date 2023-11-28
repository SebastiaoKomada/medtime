/* eslint-disable react/jsx-key */
//ícones
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

//pages
import RegisterForm from "./pages/RegisterForm";
import DateForm from "./pages/DateForm";
import TimeForm from "./pages/TimeForm";
import EndForm from "./pages/EndForm";


import Steps from "./components/Steps/Steps";

//hook
import { useForm } from "../../shared/hooks/useForm";

//css
import "./index.css";
import React from "react";

function Medication() {
  const formComponents = [
    <RegisterForm />,
    <DateForm />,
    <TimeForm />,
    <EndForm />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (

    <div className="container__medication">
      <div className="card__medication">

        <Steps currentStep={currentStep} />

        <form className="form-container__medication" onSubmit={(e) => changeStep(currentStep + 1, e)} >

          <div className="input-container__medication ">
            {currentComponent}
          </div>

          <div className="buttons__medication">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1, null)} className="btn__medication">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}

            {!isLastStep ? (
      
              <button type="submit" className="btn__medication">
                <span>Próximo</span>
                <GrFormNext />
              </button>

            ) : (

              <button type="button" className="btn__medication">
                <span>Enviar</span>
                <FiSend />
              </button>

            )}

          </div>
        </form>
      </div>
    </div>
  );
}

export default Medication;
