import React from 'react';
import { useMemo, useState, useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {Wrapper} from "@googlemaps/react-wrapper" 
import ReactDOM from 'react-dom/client';
import './index.css';
import './globals.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const google = window.google

let markers = [];
const BOUNDS = {
  north: 38.96,
  south: 38.925,
  west: -92.38,
  east: -92.28,
};

const mapOptions = {
  //mapId: process.env.NEXT_PUBLIC_MAP_ID,
  center: { lat: 37.9485, lng: -91.7715 },
  zoom: 12,
  disableDefaultUI: true,
};

const markerArray = {
  A: {
    name: "Bruh 1",
    position: {lat: 43.66293, lng: -79.39314 },
  },
  B: {
    name: "Bruh 2",
    position: {lat: 43.544811, lng: -80.248108},
  },
};

// function Weather({map}){
//   const [data, setData] = useState(markerArray);
//   return <>{Object.entries(data).map(([key, weather]) => (
//     <Marker map={map} />
//     ))}
//     </>
// }

const customIcon = "https://www.example.com/custom-icon.png"
export function setMarkers(map){
  const image1 = {
    src: "SmallTrashIndicator.png", //add this
    // size(wide, high) of image of marker
    size: new google.maps.Size(20, 32),
    //origin for the image
    origin: new google.maps.Point(0,0),
    // anchor (very bottom) is (0,32) within the image marker
    anchor: new google.maps.Point(0, 32),
  };
  //shape is clickable region of icon
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
}
// async function initialize() {
//   var map = new google.maps.Map(document.getElementById("map_canvas"), {
//     center: new google.maps.LatLng(37.9485, -91.7715),
//     restriction: {
//       LatLngBounds: BOUNDS,
//       strictBounds: false,
//     },
//     zoom: 15,
//     mapTypeId: google.maps.mapTypeId.ROADMAP,
//     mapTypeControl: false,
//     streetViewControl: false,
//     styles: [
//       {
//         featureType: "poi",
//         stylers: [{ visibility: "off"}],
//       },
//     ],
//   });

//   map.addListener("click", (e) => {
//     if (document.getElementById("sidebar").style.display === "block"){
//       placeMarkerAndPanTo(e.LatLng, map);
//       const latitude = markers[0].position.lat();
//       const longitude = markers[0].position.lng();
//       localStorage.setItem("long", longitude);
//       localStorage.setItem("lat", latitude);
//     }
//   });

//   //

//   //create cards?
// }

export function initMap() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyDBgWOKCfJD5evMvjD_3U3FzGGvTHucSIw",
  // });

  let mapOptions = {
    center: { lat: 37.9485, lng: -91.7715 },
    zoom: 12,
    disableDefaultUI: true,
  }
  let map = new google.maps.Map(document.getElementById('map'))
  let markerOptions = { 
    position: new google.maps.LatLng(37.9490, -91.7720),
    map: map
  }
  let marker = new google.maps.Marker(markerOptions)
  marker.setMap(map);

}

function MyMap() {
  const [map, setMap] = useState();
  const ref = useRef();

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} id="map" />
      {map}
    </>
  );
}

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDBgWOKCfJD5evMvjD_3U3FzGGvTHucSIw",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export function Map() {
  const center = useMemo(() => ({ lat: 37.9485, lng: -91.7715 }), []);
  const markerPosition = useMemo(() => ({ lat: 37.9490, lng: -91.7720 }), []); // adjust the position of the marker here

  return (
    <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
      <Marker position={markerPosition} icon={{scaledSize: new window.google.maps.Size(50,50),}} />
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
