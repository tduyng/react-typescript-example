import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { StepFormProps } from 'src/@types/stepForm';
import { theme } from './FormUserDetails';

const FormPersonalDetails = (props: StepFormProps) => {
  const { step, setStep, formData, setFormData } = props;
  const handleChange = e => {
    setFormData({
      type: 'UPDATE_NEXT',
      payload: { [e.target.name]: e.target.value },
    });
  };
  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };
  const prevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            name="occupation"
            defaultValue={formData.occupation}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            name="city"
            defaultValue={formData.city}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            name="bio"
            defaultValue={formData.bio}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />

          <Button color="secondary" variant="contained" onClick={prevStep}>
            Back
          </Button>
          <Button color="primary" variant="contained" onClick={nextStep}>
            Continue
          </Button>
          <div>
            <h2>Step {step}</h2>
            <li>FirstName: {formData.firstName}</li>
            <li>LastName: {formData.lastName}</li>
            <li>Email: {formData.email}</li>
            <li>Occupation: {formData.occupation}</li>
            <li>City: {formData.city}</li>
            <li>Bio: {formData.bio}</li>
          </div>
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export { FormPersonalDetails };
