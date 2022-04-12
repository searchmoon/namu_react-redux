import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Order from "./components/Order";
import Mail from "./components/Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/order" element={<Order />}/>
        <Route path="/mail" element={<Mail />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
