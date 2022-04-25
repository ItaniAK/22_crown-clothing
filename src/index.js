import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as ReactDOMClient from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.scss';


const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();
