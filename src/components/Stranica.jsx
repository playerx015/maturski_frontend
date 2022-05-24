import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {MapContainer, TileLayer} from 'react-leaflet'

import "leaflet/dist/leaflet.css";
import '../index.css';

const Stranica = () => {
    const params = useParams();
    const [lokacija, setLokacija] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3005/api/${params.id}`)
        .then(res => res.json())
        .then(data => setLokacija(data))
      },[])

    return (
        <>
        <div style={{position: "relative"}}>
                            <div style={{position: "absolute", top: 65, left: 10}}>
                                <MapContainer zoom={15} center={{lat:44.473294 , lng:20.568483}}>
                                <TileLayer
                                    url="https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=xTAI4G9nYmojQ7AVVFx4"

                                    />
                                </MapContainer>
                            </div>
                         </div>

            {!lokacija && <div style = {{marginTop : "50px"}} >Loading</div>}
            {!!lokacija && (
                <div style = {{marginTop : "50px", width: "100%"}}>
                        <h2 style = {{textAlign : "center"}}>{lokacija.ime}</h2> 

                        <div style={{margin: "auto", width: "40%"}}>
                            <img src ={ `http://localhost:3005/slike/${lokacija.slika}`} width="100%" />
                        </div>
                        
                        <div style={{margin: "auto", width: "50%"}}>
                            {lokacija.tekst}
                        </div>
                        <div style={{margin: "auto", width: "50%", marginTop: "50px"}}>
                            <Link to="/">Nazad</Link>
                        </div>
                </div>
            )}
    </>
    )
}

export default Stranica;
