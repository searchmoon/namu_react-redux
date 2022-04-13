import React from "react";
import Drink1 from "./Drink1";
import Drink2 from "./Drink2";
import OrderListAndRequest from "./OrderListAndRequest";
import styled from "styled-components";
import { useState } from "react";

function Main() {
  const [addLists, setAddLists] = useState([]);
  const [error, setError] = useState(false);
  console.log(addLists);

  return (
    <Div>
      <H2>MENU</H2>
      <Drink1 setAddLists={setAddLists} error={error} setError={setError}/>
      <Drink2 setAddLists={setAddLists} error={error} setError={setError}/>
      <OrderListAndRequest addLists={addLists} error={error} setError={setError} setAddLists={setAddLists} />
    </Div>
  );
}

  const Div = styled.div`
    background-color: #f1f8f2;
  `;
  const H2 = styled.h2`
    padding-top: 70px;
  `;

export default Main;
