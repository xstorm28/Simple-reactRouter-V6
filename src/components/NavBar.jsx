import {NavLink } from "react-router-dom";

const NavBar = () => {
  return(
    <div className="navbar navbar-dark bg-dark"> 
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/"> Inicio</NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto"> contacto</NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog"> blog</NavLink>
      </div>
    </div>
  )
}
export default NavBar