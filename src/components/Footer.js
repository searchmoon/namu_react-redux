import React from "react";
import { Link } from "react-router-dom";
import Order from "./Order";

function Footer() {
  return (
    <div>
      <Link to="/mail">moon901212@gmail.com</Link>
      <p>Copyright Ⓒ 문정은 2022. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
