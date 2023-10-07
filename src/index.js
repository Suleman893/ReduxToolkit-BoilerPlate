import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from '../src/app/store'
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
