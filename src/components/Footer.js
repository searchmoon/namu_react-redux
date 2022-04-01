import React from "react";
import { Link } from "react-router-dom";
import Mail from "./Mail";

function Footer() {
  return (
    <div>
      <Link to="/Mail">moon901212@gmail.com</Link>
      <p>Copyright Ⓒ 문정은 2022. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
