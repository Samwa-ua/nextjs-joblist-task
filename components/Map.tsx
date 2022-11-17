import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { Location } from "../types/types";
import { CustomMarker } from "./ui/Marker";

const containerStyle = {
  width: "100%",
  height: "180px",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
};

const APIKEY = process.env.NEXT_PUBLIC_API_KEY;

const defaultOptions = {
  panControl: false,
  IzoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  zoomControl: false,
};

const Map = ({ location }: Location) => {
  const center = {
    lat: location.lat,
    lng: location.long,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKEY ? APIKEY : "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={defaultOptions}
    >
      <CustomMarker center={center} />
    </GoogleMap>
  ) : (
    <p>The map is currently unavailable</p>
  );
};

export default React.memo(Map);
