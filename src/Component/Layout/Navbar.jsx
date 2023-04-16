import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar (){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/edit">Edit</NavLink>
        </li>
      </ul>
    </div>
  <NavLink className="nav-link active btn btn-light me-5" to="/add/user">Login Here</NavLink>
  </div>
</nav>
        </>
    )
}