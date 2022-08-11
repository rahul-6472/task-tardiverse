import React from "react"
import {Routes,Route} from "react-router-dom"
import Booking from "./component/Booking";
import Navbar from "./component/Navbar";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <br/>
    <br/>
    
    
    <Routes>
      <Route path = "/booking" element = {<Booking />} />
      <Route path = "/signup" element = {<Signup />}  />
      <Route path = "/login" element = {<Login />}  />
      <Route />
    </Routes>

    </div>

  );
}

export default App;
