import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/protected-route';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import DashboardContainer from './pages/Dashboard/DashboardContainer';
import ExternalApiTest from './api/ExternalApiTest';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <Route path="/external-api-call" component={ExternalApiTest} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
