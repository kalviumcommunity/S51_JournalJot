import React, { useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function Profile() {

    const [profileName, setProfileName] = useState('');
    const [nickname, setNickName] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [description, setdescription] = useState('');
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
    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    }
    const handleHobbiesChange = (e) => {
        setHobbies(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setdescription(e.target.value); 
    }

    // const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/addprofile', {
            Profilename: profileName,
            Nickname: nickname,
            Hobbies: hobbies,
            Description: description,
            email : getCookie("email")
        }, { headers: { authorization: `Beaare ${getCookie('token')}` } }).then((response) => {
            console.log(response.data);
            setCookie("ProfileName", profileName, 365);
            setCookie("Nickname", nickname, 365);
            setCookie("Hobbies", hobbies, 365);
            setCookie("Description", description, 365)
            setCookie("ID", response.data._id)
            navigate('/home')
        }).catch((error) => console.error(error))
    }

    return (
        <>
            <div className="Profile-page">
                <div className="hero">
                    <div className='card'>
                        <img className='profile-pic' src="images/profile.png"/>
                        <input className='' type="file" accept='image/jpeg' placeholder='👤' />
                    </div>
                </div>
                <div className="profile-card1">
                    <div className="profile-card2">
                        <form className="profile5" onSubmit={submit}>
                            <div className="profile-field">
                                <input onChange={handleProfileNameChange} placeholder="Name" className="inp-field" type="text" />
                            </div>

                            <div className="profile-field">
                                <input
                                    onChange={handleNickNameChange}
                                    placeholder="Nick Name"
                                    className="inp-field"
                                    type="text"
                                />
                            </div>

                            <div className="profile-field">
                                <input
                                    onChange={handleHobbiesChange}
                                    placeholder="Hobbies"
                                    className="inp-field"
                                    type="text"
                                />
                            </div>

                            <div className="profile-field">
                                <textarea
                                    onChange={handleDescriptionChange}
                                    placeholder="Description"
                                    cols="30"
                                    rows="3"
                                    className="inp-field"
                                ></textarea>
                            </div>
                            <div>
                                {/* <Link to='/login'> */}
                                    <button type='submit' className='profile-save'>Save</button>
                                {/* </Link> */}
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Profile