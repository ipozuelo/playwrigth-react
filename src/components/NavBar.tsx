import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { logOut } from "../config/firebase";

const NavBar = () => {
  const { user } = useUserContext();


  const handleLogOut = async() =>{
    try{
      await logOut()
    }catch(e){
      console.log(e)
    }
  }

 
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h2>Buscador De Poke</h2>
        <NavLink to="/" className="btn btn-outline-primary">
          Home
        </NavLink>

        {user && (
          <>
            <NavLink to="/search" className="btn btn-outline-primary">
              Buscar
            </NavLink>
            <button onClick={handleLogOut} className="btn btn-outline-danger">LogOut</button>
          </>
        )}

        {!user && (
          <NavLink to="/login"className="btn btn-outline-primary">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
