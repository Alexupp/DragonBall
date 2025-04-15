import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom'; 
import './NavBar.css';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" className="navbar-title">
                    Dragon Ball API
                </Typography>
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
