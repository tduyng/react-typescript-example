import React, { useState, useReducer } from 'react';
import { DefaultForm, FormReducer } from './formReducer';
import { FormCases } from './formCases';

const StepForm = () => {
  const [formData, setFormData] = useReducer(FormReducer, DefaultForm);
  let [step, setStep] = useState(0);
  let formCases = FormCases(step, setStep, formData, setFormData);

  switch (step) {
    case 0:
      return formCases[0].content;
    case 1:
      return formCases[1].content;
    case 2:
      return formCases[2].content;
    case 3:
      return formCases[3].content;

    default:
      return <div>StepForm Error</div>;
  }
};

export default StepForm;
