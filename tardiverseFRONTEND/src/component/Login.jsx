import React from 'react'
import {useState} from "react"
const Login = () => {

  const handleLogin = () => {

  }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div style = {{margin:"auto",padding:"20px",border:"1px solid #cecece",width:"350px", height:"200px",marginTop: "60px", display:"flex",flexDirection :"column"}}>
      <label>Email:</label>
      <input type = "email" value = {email} onChange = {(e) =>setEmail(e.target.value)} />

      <label>Password:</label>
      <input type = "password" value = {password} onChange = {(e) =>setPassword(e.target.value)} />
     <br/>
     <br />
      <button onClick = {handleLogin}>Login</button>
    </div>
  )
}

export default Login
