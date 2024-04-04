import React from 'react'
import '../Components/Signup.css'

function Signup() {
  return (
    <div>
        <h1 id='head'>Journal Jot</h1>
        <div className='signup-div'>
          <h3 id='name2'>UserName </h3><input id='input1' type="text" />
          <h3 id='email2'>Email</h3><input id='input2' type="text" />
          <h3 id='pass2'>Password </h3><input id='input3' type="text" /><br /><h6 id='criteria'>(At least 8 characters long)</h6>
          <button id='signup'>Signup</button>
        </div>
    </div>
  )
}

export default Signup