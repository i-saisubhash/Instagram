import React, { useEffect } from 'react'




function LoggedIn() {

     const arrKey = ["reels","posts","comment","like","share","thread","blend"]

      return (
     <>
            <select>
            {arrKey.map((listofoptions,index)=>{
             return <option key={index} value={listofoptions}> {listofoptions} </option> })}
            </select>

            useEffect(()=>{},[])





     </>
    
)



}


export default LoggedIn