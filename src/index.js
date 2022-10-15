//libs
import React from 'react';
import ReactDOM from 'react-dom/client';
//provider
import { AppProvider } from './providers/AppContext';
//Routes
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App/ >
    </AppProvider>
  </React.StrictMode>
);
