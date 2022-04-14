import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderDiv className="header">
      <InnerDiv className="inner">
        <Link 
        to="/"
        style={{
          textDecoration: "none",
          color: "#fff",
        }}
        ><h1>느린나무2호점</h1>
        </Link>
        <span>test</span>
      </InnerDiv>
    </HeaderDiv>
  );
}
  
  const HeaderDiv = styled.div`
    background-color: #338569;
    font-size: 20px;
    color: rgb(110, 142, 201);
    position: fixed;
    width: 100vw;
  `;
  const InnerDiv = styled.div`
    max-width: 1300px;
    display: flex;
    color: #eee;
    justify-content: space-between;
    padding: 20px;
    margin: 0 auto;
  `;

export default Header;
