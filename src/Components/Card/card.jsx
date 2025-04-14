import * as React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import "./card.css";

const Card = (props) => {
    return (
        <Box className="charCard">
            <Box className="imageContainer">
                <img
                    className="characterImage"
                    src={props.img}
                    alt={props.nombre}
                />
            </Box>
            <Box className="contentContainer">
                <Typography variant="h5" className="characterName ">
                    {props.nombre}
                </Typography>
                <Typography variant="body1" className="characterSpecies">
                    {props.especie}
                </Typography>
            </Box>
        </Box>
    );
};

export default Card;