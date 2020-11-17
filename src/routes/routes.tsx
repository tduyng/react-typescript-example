import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomeRoutes from './HomeRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes></HomeRoutes>
    </BrowserRouter>
  );
};

export default Routes;
