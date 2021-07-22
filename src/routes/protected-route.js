import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import HomepageContainer from '../pages/Homepage/HomepageContainer';

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <HomepageContainer />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
