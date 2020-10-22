import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header1() {
  const [{ basket, user }] = useStateValue();

  const headerStyle = {
    color: "inherit",
    textDecoration: "none",
  };

  const login = () =>{
    if (user){
      auth.signOut();
    }
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
        <Link style={headerStyle} to="/">
          <h4 className="header__list">Home</h4>
        </Link>
        <Link style={headerStyle} to={!user && "/login"}>
          {/* <h5>hello</h5> */}
          <button onClick={login} className="header__list">{user ? "Sign out" : "Sign In"}</button>
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
