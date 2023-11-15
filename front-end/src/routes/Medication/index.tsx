/* eslint-disable react/jsx-key */
import React from "react"; // Certifique-se de importar o React
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import "./index.css"

import RegisterForm from "./pages/RegisterForm";
import DateForm from "./pages/DateForm";
import TimeForm from "./pages/TimeForm";
import EndForm from "./pages/EndForm";
import { useForm } from "../../shared/hooks/useForm";
import Steps from "./components/Steps/Steps";

const Medication = () => { // Adicione o tipo React.FC
    const formComponents = [
        <RegisterForm />,
        <DateForm />,
        <TimeForm />,
        <EndForm />,
    ];

    const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

    return (
        <>
            <div className="form-container max-w-2xl mx-auto bg-white p-6 rounded-md shadow-nxl">
                <Steps currentStep={currentStep} />
                <form
                    className="max-w-400 mx-auto"
                    onSubmit={(e) => changeStep(currentStep + 1, e)}
                >
                    <div className="inputs-container min-h-280">{currentComponent}</div>
                    <div className="actions flex justify-end gap-1">
                        {!isFirstStep && (
                            <button
                                type="button"
                                onClick={(e) => changeStep(currentStep - 1, e)}
                                className="flex  items-center text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition duration-300"
                            >
                                <GrFormPrevious />
                                <span>Voltar</span>
                            </button>
                        )}

                        {!isLastStep ? (
                            <button
                                type="submit"
                                className="flex items-center text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition duration-300"
                            >
                                <span>Próximo</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="flex items-center text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Medication;
