import React, { useState, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { map, Marker } from '@tomtom-international/web-sdk-maps';
import { FullscreenControl, NavigationControl } from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import useMediaQuery from '@mui/material/useMediaQuery';
// import useStyles from './styles';
import './App.css';
import { makeStyles } from '@mui/styles';


const Maps = ({setBounds, latitude, longitude, setLatitude, setLongitude, places, setChildClicked}) => {

const isDesktop = useMediaQuery('(min-width:600px)');
const mapElement = useRef();
const [mapZoom, setMapZoom] = useState(13);
const [tomtomMap, setTomtomMap] = useState({});
const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d3d4d5',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  typography: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  pointer: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    marginBottom: theme.spacing(1),
  },
}));
const classes = useStyles();

useEffect(() => {
  let map = tt.map({
    key: "NGplbPDThGonnJOqVCai2YUS2yHuNk5A",
    container: mapElement.current,
    center: {
      lat: latitude,
      lng: longitude
    },
    zoom: mapZoom
  });
  map.addControl(new FullscreenControl());
  map.addControl(new NavigationControl());

  const MarkerComponent = ({ place }) => {
    if (isNaN(place.latitude) || isNaN(place.longitude)) {
      console.log("Latitude or Longitude does not exist");
      return null;
    }

    return (
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant="subtitle2" gutterBottom>{place.name}</Typography>
          <img
            className={classes.pointer}
            src={
              place.photo
                ? place.photo.images.large.url
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt={place.name}
          />
          <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
        </Paper>
      );
    };

    const markers = places
      .filter(place => place.latitude && place.longitude)
      .map((place, i) => {
        // const isDesktop = useMediaQuery('(min-width:600px)');;
        return isDesktop
          ? new tt.Marker({
              icon: marker => (
                <img
                  onClick={() => setChildClicked(place)}
                  src={place.photo.images.large.url}
                  alt={place.name}
                />
              )
            })
              .setLngLat([place.longitude, place.latitude])
              .on("click", () => setChildClicked(place))
          : new tt.Marker({ icon: marker => <MarkerComponent place={place} /> })
              .setLngLat([place.longitude, place.latitude])
              .on("click", () => setChildClicked(place));
      });

    markers.forEach(marker => marker.addTo(map));

    map.on("move", () => {
      setLatitude(map.getCenter().lat);
      setLongitude(map.getCenter().lng);
  });

  map.on("moveend", () => {
    setBounds(map.getBounds());
  });

  setTomtomMap(map);
  return () => map.remove();
}, [latitude, longitude, places, mapZoom]);

return (
  <div className="App">
    <Container className={classes.mapContainer}>
      <div ref={mapElement} className="mapDiv" />
    </Container>
  </div>
);
};

export default Maps;