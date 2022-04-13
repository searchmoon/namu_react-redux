import React from "react";
import IceAndHot from "./IceAndHot";
import styled from "styled-components";

function Drink1Menu({ drink1Menu, setAddLists, setError }) {
  return (
    <div>
      {drink1Menu.map((menu, index) => (
        <Div key={index}>
          {menu}
          <IceAndHot menu={menu} setAddLists={setAddLists} setError={setError}/>
        </Div>
      ))}
    </div>
  );
}

  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 290px;
    font-weight: 700;
    color: #444;
  `

export default Drink1Menu;
