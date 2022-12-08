import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import tt from '@tomtom-international/web-sdk-maps';
// import { theme } from '@mui/material/styles';

// Create functional App Component eqaul to a main function
const App = () => {

    const theme = createTheme();
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [ places, setPlaces ] = useState([]);
    const [ bounds, setBounds ] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log(position.coords);
          // map.setCenter([parseFloat(longitude), parseFloat(latitude)]);
          // return (latitude, longitude);
        });
      }, []);

      useEffect(() => {
        let bounds = new tt.LngLatBounds([longitude, latitude], [longitude, latitude]);
            setBounds(bounds.getNorthEast(), bounds.getSouthWest());
            console.log("bounds", bounds)
            console.log("bounds", bounds._sw.lat)
            console.log("bounds", bounds._ne.lng)
            console.log("bounds", bounds._ne.lat)
            //   return (ne, sw);
    }, []);

    useEffect(() => {
        getPlacesData({ latitude, longitude, bounds })
            .then((data) => {
                setPlaces(data);
        })
    }, [latitude, longitude, bounds]);

    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List  places={ places }/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        longitude={longitude}
                        latitude={latitude}
                        setLongitude={setLongitude}
                        setLatitude={setLatitude}
                        setBounds={setBounds}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

export default App;