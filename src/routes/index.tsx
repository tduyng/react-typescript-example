import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoutes } from './HomeRoutes';
import { LoginRoutes } from './LoginRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <LoginRoutes />
    </BrowserRouter>
  );
};
