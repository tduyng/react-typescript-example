import React from 'react';
import { FormUserDetails } from './FormUserDetails';
import { FormPersonalDetails } from './FormPersonalDetails';
import { Confirm } from './Confirm';
import { Success } from './Success';
import { StepFormType } from 'src/@types/stepForm';

const FormCases = (step, setStep, formData, setFormData) => [
  {
    title: 'User details',
    content: (
      <FormUserDetails
        step={step}
        setStep={setStep}
        formData={formData}
        setFormData={setFormData}
      />
    ),
  },
  {
    title: 'Personal details',
    content: (
      <FormPersonalDetails
        step={step}
        setStep={setStep}
        formData={formData}
        setFormData={setFormData}
      />
    ),
  },
  {
    title: 'Confirm',
    content: (
      <Confirm
        step={step}
        setStep={setStep}
        formData={formData}
        setFormData={setFormData}
      />
    ),
  },
  {
    title: 'Success',
    content: <Success formData={formData} />,
  },
];

export { FormCases };
