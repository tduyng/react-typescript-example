import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
import { Loading } from 'src/components/Loading';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

// ---> Static pages
const HomePage = lazy(() => import('src/pages/HomePages/HomePage'));
const ContactPage = lazy(() => import('src/pages/StaticPages/ContactPage'));
const AboutPage = lazy(() => import('src/pages/StaticPages/AboutPage'));
const Demo1Page = lazy(() => import('src/pages/StaticPages/Demo1Page'));
const Demo2Page = lazy(() => import('src/pages/StaticPages/Demo2Page'));
const Feature1Page = lazy(() => import('src/pages/StaticPages/Feature1Page'));
const Feature2Page = lazy(() => import('src/pages/StaticPages/Feature2Page'));

// ---> Auth pages
const LoginPage = lazy(() => import('src/pages/AuthPages/LoginPage'));
const RegisterPage = lazy(() => import('src/pages/AuthPages/RegisterPage'));
const ProfilePage = lazy(() => import('src/pages/AuthPages/ProfilePage'));

// ---> Products pages
const ProductListPage = lazy(
  () => import('src/pages/ProductPages/ProductListPage'),
);
const ProductItemPage = lazy(
  () => import('src/pages/ProductPages/ProductItemPage'),
);

// ---> Error pages
const NotFoundPage = lazy(() => import('src/pages/ErrorPages/404Pages'));

export const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          {/* Static pages routes */}
          <Route exact path={PATH.HOME} component={HomePage} />
          <Route exact path={PATH.ABOUT} component={AboutPage} />
          <Route exact path={PATH.DEMO1} component={Demo1Page} />
          <Route exact path={PATH.DEMO2} component={Demo2Page} />
          <Route exact path={PATH.FEATURE1} component={Feature1Page} />
          <Route exact path={PATH.FEATURE2} component={Feature2Page} />
          <Route exact path={PATH.CONTACT} component={ContactPage} />

          {/* Auth routes */}
          <Route exact path={PATH.LOGIN} component={LoginPage} />
          <Route exact path={PATH.REGISTER} component={RegisterPage} />
          <PrivateRoute exact path={PATH.PROFILE} component={ProfilePage} />

          {/* Products routes */}
          <PrivateRoute
            exact
            path={PATH.PRODUCTS}
            component={ProductListPage}
          />
          <PrivateRoute
            exact
            path={PATH.PRODUCTS + '/:id'}
            component={ProductItemPage}
          />

          {/* Error routes */}
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
