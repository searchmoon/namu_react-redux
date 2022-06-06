import React from "react";
import IceAndHot from "./IceAndHot";
import styled from "styled-components";

function CoffeeAndLatteMenu({ drink1Menu }) {
  return (
    <>
      {drink1Menu.map((menu, index) => (
        <WrapDiv key={index}>
          <MenuDiv>{menu}</MenuDiv>
          <IceAndHot menu={menu} />
        </WrapDiv>
      ))}
    </>
  );
}

  const MenuDiv = styled.div`
    width: 90px;
    text-align: center;
  `
  const WrapDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 290px;
    font-weight: 700;
    color: #444;
  `

export default CoffeeAndLatteMenu;
