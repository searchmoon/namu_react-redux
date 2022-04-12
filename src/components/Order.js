import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import HeaderDiv from "./Header";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  `;

const WrapDiv = styled.div`
  background-color: #f1f8f2;
  height: 100vh;
`;
const Div = styled.div`
  width: 50vw;
  min-height: 15vh;
  border: 2px dashed rgb(56, 141, 113);
  color: #333;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const P = styled.p`
  font-size: 20px;
  /* color: rgb(56, 141, 113); */
  color: #555;
  margin: 5px;
`;

function Order() {

  return (
    <WrapDiv>
      <GlobalStyle />
      <HeaderDiv />
      <Div>
        <P>주문이 완료</P>
        <P>되었습니다^^</P>
      </Div>
    </WrapDiv>
  );
}

export default Order;
