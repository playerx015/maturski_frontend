import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const apiKey = localStorage.getItem("apiKey");
    const korisnik = localStorage.getItem("korisnik");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('apiKey');
        localStorage.removeItem('korisnik');
        navigate("/login");
    }

  return (
    <header>
    <nav>
        <NavLink to="/">Lokacije</NavLink>
        <ul style={{display: "flex"}}>
            <li>
                {!!apiKey && <NavLink to="/unos">Unos</NavLink>}
            </li>
            <li>
                {!apiKey && <NavLink to="/login">Login</NavLink>}
                {!!apiKey && <div onClick={handleLogout} style={{cursor: "pointer", margin: "14px 10px 0 0"}}>Log out {korisnik}</div>}
            </li>
        </ul>
    </nav>
</header>
  )
}

export default Navigation;