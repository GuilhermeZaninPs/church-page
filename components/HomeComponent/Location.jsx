import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility"; 

export const Location = () => {
  return (
    <>
      <div className="mb-[2%] mx-auto rounded-lg">
        <div className="w-[80%] mx-auto rounded-lg ">
          <MapContainer
            center={[51.7802987,-1.265395,18.5]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "50vh", borderRadius: "8px",  }}
          >
            <TileLayer
              attribution='<a href="https://www.google.com/maps/place/St+Michaels+Church+Hall/@51.7797821,-1.2656631,18.25z/data=!4m6!3m5!1s0x4876c41316a168ed:0xa3edc1346e257460!8m2!3d51.7802857!4d-1.2655922!16s%2Fg%2F12cpmmmrs" target="_blank" >Abrir no Google Maps</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.7802987,-1.265395,18.5]}>
              <Popup>
                Venha nos visitar
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Location;
