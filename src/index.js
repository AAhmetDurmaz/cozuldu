import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

window.delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
