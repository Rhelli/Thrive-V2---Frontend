import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './common/Navbar/Navbar';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const App = () => (
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Navbar />
    </Auth0ProviderWithHistory>
  </BrowserRouter>
);

export default App;
