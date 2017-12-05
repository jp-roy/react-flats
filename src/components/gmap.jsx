import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import GmapMarker from './marker.jsx';

const Gmap = (props) => {
  let lat, lng;
  if (props.flat) {
    lat = props.flat.lat
    lng = props.flat.lng
  } else {
    lat = 48
    lng = 2
  }

  return (

    <GoogleMapReact
      center={{lat: lat, lng: lng}}
      defaultZoom={13}
    >
      <GmapMarker
        lat={lat}
        lng={lng}
      />
    </GoogleMapReact>
  );
};

export default Gmap
