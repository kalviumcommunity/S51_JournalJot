import React, {useState} from 'react'
import './Profile.css'
import axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom';

function Profile() {

    const [profileName,setProfileName]= useState('');
    const [nickname, setNickName]= useState('');
    const [hobbies, setHobbies]=useState('');
    const [description, setdescription]=useState('');
    const navigate = useNavigate()
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
    const handleHobbiesChange = (e) =>{
        setHobbies(e.target.value);
    }
    const handleDescriptionChange = (e) =>{
        setdescription(e.target.value);``
    }

    const submit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/addprofile',{
            Profilename:profileName,
            Nickname:nickname,
            Hobbies:hobbies,
            Description:description
        },{headers:{authorization:`Beaare ${getCookie('token')}`}}).then((response)=>{
            console.log(response.data);
            setCookie("ProfileName",profileName,365);
            setCookie("Nickname", nickname, 365);
            setCookie("Hobbies", hobbies, 365);
            setCookie("Description", description, 365)
            setCookie("ID",response.data._id)
            navigate('/')
        }).catch((error) => console.error(error))
    }

  return (
    <div className='profile-page'>
    <div className="profile-container">
    <div className='profile-picture'><p>👤</p></div>
    <div className='profile-input'>
        
        <div className='inputs'>
            <form onSubmit={submit}>
            <div className='input'>
                <input type="text" onChange={handleProfileNameChange} placeholder='Name...' />
            </div>
            <div className='input'>
                <input type="text" onChange={handleNickNameChange} placeholder='Nick Name...' />
            </div>
            <div className='input'>
                <input type="text" onChange={handleHobbiesChange} placeholder='Hobbies...' />
            </div>
            <div className='input'>
                <input className='brief' onChange={handleDescriptionChange} type="text" placeholder='Brief description on yourself...' />
            </div>
            <Link to='/login'>
            <button type='submit' className='Save'>Save</button>
            </Link>
            </form>
        </div>

        

        </div>
    </div>
</div>
  )
}

export default Profile