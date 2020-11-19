import React from 'react';
import { StepFormProps } from 'src/@types/stepForm';

const Success = props => {
  const { formData } = props;
  return (
    <div>
      <h2>Success</h2>
      <li>FirstName: {formData.firstName}</li>
      <li>LastName: {formData.lastName}</li>
      <li>Email: {formData.email}</li>
      <li>Occupation: {formData.occupation}</li>
      <li>City: {formData.city}</li>
      <li>Bio: {formData.bio}</li>
    </div>
  );
};

export { Success };
