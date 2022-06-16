import React from "react";
import CoffeeAndLatte from "../components/CoffeeAndLatte";
import AdeAndTea from "../components/AdeAndTea";
import OrderListAndRequest from "../components/OrderListAndRequest";
import styled from "styled-components";


function Main({ room }) {
  const categories = ["Coffee", "Latte", "Ade", "Tea"];

  return (
    <Div>
      <H2>MENU</H2>
      <CoffeeAndLatte categories={categories} />
      <AdeAndTea categories={categories} />
      <OrderListAndRequest
        room={room}
      />
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
