import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import LogState from './Context/logs/LogState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <LogState>
                <App />
            </LogState>
        </BrowserRouter>
    // </React.StrictMode>
);