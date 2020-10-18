import React, { useState } from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header1() {

  const [cartCount, setCartCount] = useState(0)
  
  const headerStyle ={
    color: "inherit",
    textDecoration: "none"
  }

  return (
    <div className="header">
      <Link style={headerStyle} to="/">
      <img
        className="header__logo"
        src={require("./images/logo.png")}
        alt="Backyard logo"
      />
      </Link>
      <div className="header__buttons">
        <Link style={headerStyle} to="/login">
          <button className="header__list">Sign Up</button>
        </Link>
        <Link style={headerStyle} to="/cart">
          <div className="header__cart">
            <button className="header__list">
              <ShoppingCartIcon />
            </button>
            <p>0</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header1;
