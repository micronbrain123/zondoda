// GoogleMapComponent.jsx
import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const GoogleMapComponent = ({ center, zoom = 12, onMapClick }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div className="h-64 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      onClick={(e) => {
        if (onMapClick) {
          onMapClick({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
          });
        }
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
