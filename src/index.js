import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CompleteOrder from "./components/CompleteOrder";
import Mail from "./components/Mail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/completeOrder" element={<CompleteOrder />}/>
        <Route path="/mail" element={<Mail />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
