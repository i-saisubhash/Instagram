import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';


function Login () {

  const navigate = useNavigate()

  // const [username,setUsername] = useState("")
  // const [password,setPassword] = useState("")

     const [details,setDetails] = useState({
        username : "",
        password : "",
     })

  // function username1(e){  
  //   setUsername(e.target.value)
  //   console.log(e.target.value)
  // }


    // function handledetails(e){        //single function for object iteration (only for username)
    //    setDetails({
    //     username : e.target.value 
    //    })
    //    console.log(e.target.value)
    // }
      
     
    function handledetails(e){
        setDetails({
          ...details ,
          [e.target.name] : e.target.value
        })
    }

    function handlelogin(){

      if (details.username === "subhash" && details.password === "subhash@123"){
        navigate('/loggedin') ;
      }
      else{
         alert('Incorrect details')
       }
    
    }



  
  return (
    <>
      <input onChange={handledetails} value={details.username} name='username' className="login-input" type = "text" placeholder='Username' />

      <input onChange={handledetails} value={details.password}  name='password' className="login-input" type = "password" placeholder='Password' />

      <button onClick={handlelogin} className="login-btn">Login </button>
      <Link to={"/signup"}> Sign Up </Link>
     
      
    </>
  )
}

export default Login


//Write event handlers for Login component with respective state values
//Write event handlers for Sign up component with respective state values
//For sign up component try to combine the event handlers wherever possible.
//Do Validation for both Login and Sign up.