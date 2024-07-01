import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainContextProvider from './contexts/MainContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MainContextProvider>
          <App />
        </MainContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
