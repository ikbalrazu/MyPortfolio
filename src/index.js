import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = "https://muhammadiqbalportfolio.onrender.com";
//axios.defaults.baseURL = "http://localhost:8000";

//frontend vercel url
export const frontendurl = "https://muhammadiqbalportfolio.vercel.app";
//export const frontendurl = "http://localhost:3000";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

