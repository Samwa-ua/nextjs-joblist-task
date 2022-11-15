import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
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

const Map = (props: any) => {
  const center = {
    lat: props.location.lat,
    lng: props.location.long,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: APIKEY ? APIKEY : "",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <CustomMarker center={center} />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
