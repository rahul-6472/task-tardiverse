import React from 'react'

const Booking = () => {
  return (
    <div style = {{width: "400px", height:"400px",border:"1px solid #cecece",padding:"30px", marginTop:"40px"}}>
       <div style = {{display:"flex", justifyContent:"space-between"}}>
        <div>
        <label>From</label>
        <input type = "text" placeholder = "city from" />
        </div>

       <div>
        <label>TO</label>
        <input type = "text" placeholder = "city To" />
        </div>
       </div>
      <br/>
      <br />
      
       <div style = {{display:"flex"}}>
          <div>
            <label>Departure Date:</label>
            <input type = "date" /> 
          </div>
          <div>
            <label>return Date:</label>
            <input type = "date" /> 
          </div>
       </div>
    </div>
  )
}

export default Booking
