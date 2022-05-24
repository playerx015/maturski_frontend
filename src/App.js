import React from "react";
import {Route, Routes} from "react-router-dom"
import  Home  from "./components/Home";
import Login from "./components/Login";
import Unos from "./components/Unos";
import Stranica from "./components/Stranica"
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unos" element={ <Unos />} />
      <Route path="/lokacija/:id" element = { <Stranica />} />
   </Routes>
   </>
  )
}

export default App;