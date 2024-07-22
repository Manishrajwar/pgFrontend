import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseProvider } from './context/Firebase';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:rootReducer,
  });
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
    <BrowserRouter>
    <FirebaseProvider>
    <App />
    <Toaster />
    </FirebaseProvider>
    </BrowserRouter>
    </Provider>
);

