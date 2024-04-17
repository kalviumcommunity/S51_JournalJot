import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
       {/* <div className='welcome'>
        <h1 className='head'>Journal Jot</h1>
        <p> Your private sanctuary for soulful journaling, syncing seamlessly with music, and curating content from across platforms!</p>
        <Link to='/signup'><button id='get'>Get Started!</button></Link>       
       </div> */}

       {/* <div className="patterns home-background">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="polka-dots"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
          </pattern>
        </defs>
        <style>
          @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i");
        </style>

        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>

        <text x="50%" y="60%" textAnchor="middle">
        Journal Jot
        </text>
        <div style={{ position: 'relative', zIndex: 2 }}>
    <Link to='/signup'><button id='get'>Get Started!</button></Link>
  </div>      
  </svg>
    </div> */}

<div className="home-background">
      <div className="patterns">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="polka-dots"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
            </pattern>
          </defs>
          <style>
            @import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i");
          </style>

          <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>

          <text x="50%" y="60%" textAnchor="middle">
            Journal Jot
          </text>
        </svg>
      </div>
      {/* <p> Your private sanctuary for soulful journaling, syncing seamlessly with music, and curating content from across platforms!</p> */}
      <div  className="button-container">
        <Link to='/signup'><button id='get'>Get Started!</button></Link>
      </div>
    </div>
    </>
  )
}

export default Home