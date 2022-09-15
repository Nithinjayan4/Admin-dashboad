import React from 'react';
import ReactDOM from 'react-dom/client';
import { DarkModeContextProvider } from "./Context/DarkModeContext";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <DarkModeContextProvider>
    <App />
    </DarkModeContextProvider>
  </React.StrictMode>
);

