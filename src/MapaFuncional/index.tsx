import React from "react";
import GoogleMapReact from "google-map-react";

function MapaFuncional({
  center = {
    lat: 47.6062,
    lng: 122.3321,
  },
  zoom = 11,
  ...props
}) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key:"AIzaSyDx67AXBO2zmnl6nV6_piHwf2rxRBd7AIY"}}
      defaultCenter={props.center}
      defaultZoom={props.zoom}
    />
  );
}

export default MapaFuncional;
