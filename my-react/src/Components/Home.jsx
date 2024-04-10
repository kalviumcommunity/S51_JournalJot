import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
       <div className='welcome'>
        <h1 className='head'>Journal Jot</h1>
        <p> Your private sanctuary for soulful journaling, syncing seamlessly with music, and curating content from across platforms!</p>
        <Link to='/signup'><button id='get'>Get Started!</button></Link>
        
       </div>
    </>
  )
}

export default Home