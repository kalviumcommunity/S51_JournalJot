import React, { useState } from 'react';
import '../Components/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <div className='login-page'>
        <div id='login-image'></div>
        <div id='login-form'>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
