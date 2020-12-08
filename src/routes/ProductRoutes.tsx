import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
import { AuthenticatedGuard } from 'src/guards/AuthenticatedGuard';
const ProductList = lazy(
  () => import('src/pages/ProductPages/ProductListPage'),
);
const ProductItem = lazy(
  () => import('src/pages/ProductPages/ProductItemPage'),
);

export const AuthRoutes = () => {
  return (
    <Switch>
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCTS}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductList />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PRODUCTS + '/:id'}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProductItem />
          </Suspense>
        )}
      />
    </Switch>
  );
};
