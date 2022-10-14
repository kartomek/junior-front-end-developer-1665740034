//libs
import React from 'react';
import ReactDOM from 'react-dom/client';
//containers
import MainPage from './containers/MainPage/MainPage';
//styles
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
