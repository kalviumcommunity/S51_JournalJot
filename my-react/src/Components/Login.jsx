import React from 'react'
import '../Components/Login.css'

function Login() {
  return (
    <div>
        <div className='login-div'>
            <h3 id='name1'>UserName <input type="text" /></h3>
            <h3 id='email1'>Email <input type="text" /></h3>
            <h3 id='pass1'>Password <input type="text" /></h3>
            <div><button>Reset Password</button><button>Forgot Password</button></div>
            <button id='login'>Login</button>
        </div>
    </div>
  )
}

export default Login