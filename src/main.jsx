import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Routes/>
    <ToastContainer/>
  </React.StrictMode>
)
