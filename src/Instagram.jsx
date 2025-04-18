import React from 'react'
import Login from './Login'


const Instagram = () => {
  return (
    <>
    <div className="container">
      <div className="main-logo">
        <img id="img" src="/assets/download.png" alt="Instagram Logo" />
        <span className="logo-text">Instagram</span>
       
      </div>
     < Login />
     <button className="login-btn"  >Login </button>
     </div>

    </>
   
    )
    
}





export default Instagram