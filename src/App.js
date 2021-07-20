import React from 'react';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { BrowserRouter, Switch, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

export default App;