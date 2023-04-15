import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import ReactDOM from 'react-dom/client';
import './index.css';
import './globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBgWOKCfJD5evMvjD_3U3FzGGvTHucSIw",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export function Map() {
  const center = useMemo(() => ({ lat: 37.9485, lng: -91.7715 }), []);
  const markerPosition = useMemo(() => ({ lat: 37.9485, lng: -91.7715 }), []); // adjust the position of the marker here

  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
      <Marker position={markerPosition} />
    </GoogleMap>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
