import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Loading from 'src/components/Loading/Loading';
const Home = lazy(() => import('src/pages/Home/Home'));

const HomeRoutes = () => {
  return (
    <Switch>
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    </Switch>
  );
};

export default HomeRoutes;
