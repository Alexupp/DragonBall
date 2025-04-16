import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "./card.css";

const Card = ({ id, nombre, img, especie }) => {
    console.log("Card props:", id, nombre); // 👈 agregá esto
    return (
        <Link to={`/personaje/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box className="charCard">
                <Box className="imageContainer">
                    <img
                        className="characterImage"
                        src={img}
                        alt={nombre}
                    />
                </Box>
                <Box className="contentContainer">
                    <Typography variant="h5" className="characterName">
                        {nombre}
                    </Typography>
                    <Typography variant="body1" className="characterSpecies">
                        {especie}
                    </Typography>
                </Box>
            </Box>
        </Link>
    );
};

export default Card;
