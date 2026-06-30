import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createRootApp } from './main';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <BrowserRouter>
      {createRootApp()}
    </BrowserRouter>
  </React.StrictMode>
);
