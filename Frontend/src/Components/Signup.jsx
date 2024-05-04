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
      <div className='signup-form'>
  <form className="form">
    <p id="heading">SignUp to login</p>
    <div className="field">
      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8,0 C3.582,0 0,3.582 0,8 C0,12.418 3.582,16 8,16 C12.418,16 16,12.418 16,8 C16,3.582 12.418,0 8,0 Z M8,2 C10.212,2 12,3.788 12,6 C12,8.212 10.212,10 8,10 C5.788,10 4,8.212 4,6 C4,3.788 5.788,2 8,2 Z M8,12 C5.795,12 3.929,11.132 3.15,9.85 C3.937,8.964 6.089,8 8,8 C9.911,8 12.063,8.964 12.85,9.85 C12.071,11.132 10.205,12 8,12 Z"/>

      </svg>
      <input autoComplete="off" placeholder="Name" className="input-field" type="text" />
    </div>
    <div className="field">
      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
      </svg>
      <input autoComplete="off" placeholder="Email" className="input-field" type="email" />
    </div>
    <div className="field">
      <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
      </svg>
      <input autoComplete="off" placeholder="Password" className="input-field" type="password" />
    </div>
    <Link to="/Profile"><button className='signup' >Signup</button></Link>
    {/* <button className="button3">Forgot Password?</button> */}

    <p className='account2'>Already have an account? <Link to="/Login">Login</Link></p>
  </form>
</div>



    </>
  )
}

export default Signup