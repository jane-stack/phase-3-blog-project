import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyle = {
    display: "inline-block",
    width: "auto",
    padding: "12px",
    margin: "0 6px 6px",
    background: "#385949",
    textDecoration: "none",
    color: "white",
  };

function Navbar({setIsLoggedIn}) {
    const history = useHistory();

    function handleLogout() {
        setIsLoggedIn(false);
        history.push("/login");
    }

    return (
        <div>
            <h1>BlogSpace</h1>
            <NavLink to="/" exact style={linkStyle}>BLOG</NavLink>
            <NavLink to="/login" exact style={linkStyle}>LOG IN</NavLink>
            <button onClick={handleLogout} exact style={linkStyle}>LOG OUT</button>
        </div>
    )
}

export default Navbar;