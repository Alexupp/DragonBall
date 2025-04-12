import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function CharacterCard({ name, image, race, gender, ki, maxKi, affiliation }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt={name}
                    sx={{ height: 300, objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div id="cardContent">
                            <div><b>Raza:</b> {race}</div>
                            <div><b>Género:</b> {gender}</div>
                            <div><b>Ki base:</b> {ki}</div>
                            <div><b>Max Ki:</b> {maxKi}</div>
                            <div><b>Afiliación:</b> {affiliation}</div>
                        </div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CharacterCard;

