import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticPageRoutes } from './StaticPageRoutes';
import { AuthRoutes } from './AuthRoutes';
import { ErrorRoutes } from './ErrorRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <StaticPageRoutes />
      <AuthRoutes />
      <ErrorRoutes />
    </BrowserRouter>
  );
};
