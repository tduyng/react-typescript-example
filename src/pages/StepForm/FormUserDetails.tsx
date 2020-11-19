import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const FormUserDetails = ({ step, setStep, formData, setFormData }) => {
  const handleChange = e => {
    setFormData({
      type: 'UPDATE_FIRST',
      payload: { [e.target.name]: e.target.value },
    });
  };
  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            name="firstName"
            defaultValue={formData.firstName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            name="lastName"
            defaultValue={formData.lastName}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            type="email"
            name="email"
            defaultValue={formData.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
          <br />
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

export { FormUserDetails };
