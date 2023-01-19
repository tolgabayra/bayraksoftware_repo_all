import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux"
import { store } from "./app/store"
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <NotificationsProvider position='top-right'>
            <App />
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
