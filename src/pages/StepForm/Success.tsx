import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './FormUserDetails';
import { AppBar, Dialog } from '@material-ui/core';

const Success = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions.</p>
        </Dialog>
      </>
    </ThemeProvider>
  );
};

export { Success };
