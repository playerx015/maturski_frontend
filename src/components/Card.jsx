import React from 'react'
import {Link} from 'react-router-dom'

export const Card = (props) => {
    const  { item } = props; // isto kao conts item = props.item;

  return (
    <div>
      <Link to = {`/lokacija/${item.id_lokacije}`}>
       <div style={{backgroundColor:"#282c34", width: 300, height: 400, border: "1px solid silver"}}>
          <h2 style={{marginLeft: 20}}>
            {item.ime}
          </h2>

          <div>
            <img src={`http://localhost:3005/slike/${item.slika}`} style={{width: 300, height: 200}} />
          </div>

          <div style={{padding: 8, overflow: "hidden", height: 80 }}>
            {item.tekst.substring(0, 100)}
          </div>
          <div style={{marginLeft: 20, fontWeight: 700}}>
            {item.tag}
          </div>
        </div>
        </Link>
    </div>
  )
}
