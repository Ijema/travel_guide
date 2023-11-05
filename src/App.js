import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Maps from './components/Map/Map';
import tt from '@tomtom-international/web-sdk-maps';

const App = () => {
    const theme = createTheme();
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [places, setPlaces] = useState([]);
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState("");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            console.log(position.coords);
        });
    }, [setLatitude, setLongitude]);


    useEffect(() => {
        if (latitude && longitude) {
          if (isNaN(latitude) || latitude < -90 || latitude > 90) {
            console.error("Invalid latitude value");
            return;
          }
          if (isNaN(longitude) || longitude < -180 || longitude > 180) {
            console.error("Invalid longitude value");
            return;
          }
      
          let bounds = {
            southWest: {
              lat: latitude - 0.05,
              lng: longitude - 0.05
            },
            northEast: {
              lat: latitude + 0.05,
              lng: longitude + 0.05
            }
          };
          setBounds(bounds);
          console.log("bounds", bounds);
        }
      }, [latitude, longitude]);
      
    


    useEffect(() => {
        if (bounds) {
            getPlacesData({ bounds }).then((data) => {
                setPlaces(data);
                console.log(data);
            });
        }
    }, [bounds]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Grid container spacing={3} style={{ width: '100%' }}>
                    <Grid item xs={12} md={4}>
                        <List 
                          places={places} 
                          childClicked={childClicked}
                        />
                    </Grid>
                <Grid item xs={12} md={8}>
                    <Maps 
                        longitude={longitude}
                        latitude={latitude}
                        setLongitude={setLongitude}
                        setLatitude={setLatitude}
                        setBounds={setBounds}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    </>
    );
}

export default App;