import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root'),
);