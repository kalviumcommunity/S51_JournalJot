import React from 'react'
import '../Components/Signup.css'

function Signup() {
  return (
    <div>
        <h1 id='head'>Journal Jot</h1>
        <div className='div1'>
          <h3 id='name2'>UserName <input type="text" /></h3>
          <h3 id='email2'>Email<input type="text" /></h3>
          <h3 id='pass2'>Password <input type="text" /></h3>
          <button id='signup'>Signup</button>
        </div>
    </div>
  )
}

export default Signup