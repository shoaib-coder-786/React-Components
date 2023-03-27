import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({auth}) {
    const navigate = useNavigate();
    function login(){
        auth()
            navigate('profile')
    }
  return (
    <div><h1>please authenticate and login</h1>
        Login Page
        <br />
        <button onClick={login}>LOGIN</button>


    </div>
  )
}
