import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';  // reset + fondo + animaciones
import './App.css';    // layout general

import App from './App';
import { Provider } from 'react-redux';
import store          from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    );
