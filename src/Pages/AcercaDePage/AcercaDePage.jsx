import './AcercaDePage.css';
import Navbar from '../../Components/NavBar/Navbar';
import { Container, Typography, Card, CardContent, Avatar, Chip, Box, Stack, Link, Divider } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

function AcercaPage() {
    return (
        <>
            <Navbar />
            <Container className="acerca-container">
                <Card className="acerca-card">
                    <CardContent>
                        <div className="acerca-header">
                            <Avatar
                                alt="Mi foto"
                                src="/Foto-Alex.jpg"
                                className="acerca-avatar"
                            />
                            <Typography variant="h4" component="h2">
                                Alexander Pérez Correa
                            </Typography>
                            <Typography variant="subtitle1" className="acerca-subtitulo-secundario">
                                Desarrollador Frontend | Estudiante de Ingeniería de Sistemas
                            </Typography>
                        </div>

                        <Divider className="acerca-divider" />

                        <Typography variant="body1" className="acerca-text">
                            ¡Hola! Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Este proyecto fue desarrollado con React y la API de Dragon Ball. Me especializo en crear interfaces intuitivas y modernas. 💻
                        </Typography>

                        <Divider className="acerca-divider" />

                        <Typography variant="h6" className="acerca-subtitulo">Habilidades</Typography>
                        <Stack direction="row" spacing={1} className="acerca-chips">
                            <Chip label="React" color="primary" />
                            <Chip label="JavaScript" color="success" />
                            <Chip label="HTML/CSS" color="secondary" />
                            <Chip label="Git & GitHub" color="default" />
                            <Chip label="API REST" color="info" />
                        </Stack>

                        <Divider className="acerca-divider" />

                        <Typography variant="h6" className="acerca-subtitulo">Contacto</Typography>
                        <Box className="acerca-contacto">
                            <Link href="mailto:alexan.perez@udla.edu.co" target="_blank">
                                <Email /> alexan.perez@udla.edu.co
                            </Link>
                            <Link href="https://github.com/Alexupp" target="_blank">
                                <GitHub /> github.com/Alexupp
                            </Link>
                            <Link href="https://www.instagram.com/alexander_correa31/" target="_blank">
                                <Instagram /> instagram.com/Alex
                            </Link>
                        </Box>

                        <Divider className="acerca-divider" />

                        <Typography variant="caption" display="block" className="acerca-footer">
                            &copy; 2025 Alexander Pérez Correa - Proyecto Dragon Ball API
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

export default AcercaPage;
