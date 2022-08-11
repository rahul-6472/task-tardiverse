import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {

const link = {
  fontSize:"20px",
  color:"black",
  textDecoration:"none"
}
  return (
    <div style = {{paddingLeft: "10px",paddingRight:"20px",position: "fixed", top: "0", left: "0",height:"60px",display:"flex", justifyContent:"space-between",alignItems:"center", background:"teal", width:"100%"}}>
      <div>
      <Link  style = {link}to = "/booking" >Booking</Link>
      </div>
    <div style = {{width:"15%", display:"flex",justifyContent:"space-between"}}>
     <Link style = {link} to = "/Login">Login</Link>
      <Link style = {link}to = "/Signup">Signup</Link>
    </div>
      
    </div>
  )
}

export default Navbar
