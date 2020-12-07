import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const LoginPage = lazy(() => import('src/pages/AuthPages/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/AuthPages/RegisterPage'));

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        )}
      />
      <Route
        path={PATH.REGISTER}
        component={() => (
          <Suspense fallback={<Loading />}>
            <RegisterPage />
          </Suspense>
        )}
      />
    </Switch>
  );
};
