import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";

function Main({ deleteBtn, addLists, setAddLists }) {
  return (
    <div>
      <h1>MENU</h1>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 setAddLists={setAddLists} />
      <OrderListAndRequest addLists={addLists} deleteBtn={deleteBtn} />
      <Routes>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </div>
  );
}
export default Main;
