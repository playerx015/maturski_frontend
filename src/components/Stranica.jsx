import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

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
