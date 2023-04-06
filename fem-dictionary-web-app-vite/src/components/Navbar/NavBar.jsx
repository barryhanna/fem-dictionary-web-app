import React from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

const NavBar = () => {
    return (
        <nav>
            <img src='/assets/images/logo.svg' alt='' />

            <div className="options">

            <select name="typeface" id="typeface">
                <option value="sans">Sans Serif</option>
                <option value="serif">Serif</option>
                <option value="mono">Monospace</option>
            </select>
            <ToggleButton />
            </div>
        </nav>
    )
}

export default NavBar;