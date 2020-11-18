import React, { useState } from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';
import { StepFormType } from 'src/@types/stepForm';

const initialUserState: StepFormType = {
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: '',
};

const StepForm = () => {
  const [formData, setFormData] = useState(initialUserState);
  const [step, setStep] = useState(0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  switch (step) {
    case 0:
      return (
        <FormUserDetails
          step={step}
          setStep={setStep}
          onChange={onChange}
          formData={formData}
        />
      );
    case 1:
      return (
        <FormPersonalDetails
          step={step}
          setStep={setStep}
          onChange={onChange}
          formData={formData}
        />
      );
    case 3:
      return <Confirm step={step} setStep={setStep} formData={formData} />;
    case 4:
      return <Success />;

    default:
      return <div>StepForm Error</div>;
  }
};

export default StepForm;
