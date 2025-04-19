import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./card.css";

const Card = ({ id, nombre, img, especie }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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
        </motion.div>
    );
};

export default Card;
