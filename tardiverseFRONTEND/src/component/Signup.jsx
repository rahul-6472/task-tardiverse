import React from 'react'
import {useState} from "react"
const Signup = () => {
  const handleRegister= () => {

  }
  const [email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div style = {{margin:"auto",padding:"20px",border:"1px solid #cecece",width:"350px", height:"200px",marginTop: "60px", display:"flex",flexDirection :"column"}}>
      
      <label>Name:</label>
      <input type = "text" value = {Name} onChange = {(e) => setName (e.target.value)} />

      <label>Email:</label>
      <input type = "email" value = {email} onChange = {(e) =>setEmail(e.target.value)} />

      <label>Password:</label>
      <input type = "password" value = {password} onChange = {(e) =>setPassword(e.target.value)} />
     <br/>
     <br />
      <button onClick = {handleRegister}>Register</button>
    </div>
  )
}

export default Signup
