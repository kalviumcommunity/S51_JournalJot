import React from 'react'
import '../Components/Login.css'

function Login() {
  return (
    <div>
        <div className='login-div'>
            <h3 id='name1'>UserName </h3><input id='input1' type="text" />
            <h3 id='email1'>Email </h3><input id='input2' type="text" />
            <h3 id='pass1'>Password </h3><input id='input3' type="text" />
            <div><button id='reset'>Reset Password</button><button id='forgot'>Forgot Password</button></div>
            <button id='login'>Login</button>
        </div>
    </div>
  )
}

export default Login