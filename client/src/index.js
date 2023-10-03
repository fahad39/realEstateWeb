import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react"
import { MantineProvider,createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Your theme configuration is merged with default theme

// Development redirect URI:  http://localhost:3000

root.render(
  <React.StrictMode>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri:"https://real-estate-web-alpha.vercel.app",
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
      >
        <MantineProvider>

          <App />
        </MantineProvider>
      </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
