import React, { Component } from "react";
import { Circle } from "react-google-maps";

export default props => (
  <Circle
    radius={100}
    center={{ lat: 25.032474, lng: 121.564714 }}
    options={{
      strokeColor: "orange",
      strokeOpacity: 0.5,
      strokeWeight: 20,
      strokeWidth: 10,
      fillColor: "yellow",
      fillOpacity: 0.35
    }}
    {...props}
  />
);
