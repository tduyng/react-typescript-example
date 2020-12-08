import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loading } from 'src/components/Loading';
const NotFoundPage = lazy(() => import('src/pages/ErrorPages/404Pages'));
export const ErrorRoutes = () => {
  return (
    <Switch>
      <Route
        component={() => (
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        )}
      />
    </Switch>
  );
};
