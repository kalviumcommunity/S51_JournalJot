import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import butter from "../assets/app-icon.png"
import boy from "../assets/boy.png";
import { Link ,useNavigate} from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      const handleSubmit=(e)=>{
          e.preventDefault();
          axios.post('http://localhost:3000/login',{
              email:email,
              password:password
          }).then((response)=>{
          setCookie('token', response.data.accessToken,365);
          setCookie('email', email,365);
      navigate('/home')}).catch((error)=>{console.error(error)});

      }

  return (
    <>
      <div className='login-page'>
          <div className='login-left'>
            <img className='boy1' src={boy} alt="boy" />
            <p className='boy-text'><b>Login to start your Journal</b></p>
          </div>
          <div className='login-right'>
            <img className='butter' src={butter} alt="" />
            <form className='login-form' onSubmit={handleSubmit}>
                  <p className='sign-in'><b>Sign In</b></p>
                  <span className='acc'>
                    <p>If you dont't have an account register</p>
                    <p>You can <span className='hyper2'><Link to='/signup'>Register here!</Link></span></p>
                  </span>
                  <input className='login-email' placeholder='Email' type="email" onChange={handleEmailChange} /><br />
                  <input className='login-password' placeholder='Password' onChange={handlePasswordChange}  type="text" />
                  <p className='forgot'>Forgot Password?</p>
                  {/* <Link to="/home"> */}
                  <button type='submit' className='login'>Login</button>
                  {/* </Link> */}
            </form>
          </div>
          
      </div>
    </>
  );
}

export default Login;
