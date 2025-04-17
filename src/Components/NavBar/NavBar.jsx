import React from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import './NavBar.css';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <Link to="/" className="navbar-logo-container">
                    <img src="/icono_navbar.webp" alt="Logo Dragon Ball" className="navbar-logo" />
                </Link>
                <Box className="navbar-buttons">
                    <Button component={Link} to="/" className="navbar-button">Inicio</Button>
                    <Button component={Link} to="/masculino" className="navbar-button">Masculino</Button>
                    <Button component={Link} to="/femenino" className="navbar-button">Femenino</Button>
                    <Button component={Link} to="/acerca" className="navbar-button">Acerca de</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
