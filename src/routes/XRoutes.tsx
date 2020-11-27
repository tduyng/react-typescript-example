import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATH } from 'src/contstants/paths';
import { Loading } from 'src/components/Loading';

const StepForm = lazy(() => import('src/pages/StepForm'));

const StepFormRoutes = () => {
  return (
    <Switch>
      <Route
        exact
        path={PATH.STEP_FORM}
        component={() => (
          <Suspense fallback={<Loading />}>
            <StepForm></StepForm>
          </Suspense>
        )}
      />
    </Switch>
  );
};

export { StepFormRoutes };
