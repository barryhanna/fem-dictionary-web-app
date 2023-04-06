import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src='/assets/images/logo.svg' alt='' />

            <div className="options">
                <select name="typeface" id="typeface">
                    <option value="sans">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Monospace</option>
                </select>
                <ToggleButton />
                <img src="/assets/images/icon-moon.svg" alt="" />
            </div>
        </nav>
    )
}

export default NavBar;