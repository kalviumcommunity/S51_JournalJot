import React from 'react'
import Navbar from './Navbar'
import './Privacy.css'
import pen from '../assets/pen.png'

function Privacy() {
  return (
    <>
    <Navbar/>
      <div className='policy'>
          <p className='privacy'>

            <p>
                <b>Introducing Journal Jot: Your Personal Sanctuary</b><br />

                In a world where privacy is paramount, Journal Jot emerges as your trusted ally, providing a sanctuary for your thoughts, memories, and aspirations. Unlike traditional pen-and-paper diaries, where prying eyes may inadvertently stumble upon your innermost musings.
            </p><br /><br />
            
            <p>
                <b>Privacy and Security Assured</b><br />

                At Journal Jot, safeguarding your privacy is our foremost priority. Rest assured, your entries remain exclusively yours, shielded from unauthorized access by robust encryption protocols. 
            </p><br /><br />

            <p>
                <b>Unparalleled Features for Expression</b><br />

                Beyond its impenetrable privacy measures, Journal Jot offers a plethora of features designed to enhance your journaling experience. Seamlessly save cherished moments with the ability to embed images, videos, and links directly into your entries. 
            </p><br /><br />
            <p>
                <b>A Superior Alternative to Traditional Diaries</b><br />

                Experience Journal Jot today and embark on a journey of self-expression like never before. Welcome to your personal sanctuary.
            </p>
          </p>
          <img className='pen' src={pen} alt="pen" />

      </div>
    </>
  )
}

export default Privacy