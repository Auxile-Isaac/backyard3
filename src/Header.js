import React, { useEffect, useState } from 'react';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const style1 = {
    height: "100px",
    width: "50%",
    position: "absolute",
    background: "#2D2D2D",
    zIndex: 3,
    listStyle: "none",
    marginTop: "140px",
    display: "flex",  
    flexDirection: "column",
    borderBottomRightRadius: "8px", 
    marginLeft: "50%" 
}

const List = ({ style }) => {
    return (
        <ul
            style={style}>
            <button className="header__list">Home</button>
            <button className="header__list">Our Menu</button>
            <button className="header__list">Contact Us</button>
            <button className="header__list">Sign Up</button>
            {/* <button className="header__list"><ShoppingCartIcon/></button> */}
        </ul >
    );
};

const MobileList = () => {
    const [actve, setActive] = useState(false)
    return <>
        <button className = "header__dropdown" onClick={() => {
            setActive(!actve);
        }}>{actve ? "close " : "show "}Menu</button>

        {actve && (
        <>
        <List style={style1}/>
        <div
            style={{
                width: "100%",
                height: "100vh",
                // background: "rgba(0,0,0,0.2)",
                // backdropFilter: "blur(10px)",
                // zIndex: 2,
            }}
            onClick={() => {
                setActive(!actve)
            }}
            />
            </>
            )}
    </>
}

function Header() {

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width:990px)").matches
    );

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.matchMedia("(max-width:768px)").matches)
        })
    })
    return (
        <nav className="header">
            <img className="header__logo" src={require("./images/logo.png")} alt="Backyard logo" />
            {isMobile ? (
                <MobileList />
            ) : (
                    <List
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            listStyle: "none",
                            paddingRight: "10px",
                            marginRight: "100px",
                            // color: "white"
                        }}
                    />
                )}
        </nav>
    );
};

export default Header
