/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './common/Navbar/Navbar';
import Routes from './routes';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const App = () => {
  //const { isLoading } = useAuth0();
//
  //if (isLoading) {
  //  return <Loading />
  //}

  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Navbar />
        <Routes />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default App;
