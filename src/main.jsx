import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import options from "./configs/reactAlert/options";

import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AlertProvider template={AlertTemplate} {...options}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);
