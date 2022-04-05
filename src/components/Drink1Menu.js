import React from "react";
import IceAndHot from "./IceAndHot";
import styled from "styled-components";

function Drink1Menu({ drink1Menu, setAddLists }) {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `

  return (
    <div>
      {drink1Menu.map((menu) => (
        <Div>
          {menu}
          <IceAndHot menu={menu} setAddLists={setAddLists} />
        </Div>
      ))}
    </div>
  );
}

export default Drink1Menu;
