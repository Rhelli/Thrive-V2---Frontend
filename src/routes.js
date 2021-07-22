import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/protected-route';
import HomepageContainer from './pages/Homepage/HomepageContainer';
import DashboardContainer from './pages/Dashboard/DashboardContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomepageContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
