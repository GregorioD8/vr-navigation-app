// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'; // Basic global styles
import './Shaders.js'; // Register shaders and custom components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);