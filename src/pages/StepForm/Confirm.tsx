import React from 'react';
import { StepFormProps } from 'src/@types/stepForm';

const Confirm = (props: StepFormProps) => {
  const { step, formData } = props;
  return (
    <div>
      <h2>Confirm</h2>
      <h2>Step {step}</h2>
      <li>FirstName: {formData.firstName}</li>
      <li>LastName: {formData.lastName}</li>
      <li>Email: {formData.email}</li>
      <li>Occupation: {formData.occupation}</li>
      <li>City: {formData.city}</li>
      <li>Bio: {formData.bio}</li>
    </div>
  );
};

export { Confirm };
