import { useState, useEffect } from 'react'
import "./Header.css";

const Header = () => {

    const [counter, setCounter] = useState(0);

    
    return (
        <header>
            <div id='header-counter'>
            </div>
        </header>
    )
}

export default Header