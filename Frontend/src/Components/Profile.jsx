import React, {useState} from 'react'
import './Profile.css'
import { Link ,useNavigate} from 'react-router-dom';

function Profile() {

    const [profileName,setProfileName]= useState('');
    const [nickname, setNickName]= useState('');
    const [profilePassword, setProfilePassword]=useState('');
    const [hobbies, setHobbies]=useState('');
    const [description, setdescription]=useState('');
    
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }
    const handleProfileNameChange = (e) => {
        setProfileName(e.target.value);
    }
    const handleNickNameChange = (e) =>{
        setNickName(e.target.value);
    }
    const handleProfilePasswordChange = (e) =>{
        setProfilePassword(e.target.value);
    }
    const handleHobbiesChange = (e) =>{
        setHobbies(e.target.value);
    }
    const handleDescriptionChange = (e) =>{
        setdescription(e.target.value);``
    }

  return (
    <div className='profile-page'>
    <div className="profile-container">
    <div className='profile-picture'><p>👤</p></div>
    <div className='profile-input'>
        
        <div className='inputs'>
            <div className='input'>
                <input type="text" onClick={handleProfileNameChange} placeholder='Name...' />
            </div>
            <div className='input'>
                <input type="text" onClick={handleNickNameChange} placeholder='Nick Name...' />
            </div>
            <div className='input'>
                <input type="text"onClick={handleProfilePasswordChange} placeholder='Password...' />
            </div>
            <div className='input'>
                <input type="text" onClick={handleHobbiesChange} placeholder='Hobbies...' />
            </div>
            <div className='input'>
                <input className='brief' onClick={handleDescriptionChange} type="text" placeholder='Brief description on yourself...' />
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