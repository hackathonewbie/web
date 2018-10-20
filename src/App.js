import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Polygon,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { compose, withProps } from 'recompose';
import Config from './config';

const { GOOGLE_MAP_API_KEY } = Config;

const MyMap = compose(
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

    <Polygon
    visible
    path={polygonPathPoints}
    options={{
      strokeColor: '#0c0',
      strokeOpacity: 0.5,
      strokeWeight: 20,
      strokeWidth: 10,
      fillColor: '#f00',
      fillOpacity: 0.35
    }}
  />
  </GoogleMap>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <MyMap isMarkerShown />
      </div>
    );
  }
}

export default App;

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
