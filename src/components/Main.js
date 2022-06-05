import React from "react";
import CoffeeAndLatte from "./CoffeeAndLatte";
import AdeAndTea from "./AdeAndTea";
import OrderListAndRequest from "./OrderListAndRequest";
import styled from "styled-components";
import { useState } from "react";

function Main({room}) {
  const categories = ["Coffee", "Latte", "Ade", "Tea"];
  const [request, setRequest] = useState("");
  const [error, setError] = useState(false);

  return (
    <Div>
      <H2>MENU</H2>
      <CoffeeAndLatte
        error={error}
        setError={setError}
        categories={categories}
      />
      <AdeAndTea
        error={error}
        setError={setError}
        categories={categories}
      />
      <OrderListAndRequest
        error={error}
        setError={setError}
        request={request}
        setRequest={setRequest}
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
