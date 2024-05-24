import React from 'react'
import './Home.css';
import icon from '../assets/app-icon.png'
import header from '../assets/header-pic.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import everything from '../assets/everything.png'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* <div className="home-background">
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
            </div> */}
            <div className='landing-background'>
              <nav className='Navbar'>
                <div className='left-nav'>
                  <img src={icon} alt="logo" />
                  <h1>Journal Jot</h1>
                </div>
                <div className="right-nav">
                  <h2>Home</h2>
                  <h2>About Us</h2>
                  <h2>Login</h2>
                  <button>Sign Up</button>
                </div>
              </nav>

              <div className='first-land'>
                <div className='land'>
                  <div>
                    <b><h1 className='h1'><span className='span1'>Journaling</span><span className='span2'> Online is <br />now much easier</span></h1></b>
                  </div>
                  <div>
                    <h5 className='h5'>Journal jot is an interesting platform that will help <br /> you to maintain your journal with more privacy. </h5>
                  </div>
                  <button className='join'>Join for free</button>
                </div>

                <div>
                  <img className='girl' src={header} alt="girl" />
                </div>
              </div>
            </div>

            <div className='land2'>
              <b><h2 className='all'><span className='span3'>All-In-One</span> <span className='span4'>Cloud Software.</span></h2></b>
              <h4 className='all2'>Journal Jot is one powerful online software suite that combines all the <br /> tools needed to start your journal journey</h4>
            </div>

            <div className='second-land'>
              <div>
                <img src={icon1} alt="icon1" />
                <p>Online Journaling</p>
                <p>Simple and secure way to store <br /> and record your journal’s <br /> everyday.</p>
              </div>

              <div>
                <img src={icon2} alt="icon2" />
                <p>Easy management and Tracking </p>
                <p>Easy managing your journal’s and <br /> keeping track of journey’s.</p>
              </div>

              <div>
                <img src={icon3} alt="icon3" />
                <p>Easy sharing your journal’s </p>
                <p>Easily sharing your journal’s <br /> with your friends and family <br /> using build in sharing system</p>
              </div>
            </div>

            <div className='third-land'>
              <p><b><span className='span5'>What is</span> <span className='span6'>Journal Jot?</span></b></p>
              <p>Crafting Tomorrow's Memories . Today Welcome to Journal Jot, where we believe that <br /> every thought, every moment, and every memory deserves to be cherished. Founded <br /> with a passion for preserving life's fleeting moments in a secure and meaningful <br /> manner. </p>
            </div>
            <div  className='everything'>
              <div>
                <b><p><span className='span7'>Everything you can do in a physical <br /> notebook,</span><span className='span8'>you can do with JournalJot</span></p></b>
                <p>Journal Jot is more than just a digital journaling platform <br /> it's a testament to the power of self-expression and <br /> introspection.</p>
              </div>
              <div>
                <img className='class'  src={everything} alt="everything" />
              </div>
            </div>

            <div className='features'>
              <b><p><span className='span9'>Our</span><span className='span10'>Features</span> </p></b>
              <p>This very extraordinary feature, can make journal activities more efficient</p>
            </div>


            {/* <div  className="button-container">
              <Link to='/login'><button id='get'>Get Started!</button></Link>
            </div> */}
      {/* </div> */}
    </>
  )
}

export default Home