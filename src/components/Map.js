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
import Polygon from "./Polygon";

const { GOOGLE_MAP_API_KEY } = Config;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.032474, lng: 121.564714 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 25.032474, lng: 121.564714 }} />
    )}
    {dots.map(item => (
      <Circle radius={item.radius * 1000} center={item.pos} />
    ))}
    <Polygon path={polygonPathPoints} />
  </GoogleMap>
));

const polygonPathPoints = [
  { lat: 25.032474, lng: 121.564714 },
  { lat: 25.033018, lng: 121.563534 },
  { lat: 25.034477, lng: 121.562954 },
  { lat: 25.035157, lng: 121.56333 },
  { lat: 25.035157, lng: 121.563941 },
  { lat: 25.034622, lng: 121.564617 },
  { lat: 25.035147, lng: 121.56539 },
  { lat: 25.035021, lng: 121.565958 },
  { lat: 25.034341, lng: 121.566237 },
  { lat: 25.033252, lng: 121.565915 }
];

export default Map;
