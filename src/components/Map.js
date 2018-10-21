import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import { debounce } from "lodash";
import Config from "../config";
import Circle from "./Circle";

const { GOOGLE_MAP_API_KEY } = Config;
const API_ENDPOINT = '/chlor_a/'

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `${window.innerHeight - 40}px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: debounce(() => {
          const { b, f } = refs.map.getBounds();

          if (refs.map.getZoom() < 12) {
            this.props.fetchData(`${API_ENDPOINT}?lat1=${f.f}&lon1=${b.b}&lat2=${f.b}&lon2=${b.f}`)
          }
        }, 300)
      });
    },
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={8}
    defaultCenter={{ lat: 25.032474, lng: 121.564714 }}
    defaultOptions={{ maxZoom: 11, minZoom: 8, mapTypeControl: false, streetViewControl: false, fullscreenControl: false }}
    onBoundsChanged={props.onBoundsChanged}
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
        onMouseOver={() => {props.updateHoverTarget({
          lat: item.pos.lat,
          lng: item.pos.lng,
          val: item.val,
        })}}
        onMouseOut={() => {props.updateHoverTarget({})}}
      />
    ))}
  </GoogleMap>
));

export default Map;
