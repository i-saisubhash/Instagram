
import { Outlet, useNavigate } from 'react-router';
import Login from './Login'
import { useState } from 'react'



function Instagram () {

  const navigate = useNavigate()
    
  return (
    <>
    <div className="container">
      <div className="main-logo">
        <img id="img" src="/src/download.png" alt="Instagram Logo" />
        <span onClick={() => {
          return(
          navigate("/login"))
        }} 
         className="logo-text">Instagram</span> 
      </div>
     
     <Outlet />

     </div>
    </>
   
    )
    
}


export default Instagram





