import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbartop from './components/Navbartop';
import Navbarside from './components/Navbarside';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbartop />
    <Navbarside/>
  </React.StrictMode>
);

