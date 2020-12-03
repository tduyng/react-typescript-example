import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticPageRoutes } from './StaticPageRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <StaticPageRoutes />
      <AuthRoutes />
    </BrowserRouter>
  );
};
