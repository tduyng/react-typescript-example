import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { StepFormRoutes } from './StepFormRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes></HomeRoutes>
      <StepFormRoutes />
    </BrowserRouter>
  );
};

export default Routes;
