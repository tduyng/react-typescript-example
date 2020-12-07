import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
import { AuthenticatedGuard } from 'src/guards/AuthenticatedGuard';
const LoginPage = lazy(() => import('src/pages/AuthPages/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/AuthPages/RegisterPage'));
const ProfilePage = lazy(() => import('src/pages/AuthPages/ProfilePage'));

export const AuthRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.LOGIN}
        component={() => (
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        )}
      />
      <Route
        exact
        path={PATH.REGISTER}
        component={() => (
          <Suspense fallback={<Loading />}>
            <RegisterPage />
          </Suspense>
        )}
      />
      <AuthenticatedGuard
        exact
        path={PATH.PROFILE}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ProfilePage />
          </Suspense>
        )}
      />
    </Switch>
  );
};
