import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="https://thekmr89.github.io/codekmr">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
