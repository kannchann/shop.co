import { useEffect, useRef } from "react";
import leaflet from "leaflet";

type Props = {};

const Map = (props: Props) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<leaflet.Map | null>(null); // To store the map instance

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = leaflet
        .map(mapRef.current)
        .setView([27.7116, 85.2989], 13);

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors",
        })
        .addTo(mapInstanceRef.current);

      leaflet
        .marker([27.7116, 85.2989])
        .addTo(mapInstanceRef.current)
        .bindPopup("here I am")
        .openPopup();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div id="map" className="h-[570px] w-[670px]" ref={mapRef}></div>;
};

export default Map;
