import {
  AppBar,
  Button,
  Dialog,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './FormUserDetails';
import { StepFormProps } from 'src/@types/stepForm';

const Confirm = (props: StepFormProps) => {
  const { step, setStep, formData } = props;
  const { firstName, lastName, email, occupation, city, bio } = formData;
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
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={prevStep}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={nextStep}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export { Confirm };
