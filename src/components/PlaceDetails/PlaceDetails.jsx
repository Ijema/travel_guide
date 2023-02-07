import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/lab/Rating';

import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();

    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                title={place.name}
                image={place.photo ? place.photo.images.large.url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-VceORc4gFCrBdm8dboGtFz7_0AGPGvnEBJyO18H&s'}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip}/>
                ))}
                {place.address && (
                    <Typography variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {/* Map over all the awards the restuarants have gathered by open a dynamic block*/}
                {/* {place?.award?.map()}  is used to ensure that the place exist first before accessing
                    the awards then mapover it 
                */}
                {/* map accepts a callback function but instead of having a curly braces, 
                    we will have a parenthesis because we want to return a value  
                */}
                {/* {place?.award?.map((awards) => ( */}
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <PhoneIcon />
                    <Typography gutterBottom variant="subtitle2" color="textSecondary">{place.phone}</Typography>
                </Box>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default PlaceDetails;