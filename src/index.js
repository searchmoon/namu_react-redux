import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CompleteOrder from "./pages/CompleteOrder";
import Mail from "./pages/Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:room" element={<App />} />
        <Route path="/completeOrder" element={<CompleteOrder />} />
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
