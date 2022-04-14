import React from "react";
import styled from "styled-components";
import logo from "../images/logo_transparent.png";

function Splash() {
  return (
    <WrapDiv>
      <LogoImg src={logo} alt="logo" />
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: #338569;
`;
const LogoImg = styled.img`
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 37%;
`;

export default Splash;
