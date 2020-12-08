import { Route, Switch } from 'react-router-dom';
import { NotFoundPage } from 'src/pages/ErrorPages/404Pages';
export const ErrorRoutes = () => {
  return (
    <Switch>
      <Route component={NotFoundPage} />;
    </Switch>
  );
};
