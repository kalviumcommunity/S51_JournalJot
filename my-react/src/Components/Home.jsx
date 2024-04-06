import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="background-image">
        <h1 id='welcome'>Welcome to Journal Jot</h1>
        <Link to='/signup'><button id='signup'>Signup</button></Link>
        <Link to='/login'> <button id='login'>Login</button></Link>
        
    </div>   
    </>
  )
}

export default Home