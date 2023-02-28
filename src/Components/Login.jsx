import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='Login'>
    <h1>Log In</h1>
    <Link to="/Register">Register Now!</Link>
    <button onClick = {()=>navigate("/")}>Go to Home Page</button>
</div>
  )
}

export default Login