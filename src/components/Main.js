import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import { Routes, Route } from "react-router-dom";
import Order from "./Order";
import styled from "styled-components";
import { useState } from "react";

const Div = styled.div`
  background-color: #f1f8f2;
`
const H2 = styled.h2`
/* margin-top: 60px; */
`

function Main() {
  let [addLists, setAddLists] = useState([]);

  return (
    <Div>
      <H2>MENU</H2>
      <Drink1 setAddLists={setAddLists} />
      <Drink2 setAddLists={setAddLists} />
      <OrderListAndRequest addLists={addLists} setAddLists={setAddLists}/>
      <Routes>
        <Route path="/order" element={<Order />}/>
      </Routes>
    </Div>
  );
}
export default Main;
