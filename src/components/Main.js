import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";
import styled from "styled-components";

function Main({ deleteBtn, addLists, setAddLists }) {

  const Div = styled.div`
    background-color: #f1f8f2;
  `
  return (
    <Div>
      <h2>MENU</h2>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 setAddLists={setAddLists} />
      <OrderListAndRequest addLists={addLists} deleteBtn={deleteBtn} />
      <Routes>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </Div>
  );
}
export default Main;
