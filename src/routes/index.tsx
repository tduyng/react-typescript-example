import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
// import { StepFormRoutes } from './XRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      {/* <StepFormRoutes /> */}
    </BrowserRouter>
  );
};
