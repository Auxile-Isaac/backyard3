import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import {useStateValue} from "./StateProvider";

function Header1() {
  const [{ basket }] = useStateValue();

  const headerStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  console.log(basket);

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
            <p>{basket?.length}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header1;
