import React from "react";

import { Button } from "antd";

import LOGO from "../Assets/nav_logo_1 1.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <img
        alt="logo"
        src={LOGO}
        style={{ height: "30px", backgroundSize: "cover" }}
      ></img>
      <div className="NavlinkContainer">
        <ul className="NavlinkList">
          <li className="Navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="Navlink">
            <Link to="/flight-status">Flight Status</Link>
          </li>
          <li className="Navlink">
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
        <Button className="LoginBtn" type="primary">
          LOGIN
        </Button>
      </div>
    </nav>
  );
}
