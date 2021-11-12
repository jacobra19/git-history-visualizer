import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from '@contexts';
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
