import React, { useState } from 'react'
import '../Components/Signup.css'
import boy from "../assets/boy.png";
import butter from "../assets/app-icon.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

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
          console.log(name,emailId,pass);
          axios.post('http://localhost:3000/signup',{
              name:name,
              email:emailId,
              password:pass
          }).then((response)=>{
          setCookie('token', response.data.accessToken,365);
          setCookie('email', emailId,365);
      navigate('/profile')}).catch((error)=>{console.error(error)});

      }

  return (
    <>
      <div className='signup-page' >
        <div className="signup-left">
          <img className='butter1' src={butter} alt="" />
          <form className='signup-form' onSubmit={handleSubmitbtn}>
            <p className='sign-up'><b>Sign up</b></p>
            <span className='acc1'>
              <p>If you already have an account register</p>
              <p>You can <span className='hyper1'><Link to='/login'>Login here!</Link></span> </p>
            </span>
            <input className='signup-name' placeholder='Name' type="text" onChange={handleNameChange} /><br />
            <input className='signup-email' placeholder='Email' type="email"onChange={handleEmailIdChange}  /><br />
            <input className='signup-password' placeholder='Password' type="text"onChange={handlePassChange}  /><br />
            {/* <Link to="/profile"> */}
            <button type='submit' className='register'>Register</button>
            {/* </Link> */}
          </form>
        </div>
        <div className='signup-right'>
          <img className='boy2' src={boy} alt="boy" />
          <p className='text-boy'><b>Sign Up to login</b></p>
        </div>
      </div>



    </>
  )
}

export default Signup