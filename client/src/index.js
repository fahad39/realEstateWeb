import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react"
import { MantineProvider,createTheme } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Your theme configuration is merged with default theme
const theme = createTheme({
  "z-index":100
});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        authorizationParams={{
          redirect_uri:"http://localhost:3000",
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
