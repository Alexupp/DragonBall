import { useState } from 'react';
import './header.css';

const Header = () => {
    const [counter, setCounter] = useState(0);

    return (
        <header className="header">
            <div className="header-content">
                <img
                    src="/logo_dragonballapi.webp"
                    alt="Logo"
                    className="header-logo"
                />
                <h1 className="header-title">The Dragon Ball API</h1>
            </div>
        </header>
    );
};

export default Header;
