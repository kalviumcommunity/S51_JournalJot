import React, { useState } from 'react'
import './EditProfile.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function EditProfile() {

    const [profileNameEdit, setProfileNameEdit] = useState(getCookie("ProfileName"));
    const [nicknameEdit, setNickNameEdit] = useState(getCookie("Nickname"));
    const [hobbiesEdit, setHobbiesEdit] = useState(getCookie("Hobbies"));
    const [descriptionEdit, setdescriptionEdit] = useState(getCookie("Description"));
    const [disabled,setDisabled]=useState('true')
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
    const handleDisabledEditChange = (e) => {
        e.preventDefault( )
        setDisabled(false);
    }

    const submit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:3000/api/updateprofile/${getCookie("ID")}`, {
            Profilename: profileNameEdit,
            Nickname: nicknameEdit,
            Hobbies: hobbiesEdit,
            Description: descriptionEdit
        }, { headers: { authorization: `Bearer ${getCookie('token')}` } })
        .then((response) => {
            console.log(response.data);
            setCookie("ProfilenameEdit", profileNameEdit, 365);
            setCookie("NicknameEdit", nicknameEdit, 365);
            setCookie("HobbiesEdit", hobbiesEdit, 365);
            setCookie("DescriptionEdit", descriptionEdit, 365)
            setCookie("ID", response.data._id)
            navigate('/Home')
        }).catch((error) => console.error(error))
    }

    return (
        <>
            <div className="edit-profile-container">
                <div>
                    <div className='profile-edit'><p>👤</p></div>
                    <h1 className='name'>{profileNameEdit}</h1>
                    <p className='des'>{descriptionEdit}</p>
                </div>
                
       
                <div className="edit-profile">
                    <div className="edit-inputs">
                        <form className="edit-form" >
                        <div className='label-input'>
                            <input className='input-edit' defaultValue={getCookie("ProfileName")} onChange={handleProfileNameEditChange} type="text" placeholder='New Name...' disabled={disabled} />
                        </div>

                        <div className='label-input'>
                            <input className='input-edit' defaultValue={getCookie("Nickname")} onChange={handleNickNameEditChange} type="text" placeholder='New Nick Name...' disabled={disabled} />
                        </div>

                        <div className='label-input'>
                            <input className='input-edit' defaultValue={getCookie("Hobbies")} onChange={handleHobbiesEditChange} type="text" placeholder='New Hobbies...' disabled={disabled}/>
                        </div>

                        <div className='label-input'>
                            <textarea defaultValue={getCookie("Description")} onChange={handleDescriptionEditChange} type="text" placeholder='New Description...' className='input-edit' disabled={disabled}></textarea>
                        </div>
                        <div>{(disabled)?
                            <button onClick={handleDisabledEditChange} className='Save-edit'>Edit profile</button>
                            :
                            <button onClick={submit}className='Save-edit'>Save profile</button>
                            }
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile