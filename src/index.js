import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./ContextApi/ThemeContext";
// import "react-phone-input-2/lib/style.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <ScrollToTop />
  </BrowserRouter>,
  document.getElementById("root")
);
