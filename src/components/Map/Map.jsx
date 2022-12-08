import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand
} from "reactstrap";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

const MAX_ZOOM = 17;

const Map = ({setBounds, latitude, longitude, setLatitude, setLongitude}) => {

  // const isMobile = useMediaQuery('(min-width:600px)');

  const mapElement = useRef();
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});

  // const updateMap = () => {
  //   map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
  // }
  // // console.log(mapLongitude);
// let latitude = 0;
// let longitude = 0;
   

// onMapIdle={() => {
//   let ne = this.map.getBounds().getNorthEast();
//   let sw = this.map.getBounds().getSouthWest();
//   console.log(ne.lat() + ";" + ne.lng());
//   console.log(sw.lat() + ";" + sw.lng());
// }}



  useEffect(() => {
    let map = tt.map({
      /* 
      This key will API key only works on this Stackblitz. To use this code in your own project,
      sign up for an API key on the TomTom Developer Portal.
      */
      key: "NGplbPDThGonnJOqVCai2YUS2yHuNk5A",
      container: mapElement.current,
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom: mapZoom
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
    setMap(map);
    return () => map.remove();
  }, [latitude, longitude, mapZoom]);

  return (
    <div className="App">
      <Container className="mapContainer">
            <div ref={mapElement} className="mapDiv" onChange={(e) => { 
             console.log("errors:", e)
             setLatitude(e.target.value) 
              setLongitude(e.target.value)
              
            }}
            />
            
      </Container>
    </div>
  );
}

export default Map;


