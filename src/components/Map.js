import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";
import Config from "../config";
import Circle from "./Circle";

const { GOOGLE_MAP_API_KEY } = Config;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `${window.innerHeight - 40}px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.032474, lng: 121.564714 }}
    defaultOptions={{ mapTypeControl: false, streetViewControl: false, fullscreenControl: false }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 25.032474, lng: 121.564714 }} />
    )}
    {props.dots.map(item => (
      <Circle
        key={`${item.pos.lat}+${item.pos.lng}`}
        radius={item.res * 1000 / 2}
        center={item.pos}
        val={item.val}
      />
    ))}
  </GoogleMap>
));

export default Map;
