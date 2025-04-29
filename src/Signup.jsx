import React, { useState } from "react"




function signup(){

    //const [name,setName] = useState("")
    //const [mail,setMail] = useState("")
    const [gender,setGender] = useState("")
    //const [password,setPassword] = useState("")
    //const [confirm,setConfirm] = useState("")




    //  function name1(e){
    //      setName(e.target.value)
    //     console.log(e.target.value)
       
    //      }
        
    function gender1(e){
        setGender(e.target.value)
        alert("This is male")
    }

    function gender2(e){
        setGender(e.target.value)
        alert("This is female")
    }

    function gender3(e){
        setGender(e.target.value)
        alert("This is Noa")
    }

    // function password1(e){
    //     setPassword(e.target.value)
    //     console.log(e.target.value)
    // }

    // function password2(e){
    //     setConfirm(e.target.value)
    //     console.log(e.target.value)
    // }
         
 
      
    const [credentials,setCredentials]=useState({

        name              :"",
        mail              :"",
        password          :"",
        confirmpassword   :""
    })

    function handleCredential (e){
        setCredentials({
            [e.target.name] : e.target.value 
        });
    }



    return(
        
    <>
           <input className="lucy" onChange={handleCredential} value={credentials.name} name="userName" type="text" placeholder="Name" />
           {/* <input className="lucy" onChange={(e)=>{console.log(setMail(e.target.value))}} value={mail} type="email" placeholder="Mail" /> */}
           <input className="lucy" onChange={handleCredential} value={credentials.mail} name="eMail" type="email" placeholder="Mail" />

            <label className="labelling "  > Gender <br />
                <input onClick={gender1} value={gender}  type="radio" name="Gender1" value1={"Male"} /> Male
                <input onClick={gender2} value={gender}  type="radio" name="Gender2" value2={"Female"} /> Female
                <input onClick={gender3} value={gender} type="radio" name="Gender3" value3={"NOA"} /> Noa
            </label>
            <input className="lucy" type="date" />
            <input onChange={handleCredential} value={credentials.password} className="lucy" type="password" name="password" placeholder="password" />
            <input onChange={handleCredential} value={credentials.confirmpassword} className="lucy" type="password" name="confirmpassword" placeholder="Confirm Password" />


       <button  className="confirm-btn" >Confirm</button>     
           

    </>
  
 
)
}

export default signup