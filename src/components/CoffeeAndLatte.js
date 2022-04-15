import React from "react";
import CoffeeAndLatteMenu from "./CoffeeAndLatteMenu";
import styled from "styled-components";

function CoffeeAndLatte({ setAddLists, setError, categories }) {
  const coffeeMenu = ["아메리카노", "바닐라 라떼", "카페 라떼", "카페모카"];
  const latteMenu = ["초코 라떼", "말차 라떼"];

  return (
    <Div>
      <h3>{categories[0]}</h3>
      <CoffeeAndLatteMenu
        setAddLists={setAddLists}
        drink1Menu={coffeeMenu}
        setError={setError}
      />
      <h3>{categories[1]}</h3>
      <CoffeeAndLatteMenu
        setAddLists={setAddLists}
        drink1Menu={latteMenu}
        setError={setError}
      />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CoffeeAndLatte;
