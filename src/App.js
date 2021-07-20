import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const App = () => (
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

export default App;
