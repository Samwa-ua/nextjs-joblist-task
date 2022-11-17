import { Marker } from "@react-google-maps/api";
import { CustomMarkerProps } from "../../types/types";

export const CustomMarker = ({ center }: CustomMarkerProps) => {
  return (
    <Marker
      position={center}
      icon={{
        path: "M28 12.7C28 6.23827 22.1797 1 15 1C7.8203 1 2 6.23827 2 12.7C2 16.8164 5.95671 24.3953 13.8701 35.4368L15 37L16.6756 34.6721L17.2347 33.8813C24.4116 23.6805 28 16.6201 28 12.7ZM8.5 13.5217C8.5 10.064 11.4101 7.26087 15 7.26087C18.5899 7.26087 21.5 10.064 21.5 13.5217C21.5 16.9795 18.5899 19.7826 15 19.7826C11.4101 19.7826 8.5 16.9795 8.5 13.5217Z",
        fillColor: " #D8D8D8",
        fillOpacity: 0.9,
        scale: 1,
        strokeColor: "#D8D8D8",
        anchor: new google.maps.Point(15, 30),
      }}
    />
  );
};
