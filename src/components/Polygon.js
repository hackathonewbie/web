import React, { Component } from 'react';
import { Polygon } from 'react-google-maps';

export default props => (
  <Polygon
    visible
    options={{
      strokeColor: '#0c0',
      strokeOpacity: 0.5,
      strokeWeight: 20,
      strokeWidth: 10,
      fillColor: '#f00',
      fillOpacity: 0.35
    }}
    {...props}
  />
);
