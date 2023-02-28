import React from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
  return (
    <div className='Register'>
    <h1>Register</h1>
    {/* <Link to="/Login">Register Now!</Link> */}
    <button onClick = {()=>navigate("/")}>Go to Home Page</button>
</div>
  )
}

export default Register