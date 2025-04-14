import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import './NavBar.css';

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <Typography variant="h6" className="navbar-title">
                    Dragon Ball API
                </Typography>
                <Box className="navbar-buttons">
                    <Button className="navbar-button">Inicio</Button>
                    <Button className="navbar-button">Masculino</Button>
                    <Button className="navbar-button">Femenino</Button>
                    <Button className="navbar-button">Acerca de</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
