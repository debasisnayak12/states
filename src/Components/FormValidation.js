import React, { useState } from "react";

const FormValidation = () => {
  const [user, setUser] = useState({name:"",email:"",password:"",confirmPassword:""})
  const [registeredUser, setRegisteredUser] = useState([])
  const [message, setMessage] = useState("")

  const {name,email,password,confirmPassword} = user

  function updateUser(e){
    let key = e.target.name
    setUser({...user, [key]:e.target.value})
  }

  function submitUser(e){
    e.preventDefault()

    if(!name || !email || !password || !confirmPassword){
        alert("Please fill all the fields")
    }
    else if(password !== confirmPassword){
        alert("password and confirm Password must be same")
    }
    else{
        setMessage("You have Registered Succesfully")
        setRegisteredUser({...user})
        setUser({name:"",email:"",password:"",confirmPassword:""})
    }


  }


  return (

    <div>
     
     {
        message ? 
        <div>Hey {registeredUser.name} {message} with email {registeredUser.email}</div> :
        null
     }


      <form onSubmit={submitUser}>
        <input 
        type="text"
        placeholder="Name" 
        value={name}
        onChange={updateUser}
        name="name" 
        />
        <br />

        <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={updateUser}
        name="email" 
        />
        <br />

        <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={updateUser}
        name="password" 
        />
        <br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={updateUser}
          name="confirmPassword"
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
