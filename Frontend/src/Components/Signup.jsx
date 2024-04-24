import React, { useState } from 'react'
import '../Components/Signup.css'
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();
  function getCookie(name) {
      let cookieArray = document.cookie.split('; ');
      let cookie = cookieArray.find((row) => row.startsWith(name + '='));
      return cookie ? cookie.split('=')[1] : null;
  }
  function setCookie(name, value, daysToExpire) {
      let date = new Date();
      date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
      document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
      const handleSubmitbtn=(e)=>{
          e.preventDefault();
          axios.post('http://localhost:3000/signup',{
              name:name,
              email:emailId,
              password:password
          }).then((response)=>{
          setCookie('token', response.data.accessToken,365);
          setCookie('email', emailId,365);
      navigate('/')}).catch((error)=>{console.error(error)});

      }

  return (
    <>
      <div className='signup-page'>
      <div id='login-image'></div>
        <div className='signup-form'>
          <h2 id='get-started'>SignUp</h2>
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
            <p>Do you have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup