import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>
);
