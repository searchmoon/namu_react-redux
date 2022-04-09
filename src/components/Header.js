import React from "react";
import styled from "styled-components";

function Header() {
  const HeaderDiv = styled.div`
    background-color: rgb(56, 141, 113);
    /* background-color: #6c8a75; */
    color: rgb(110, 142, 201);
  `
  const InnerDiv = styled.div`
    max-width: 1300px;
    display: flex;
    color: #eee;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;
  `

  return (
    <HeaderDiv className="header">
      <InnerDiv className="inner">
        <h1>느린나무2호점</h1>
        <span>test</span>
      </InnerDiv>
    </HeaderDiv>
  );
}

export default Header;
