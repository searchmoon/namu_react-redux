import React from "react";
import { Link } from "react-router-dom";
import Mail from "./Mail";
import styled from "styled-components";

function Footer() {
  const Div = styled.div`
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #e8e9e8;
    border-top: 1px solid #bbb;
    color: #333;
  `;
  const P = styled.p`
    padding: 5px 0;
  `
  return (
    <div>
      <Div>
        <Link
          to="/Mail"
          style={{
            textDecoration: "none",
            color: "#333",
          }}
        >
          moon901212@gmail.com
        </Link>
        <P>Copyright Ⓒ 문정은 2022. All Rights Reserved.</P>
      </Div>
    </div>
  );
}

export default Footer;
