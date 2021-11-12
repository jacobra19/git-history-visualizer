import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from '@contexts';
import { ThemeProvider, BaseStyles } from '@primer/components';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <AppContextProvider>
                <BaseStyles>
                    <App />
                </BaseStyles>
            </AppContextProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
