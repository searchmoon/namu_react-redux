import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <Div>
      <Link
        to="/Mail"
        style={{
          textDecoration: "none",
          color: "#777",
        }}
      >
        moon901212@gmail.com
      </Link>
      <P>Copyright Ⓒ 문정은 2022. All Rights Reserved.</P>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #eee;
  border-top: 1px solid #ddd;
  color: #777;
  font-size: 12px;
`;
const P = styled.p`
  padding: 7px 0;
`;

export default Footer;
