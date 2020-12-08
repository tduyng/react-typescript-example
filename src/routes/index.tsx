import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticPageRoutes } from './StaticPageRoutes';
import { AuthRoutes } from './AuthRoutes';
import { ProductRoutes } from './ProductRoutes';

export const Routes = () => {
  return (
    <BrowserRouter>
      <StaticPageRoutes />
      <AuthRoutes />
      <ProductRoutes />
    </BrowserRouter>
  );
};
