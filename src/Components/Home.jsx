import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate();
  return (
    <div className='Home'>
        <h1>My Home!</h1>
        <Link to="/register">Register Now!</Link>
        <button onClick = {()=>navigate("/login")}>Log In</button>
    </div>
  )
}

export default Home