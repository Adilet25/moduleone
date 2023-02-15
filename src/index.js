import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Commissioner', sans-serif;

}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
