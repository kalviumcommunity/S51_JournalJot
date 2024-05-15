import React, { useState } from 'react'
import './EditProfile.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function EditProfile() {

    const [profileNameEdit, setProfileNameEdit] = useState('');
    const [nicknameEdit, setNickNameEdit] = useState('');
    const [hobbiesEdit, setHobbiesEdit] = useState('');
    const [descriptionEdit, setdescriptionEdit] = useState('');
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

    const handleProfileNameEditChange = (e) => {
        setProfileNameEdit(e.target.value);
    }
    const handleNickNameEditChange = (e) => {
        setNickNameEdit(e.target.value);
    }
    const handleHobbiesEditChange = (e) => {
        setHobbiesEdit(e.target.value);
    }
    const handleDescriptionEditChange = (e) => {
        setdescriptionEdit(e.target.value); 
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/updateprofile', {
            Profilename: profileName,
            Nickname: nickname,
            Hobbies: hobbies,
            Description: description
        }, { headers: { authorization: `Beaare ${getCookie('token')}` } }).then((response) => {
            console.log(response.data);
            setCookie("ProfileName", profileName, 365);
            setCookie("Nickname", nickname, 365);
            setCookie("Hobbies", hobbies, 365);
            setCookie("Description", description, 365)
            setCookie("ID", response.data._id)
            navigate('/')
        }).catch((error) => console.error(error))
    }

    return (
        <>
            <div className="edit-profile-container">
                <div className='profile-edit'><p>👤</p></div>

                <div className="edit-profile">
                    <div className="edit-inputs">
                        <form className="edit-form" onSubmit={submit}>
                        <div className='label-input'>
                            <input className='input-edit' onChange={handleProfileNameEditChange} type="text" placeholder='New Name...' />
                        </div>

                        <div className='label-input'>
                            <input className='input-edit' onChange={handleNickNameEditChange} type="text" placeholder='New Nick Name...' />
                        </div>

                        <div className='label-input'>
                            <input className='input-edit' onChange={handleHobbiesEditChange} type="text" placeholder='New Hobbies...' />
                        </div>

                        <div className='label-input'>
                            <textarea onChange={handleDescriptionEditChange} type="text" placeholder='New Description...' className='input-edit'></textarea>
                        </div>
                        <div>
                            <Link to='/main'>
                            <button className='Save-edit'>Save Changes</button>
                            </Link>
                        </div>
                        </form>
                    </div>
                </div>

                {/* <div className='edit-profile'>    
                    <div className='edit-inputs'>
                        <div className='label-input'>
                            <input type="text" placeholder='New Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Nick Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Hobbies...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Description...' />
                        </div>
                        <button className='Save-edit'>Save</button>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default EditProfile