import React from "react";

function Header({isDarkMode, onToggleDarkMode}) {
    return (
        <header>
            <h1>BlogSpace</h1>
            <div>
                <button onClick={onToggleDarkMode}>Toggle</button>
            </div>
        </header>
    )
}

export default Header;