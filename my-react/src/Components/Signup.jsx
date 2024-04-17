import React, { useState } from 'react'
import '../Components/Signup.css'
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName]=useState('');
  const [emailId, setEmailId]=useState('');
  const [pass, setPass]=useState('');

  const handleNameChange= (e) => {
    setName(e.target.value);
  };

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
      <div id='login-image'></div>
        <div className='signup-form'>
          <h2 id='get-started'>SignUp to Login</h2>
          <form onSubmit={handleSubmitbtn}>
          <div className='input'>
            <label htmlFor="name">Name:</label>
              <input type="name" id='name' value={name} onChange={handleNameChange} required/>
            </div>
            <div className='input'>
              <label htmlFor='email'>EmailId:</label>
              <input type="email" id="email" value={emailId} onChange={handleEmailIdChange} required/>
            </div>
            <div className='input'>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={pass} onChange={handlePassChange} required />
            </div>
            <Link to='/login'><button className='signup' type='submit'>SignUp</button></Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup