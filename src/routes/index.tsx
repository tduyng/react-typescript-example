import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <AuthRoutes />
    </BrowserRouter>
  );
};
