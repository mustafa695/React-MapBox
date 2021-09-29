import React, { useState, useRef, useCallback } from "react";
import MapGL, {FlyToInterpolator} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";


const MAPBOX_TOKEN =
"pk.eyJ1IjoibXVzdGFmYTQ3IiwiYSI6ImNrdTVhMm10MTRtZ3ozMm5xOXduank3dmoifQ.werjfk2RgOtDvnb5-YxI6A";

function Map() {
 
    const [viewport, setViewport] = useState({
        latitude: 24.860735,
        longitude: 67.001137,
        zoom: 8
      });
      const mapRef = useRef();
      const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
      );
    
      const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000};
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        [handleViewportChange]
      );
    
      return (
        <div style={{ height: "100vh" }}>
          <MapGL
            ref={mapRef}
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            // mapStyle="mapbox://styles/mustafa47/cku5bwul62geg17o5wokegzrz"
            mapStyle='mapbox://styles/mapbox/outdoors-v11'
            transitionDuration={1000}
            
          >
            <Geocoder
              mapRef={mapRef}
              onViewportChange={handleGeocoderViewportChange}
              mapboxApiAccessToken={MAPBOX_TOKEN}
              position="top-left"
            />
          </MapGL>
        </div>
      );
}

export default Map;