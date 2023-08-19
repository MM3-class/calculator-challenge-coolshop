import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// OPERATION CONTEXT
import { RowProvider } from './context/operationContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RowProvider>
    <App />
    </RowProvider>
  </React.StrictMode>
);

