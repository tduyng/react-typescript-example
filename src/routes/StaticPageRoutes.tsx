import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
const HomePage = lazy(() => import('src/pages/HomePage'));
const ContactPage = lazy(() => import('src/pages/ContactPage'));
const Demo1Page = lazy(() => import('src/pages/Demo1Page'));
const Demo2Page = lazy(() => import('src/pages/Demo2Page'));
const Feature1Page = lazy(() => import('src/pages/Feature1Page'));
const Feature2Page = lazy(() => import('src/pages/Feature2Page'));

export const StaticPageRoutes = () => {
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
      <Route
        path={PATH.CONTACT}
        component={() => (
          <Suspense fallback={<Loading />}>
            <ContactPage />
          </Suspense>
        )}
      />
      <Route
        path={PATH.DEMO1}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Demo1Page />
          </Suspense>
        )}
      />
      <Route
        path={PATH.DEMO2}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Demo2Page />
          </Suspense>
        )}
      />
      <Route
        path={PATH.FEATURE1}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Feature1Page />
          </Suspense>
        )}
      />
      <Route
        path={PATH.FEATURE1}
        component={() => (
          <Suspense fallback={<Loading />}>
            <Feature2Page />
          </Suspense>
        )}
      />
    </Switch>
  );
};
