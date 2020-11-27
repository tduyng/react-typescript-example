import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
    </BrowserRouter>
  );
};
