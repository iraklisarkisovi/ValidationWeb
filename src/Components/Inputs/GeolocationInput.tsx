// import React, { useState, useRef, useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// import { useDispatch } from "react-redux";
// import { LatLanInput } from "../../ReduxMainToolkit/ReduxMainSlice";

// const apiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// const LocationInput: React.FC = () => {
//   const dispatch = useDispatch();
//   const [location, setLocation] = useState<string>("");
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [marker, setMarker] = useState<google.maps.Marker | null>(null);
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

//   useEffect(() => {
//     const loader = new Loader({
//       apiKey: apiKey,
//       libraries: ["places"],
//     });

//     loader
//       .load()
//       .then(() => {
//         if (mapRef.current && !map) {
//           const googleMap = new google.maps.Map(mapRef.current, {
//             center: { lat: 0, lng: 0 },
//             zoom: 2,
//           });

//           setMap(googleMap);

//           googleMap.addListener("dblclick", (event: { latLng: google.maps.LatLng | google.maps.LatLngLiteral; }) => {
//             console.log("Double-click event:", event.latLng);
//             placeMarker(event.latLng);   
//           });
//         }

//         if (inputRef.current) {
//           autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current);
//           autocompleteRef.current.addListener("place_changed", () => {
//             const place = autocompleteRef.current?.getPlace();
//             if (place) {
//               setLocation(place.formatted_address || place.name || "");
//               const selectedLocation = place.geometry?.location;
//               if (selectedLocation) {
//                 dispatch(LatLanInput(selectedLocation));   
//                 map?.setCenter(selectedLocation);
//                 map?.setZoom(14);
//                 placeMarker(selectedLocation);   
//               }
//             }
//           });
//         }
//       })
//       .catch((err) => {
//         console.error("Error loading Google Maps:", err);
//       });
//   }, [map]);

//   const placeMarker = (position: google.maps.LatLng | google.maps.LatLngLiteral) => {
//     if (marker) {
//       const currentPosition = marker.getPosition();
//       if (!currentPosition || !currentPosition.equals(position)) {
//         marker.setPosition(position);
//       }
//     } else {
//       const newMarker = new google.maps.Marker({
//         position: position,
//         map: map,
//       });
//       setMarker(newMarker);
//     }
//   };

//   return (
//     <div style={{ margin: "20px" }}>
//       <h2>Google Maps Location Input</h2>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Enter a location"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "10px",
//           fontSize: "16px",
//           border: "1px solid #ccc",
//           borderRadius: "4px",
//         }}
//       />
//       <div
//         ref={mapRef}
//         style={{
//           width: "100%",
//           height: "400px",
//           marginTop: "20px",
//           border: "1px solid #ccc",
//         }}
//       />
//     </div>
//   );
// };

// export default LocationInput;
