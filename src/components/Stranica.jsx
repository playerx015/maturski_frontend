import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import '../index.css';

const getIcon = () => {
    return L.icon({
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    })
}

const Stranica = () => {
    const params = useParams();
    const [lokacija, setLokacija] = useState(null);
    const centar={lat:lokacija?.kordinata_x , lng:lokacija?.kordinata_y}
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/${params.id}`)
        .then(res => res.json())
        .then(data => setLokacija(data))
      },[])

    return (
        <>
            {!lokacija && <div style = {{marginTop : "50px"}} >Loading</div>}
            {!!lokacija && (
                <>
                   <div style = {{marginTop : "50px", width: "100%"}}>
                        <h2 style = {{textAlign : "center"}}>{lokacija.ime}</h2> 
                    </div>
                <div class="grid-container">
                <div class="grid-item">
                <div >
                    <MapContainer zoom={15} center={centar}>
                    <TileLayer
                        url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${process.env.REACT_APP_MAP_API_KEY}`}

                        />
                    <Marker position={centar} icon={getIcon()}>
                        <Popup>
                            {lokacija.kratak_opis}
                        </Popup>
                    </Marker>
                    </MapContainer>
                </div>
                </div>
                <div class="grid-item">
                    <div style={{margin: "auto", width: "80%"}}>
                        <img src ={ `${process.env.REACT_APP_API_URL}/slike/${lokacija.slika}`} width="100%" />
                    </div>
                </div>
                <div class="grid-item">
                <div style={{margin: "auto", width: "70%", height: "550px", overflowY: "scroll"}}>
                            {lokacija.tekst}
                        </div></div>  
 
                </div>

                <div style={{margin: "auto", width: "50%", marginTop: "50px"}}>
                    <Link to="/">Nazad</Link>
                </div>
</>
            )}
    </>
    )
}

export default Stranica;
