import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ReactDOMClient from 'react-dom/client';

import { UserProvider } from './contexts/user.context';

import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';


const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
);

reportWebVitals();
