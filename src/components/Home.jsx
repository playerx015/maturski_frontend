import React, {useState, useEffect} from "react";

import { Card } from "./Card";

function Home() {

  const[lokacije, setLokacije] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api`)
    .then(res => res.json())
    .then(data => setLokacije(data))
  },[])

  return (
    <div style={{ color:"white", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap", width: "90%", margin: "140px auto"}}>
      {lokacije.map(lokacija => {
        return (
         <Card item={lokacija} key={lokacija.id_lokacije} />
        )
      })}
    </div>
  );
}

export default Home;
