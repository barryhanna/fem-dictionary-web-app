import React from "react";

const ToggleButton = () => {
    const [toggle, setToggle] = React.useState(false);

    const handleClick = (e) => {
        setToggle(!toggle);
    }

    return (<button className={`toggle-button${toggle ? ' on': ''}`} onClick={handleClick}></button>)
}

export default ToggleButton;