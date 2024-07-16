import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import app from '../Firebase.js';
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

function Profile() {
    const [profileName, setProfileName] = useState('');
    const [nickname, setNickName] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [description, setDescription] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();
    const storage = getStorage(app);

    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }

    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
    }

    const handleProfileNameChange = (e) => {
        setProfileName(e.target.value);
    };

    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    };

    const handleHobbiesChange = (e) => {
        setHobbies(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleImageChange = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (file) {
            setIsLoading(true);
            const storageRef = ref(storage, `/profile/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed",
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    console.error(error);
                    setIsLoading(false);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        setProfilePic(downloadUrl);
                        setIsLoading(false);
                    });
                }
            );
        }
    }, [file]);

    const submit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3000/api/addprofile/${getCookie("email")}`, {
            Profilename: profileName,
            Nickname: nickname,
            Hobbies: hobbies,
            Description: description,
            ProfilePic: profilePic
        }, { headers: { authorization: `Bearer ${getCookie('token')}` } }).then((response) => {
            console.log(response.data);
            setCookie("ProfileName", profileName, 365);
            setCookie("Nickname", nickname, 365);
            setCookie("Hobbies", hobbies, 365);
            setCookie("Description", description, 365);
            setCookie("Email", email, 365);
            setCookie("ProfilePic", profilePic, 365);
            setCookie("ID", response.data._id);
            navigate('/home');
        }).catch((error) => console.error(error));
    };

    return (
        <>
            <div className="Profile-page">
                <div className='card'>
                    <label htmlFor='uploadImage' style={{ cursor: 'pointer' }}>
                        <img
                            className='profile-pic'
                            src={profilePic || 'https://example.com/path/to/default-image.jpg'}
                            alt="👤"
                            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                    </label>
                    <input
                        id='uploadImage'
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>
                {isLoading && <p className='file-upload'>File upload <b>{progress}%</b></p>}
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
                                <button type='submit' className='profile-save'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
