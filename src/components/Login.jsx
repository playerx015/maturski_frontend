import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';

const Login = () => {
    const [korisnik, setKorinik] = useState({ime: "", lozinka: ""});
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:3005/api/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(korisnik)
          })
          .then(res => res.json())
          .then(data => {
              if(data.status === "ok") {
                localStorage.setItem("apiKey", data.apiKey) //u profi aplikaciji ovo mora biti zasticeno drugacije (jwt)
                localStorage.setItem("korisnik", korisnik.ime)
                navigate("/")
              }
          })
          .catch(err => alert(err))
    }

    const handleChange = event => {
        const { name, value} = event.target;
        setKorinik({...korisnik, [name]: value})
    }

  return (
    <div style={{position: "relative", height: "100vh"}}>
    <div className="login">
        
    <form onSubmit={handleSubmit}>
      <div>
        <label>Korisnicko ime:</label><br />
        <input type="text" name="ime" value = {korisnik.ime} onChange = {handleChange} />
      </div>

      <div>
        <label>Lozinka:   </label><br />
        <input type="password" name="lozinka" value = {korisnik.lozinka} onChange = {handleChange}/>
      </div>

      <div>
          <input type="submit" value="Sacuvaj" />
      </div>

    </form>
    </div>
    </div>
  )
}

export default Login;
