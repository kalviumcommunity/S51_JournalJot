import React, { useState } from 'react'
import '../Components/Signup.css'
import { Link } from 'react-router-dom';

function Signup() {
  const [emailId, setEmailId]=useState('');
  const [pass, setPass]=useState('');

  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmitbtn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className='signup-page'>
        <div className='signup-form'>
          <h2>SignUp to Login</h2>
          <form onSubmit={handleSubmitbtn}>
            <div className='input-1'>
              <label htmlFor='email'>EmailId:</label>
              <input type="email" id="email" value={emailId} onChange={handleEmailIdChange} required/>
            </div>
            <div className='input-2'>
            <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePassChange} required />
            </div>
            <Link to='/login'><button type='submit'>SignUp</button></Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup