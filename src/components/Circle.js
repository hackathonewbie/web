import React from "react";
import { Circle } from "react-google-maps";

const getColor = val => {
  if (val < 5) return 'green';
  if (val < 20) return 'orange';
  return 'red';
}

const getOpacity = val => {
  return val * 1.2;
}

export default props => (
  <Circle
    radius={100}
    center={{ lat: 25.032474, lng: 121.564714 }}
    options={{
      strokeWeight: 0,
      fillColor: getColor(props.val),
      fillOpacity: getOpacity(props.val)
    }}
    {...props}
  />
);
