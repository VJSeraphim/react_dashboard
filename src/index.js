import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './contexts/ContextProvider'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);

reportWebVitals();