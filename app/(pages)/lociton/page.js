"use client";
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Location() {
  const [position, setPosition] = useState([31.268062, 29.996171]); // Default position (Alexandria)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="min-h-screen py-10 ml-44 mt-5 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Our Location</h1>
      <div className="w-full h-96">
        <MapContainer center={position} zoom={13} className="w-full h-full rounded-lg">
          {/* Tile layer (base map) */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Location marker */}
          <Marker position={position}>
            <Popup>
              You are here! <br /> Visit us anytime.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Location;
