import React , {useEffect, useState} from 'react'
import './Home.css';
import icon from '../assets/app-icon.png'
import header from '../assets/header-pic.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon5.png'
import icon6 from '../assets/icon6.png'
import icon7 from '../assets/icon7.png'
import icon8 from '../assets/icon8.png'
import icon9 from '../assets/icon9.png' 
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
// import insta from '../assets/insta (3).png'
// import linkedin from '../assets/linked-in (3).png'
// import github from '../assets/github (2).png'
import axios from "axios"
import everything from '../assets/everything.png'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
            <div className='landing-background'>
              <nav className='Navbar'>
                <div className='left-nav'>
                  <img src={icon} alt="logo" />
                  <b><h1>Journal Jot</h1></b>
                </div>
                <div className="right-nav">
                  <Link to="/home"><h2>Home</h2></Link>
                  {/* <h2>About Us</h2> */}
                  <Link to="/login"><h2>Login</h2></Link>
                  <Link to="/signup"><button>Sign Up</button></Link>
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
                  <Link to="/signup"><button className='join'>Join for free</button></Link>
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
              <div className='icon'>
                <img src={icon1} alt="icon" />
                <b><p>Online Journaling</p></b>
                <p>Simple and secure way to store <br /> and record your journal’s <br /> everyday.</p>
              </div>

              <div className='icon'>
                <img src={icon2} alt="icon2" />
                <b><p>Easy management and Tracking </p></b>
                <p>Easy managing your journal’s and <br /> keeping track of journey’s.</p>
              </div>

              <div className='icon'>
                <img src={icon3} alt="icon3" />
                <b><p>Easy sharing your journal’s </p></b>
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
              <p><b><span className='span9'>Our</span> <span className='span10'>Features</span> </b></p>
              <p className='feature'>This very extraordinary feature, can make journal activities more efficient</p>
            </div>

            <div className='tools'>
              <div>
                <p><b><span className='span11'>Tools</span> <span className='span12'>For Journaling <br /> Enthusiast</span></b></p>
                <p className='para2'>We are committed to providing a safe, intuitive, <br /> and feature-rich platform that enables users to <br /> capture, reflect upon, and share their stories with <br /> confidence.</p>
              </div>
              <div>
                <img className='icon4' src={icon4} alt="" />
              </div>
            </div>

            <div className='fun'>
              <div className='fun1'>
                <p className='para1'><b><span className='span13'>Making Journaling</span> <span className='span14'>Fun</span></b></p>
                <p>We understand the significance of personal narratives <br /> in shaping our understanding of the world and <br /> ourselves.</p>
              </div>
              <div>
                <img className='icon5' src={icon5} alt="" />
              </div>
            </div>

            <div>
              <button className='see'>See more features</button>
            </div>

            <div className='integration'>
              <div className='four'>
                <div>
                  <div>
                    <img src={icon6} alt="icon6" />
                  </div>
                  <div>
                  <img src={icon8} alt="icon8" />
                    
                  </div>
                </div>
                <div className='four2'>
                  <div>
                  <img src={icon7} alt="icon7" />
                  </div>
                  <div>
                    <img src={icon9} alt="icon9" />
                  </div>
                </div>
                
              </div>
              
              <div>
                <div className='line-flex'>
                  <div className='line'></div>
                  <p className='inte'>INTEGRATIONS</p>
                </div>
                <div className='platform'>
                    <p><b><span className='span15'>50+ journaling tools and <br /> platform</span> <span className='span16'>integrations</span></b></p>
                </div>
                <div className='platform1'>
                  <p>Journal Jot has every tool your journal needs and comes pre- <br />integrated with more than 50+ tools, journal information <br /> systems (JIS), and journal platforms.</p>
                </div>
                <div>
                <button className='all-integration'>See all integrations</button>
                </div>
              </div>
              
            </div>

            <div className='footer'>
              <div className='line1'>
                <div className='line-foot'>
                  <img className='foot-logo' src={icon} alt="logo" />
                  <p><b>Journal Jot</b></p>
                  <div className='center-line'></div>
                </div>

                <div>
                  <p>Online<br /> Journaling App</p>
                </div>
              </div>
              
              <div className='line3'>
                <a className='linkedin'  href="https://www.linkedin.com/in/d-premapriya-998789289"> <FaGithub /></a>
                <a className='github'  href="https://github.com/Premapriya1905"><FaLinkedin /></a>
                <a className='insta'  href="https://www.instagram.com/reels/CzT7kxwRNBg/"><FaInstagramSquare /></a>
              </div>

              <div className='line4'>
                <Link to='/privacy'><p>Privacy Policy</p></Link>
                <div className='middle-line'></div>
                <Link to='/about' ><p className='terms'>About Us</p></Link>
              </div>

              <div className='line5'>
                <p>Email - premapriya1905@gmail.com</p>
                <p>Contact - 949-735-4092</p>
              </div>
            </div>

    </>
  )
}

export default Home