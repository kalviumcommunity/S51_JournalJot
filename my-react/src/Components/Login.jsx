import React from 'react'
import '../Components/Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1 id='head'>Login</h1>
        <div className='login-div'>
            <h3 id='name1'>UserName </h3><input id='input1' type="text" />
            <h3 id='email1'>Email </h3><input id='input2' type="text" />
            <h3 id='pass1'>Password </h3><input id='input3' type="text" />
            <div><button id='reset'>Reset Password</button><button id='forgot'>Forgot Password</button></div>
            <button id='enter2'>Enter</button>
        </div>
    </div>
  )
}

export default Login