import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NOVA_LOKACIJA = {
  ime: "",
  lokacija: "",
  tekst: "",
  slika: null,
  kratak_opis: ""
}

const Unos = () => {
  const [lokacija, setLokacija] = useState(NOVA_LOKACIJA);
  const [prikaz, setPrikaz] = useState(null);
  const navigate = useNavigate();
  const korisnik = localStorage.getItem("korisnik");
   console.log("lok", lokacija)
  useEffect(() => {
    if(!korisnik) navigate("/");
  }, [])

  const handleSubmit = event => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("ime", lokacija.ime);
      formData.append("lokacija", lokacija.lokacija);
      formData.append("tekst", lokacija.tekst);
      formData.append("kratak_opis", lokacija.kratak_opis);
      formData.append("slika", lokacija.slika);


      fetch('http://localhost:3005/api', {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.status === "ok") {
              alert("Lokacija uspeno dodata")
              navigate("/")
            }
        })
        .catch(err => alert(err))
  }

  const handleChange = event => {
      const { name, value} = event.target;
      setLokacija({...lokacija, [name]: value})
  }

  const handleImageChange = event => {
    setLokacija({...lokacija, slika: event.target.files[0]});

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =  e => {
        const binarnaSlika = e.target.result;
        setPrikaz(binarnaSlika)
    };
  }

return (
  <div style={{position: "relative", height: "100vh"}}>
  <div className="login">
      
  <form onSubmit={handleSubmit}>
    <h2>Unos nove lokacije</h2>
    <div>
      <label>Ime:</label><br />
      <input type="text" name="ime" value = {lokacija.ime} onChange = {handleChange} />
    </div>

    <div>
      <label>Lokacija:   </label><br />
      <input type="text" name="lokacija" value = {lokacija.lozinka} onChange={handleChange}/>
    </div>

    <div>
      <label>Tekst:   </label><br />
      <textarea name="tekst" cols="40" rows="10" value={lokacija.tekst} onChange = {handleChange} />
    </div>

    <div>
      <label>Kratak opis:   </label><br />
      <textarea name="kratak_opis"  cols="40" rows="2" value = {lokacija.kratak_opis} onChange = {handleChange} />
    </div>

    <div>
      <label>Slika:   </label><br />
      
      <input type="file" accept="image/*" name="slika" onChange = {handleImageChange} />
      <div>
        {!!prikaz && <img src={prikaz} width="300px" />}
      </div>
    </div>

    <div>
        <input type="submit" value="Sacuvaj" />
    </div>

  </form>
  </div>
  </div>
)
}

export default Unos;
