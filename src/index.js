import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-am39m9wi.us.auth0.com"
    clientId="m6ekyNC5bJJeJOTLFRSW0pClQks9wPQn"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);


reportWebVitals();
