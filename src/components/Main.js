import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";
import styled from "styled-components";

function Main({ deleteBtn, addLists, setAddLists }) {

  const H1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 25px;
    font-weight: 700;
  `
  return (
    <div>
      <H1>MENU</H1>
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
