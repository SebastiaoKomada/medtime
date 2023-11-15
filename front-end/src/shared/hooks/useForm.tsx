import { useState } from "react";

export function useForm(steps: any) {
  const [currentStep, setCurrentStep] = useState(2);

  function changeStep(i: any, e: any) {
    if (e) e.preventDefault(); //para enviar

    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }


  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
    isFirstStep: currentStep === 0 ? true : false,
  };
}
