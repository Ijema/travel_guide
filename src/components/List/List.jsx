import React, { useEffect, useState, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'; 

import placeDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked }) =>{
    const classes = useStyles();
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [placesRef, setPlacesRef] = useState([]);

    console.log({childClicked})

    useEffect(() => {
        // (_,i) means you can skip the first argument
        const ref = Array(places.length).fill().map((_, i) => placesRef[i] || createRef());
        setPlacesRef(ref);
    },[places])
    return(
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions Around You</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Ratings</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails 
                            place={place} 
                            selected={Number(childClicked === i)}
                            refProp={placesRef[i]}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;