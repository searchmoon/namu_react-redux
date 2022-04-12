import React from "react";
import styled from "styled-components";
import logo from "../images/logo-1.png";
// import logo from "../images/logo_transparent.png";

function Splash() {
  return (
    <WrapDiv>
      <Div>
        <LogoImg src={logo} alt="logo" />
      </Div>
    </WrapDiv>
  );
}

const WrapDiv = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: #338569;
  /* position: fixed; */
`;
const Div = styled.div`
  width: 200px;
`;
const LogoImg = styled.img`
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border-radius: 38%; */
  border-radius: 5%;
`;
// const Title = styled.p`

// `
export default Splash;
