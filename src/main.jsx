import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import App from "./App.jsx";
import "./index.css";
// Supports weights 100-900
import "@fontsource-variable/inter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
 <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
);
