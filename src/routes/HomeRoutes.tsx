import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/contstants/paths';
import { Loading } from 'src/components/Loading';
const HomePage = lazy(() => import('src/pages/HomePage'));

const HomeRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.HOME}
        component={() => (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )}
      ></Route>
    </Switch>
  );
};

export { HomeRoutes };
