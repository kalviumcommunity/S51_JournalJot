import React from 'react'
import './Profile.css'
import { Link ,useNavigate} from 'react-router-dom';

function Profile() {
  return (
    <div className='profile-page'>
    <div className="profile-container">
    <div className='profile-picture'><p>👤</p></div>
    <div className='profile-input'>
        
        <div className='inputs'>
            <div className='input'>
                <input type="text" placeholder='Name...' />
            </div>
            <div className='input'>
                <input type="text" placeholder='Nick Name...' />
            </div>
            <div className='input'>
                <input type="text" placeholder='Password...' />
            </div>
            <div className='input'>
                <input type="text" placeholder='Hobbies...' />
            </div>
            <div className='input'>
                <input className='brief' type="text" placeholder='Brief description on yourself...' />
            </div>
            <Link to='/login'>
            <button className='Save'>Save</button>
            </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Profile