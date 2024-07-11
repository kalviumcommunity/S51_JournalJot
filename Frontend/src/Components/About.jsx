import React from 'react'
import Navbar from './Navbar'
import './About.css'
import feather from '../assets/feather.png'

function About() {
  return (
    <>
    <Navbar/>
    <div className='us-about'>
        <img className='feather' src={feather} alt="feather" />
        <p className='about'>
                  <p><b>About Journal Jot</b> <br />
                  Crafting Tomorrow's Memories . Today Welcome to Journal Jot, where we believe that every thought, every moment, and every memory deserves to be cherished. Founded with a passion for preserving life's fleeting moments in a secure and meaningful manner, Journal Jot is more than just a digital journaling platform—it's a testament to the power of self-expression and introspection.
                  </p><br /><br />
                  <p>
                  <b>Our Mission</b><br />
                  At Journal Jot, our mission is simple yet profound: to empower individuals worldwide to document their lives authentically and securely. We understand the significance of personal narratives in shaping our understanding of the world and ourselves. Therefore, we are committed to providing a safe, intuitive, and feature-rich platform that enables users to capture, reflect upon, and share their stories with confidence.
                  </p><br /><br />
                  <p>
                  <b>Innovation and Excellence</b><br />
                  From intuitive user interfaces to cutting-edge features. We listen to your feedback. Thank you for choosing Journal Jot as your trusted companion on life's extraordinary journey. Here's to crafting tomorrow's memories today.
                  </p>
        </p>
    </div>
    </>
  )
}

export default About