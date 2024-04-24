import React, { useState } from 'react';
import '../Components/Login.css';
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
      navigate('/main')}).catch((error)=>{console.error(error)});

      }

  return (
    <>
      <div className='login-page'>
        <div id='login-image'></div>
        <div id='login-form'>
          <h2 id='get-started'>Login to start your journey</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button className='login' type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
