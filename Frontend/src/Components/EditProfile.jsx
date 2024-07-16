import React, { useState, useEffect } from 'react';
import './EditProfile.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import app from '../Firebase.js';
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

function EditProfile() {
    const storage = getStorage(app);
    const [profileNameEdit, setProfileNameEdit] = useState('');
    const [nicknameEdit, setNickNameEdit] = useState('');
    const [hobbiesEdit, setHobbiesEdit] = useState('');
    const [descriptionEdit, setDescriptionEdit] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [profilePic, setProfilePic] = useState('');
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    const navigate = useNavigate();

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

    const fetcher = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/getprofile/${getCookie("email")}`, {
                headers: { authorization: `Bearer ${getCookie("token")}` }
            });
            setData(res.data[0]);
            setProfileNameEdit(res.data[0].Profilename);
            setNickNameEdit(res.data[0].Nickname);
            setHobbiesEdit(res.data[0].Hobbies);
            setDescriptionEdit(res.data[0].Description);
            setProfilePic(res.data[0].ProfilePic);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetcher();
    }, []);

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
        setDescriptionEdit(e.target.value);
    }

    const handleDisabledEditChange = (e) => {
        e.preventDefault();
        setDisabled(false);
    }

    const submit = (e) => {
        console.log("hello")
        e.preventDefault();
        axios.put(`http://localhost:3000/api/updateprofile/${getCookie("email")}`, {
            Profilename: profileNameEdit,
            Nickname: nicknameEdit,
            Hobbies: hobbiesEdit,
            Description: descriptionEdit,
            ProfilePic: profilePic
        }, { headers: { authorization: `Bearer ${getCookie('token')}` } })
        .then((response) => {
            navigate('/Home');
        }).catch((error) => console.error(error));
    }

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

    return (
        <>
            <div className="edit-profile-container">
                <div>
                    <div className='profile-edit'>
                        <div className='card'>
                                <img
                                    className='profile-pic'
                                    src={profilePic || 'https://example.com/path/to/default-image.jpg'}
                                    alt="👤"
                                    style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
                                />
                            <input
                                id='uploadImage'
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </div>
                        {isLoading && <p>File upload <b>{progress}%</b></p>}
                    </div>
                    <h1 className='name'>{data.Profilename}</h1>
                    <p className='des'>{data.Description}</p>
                </div>
                <div className="edit-profile">
                    <div className="edit-inputs">
                        <form className="edit-form">
                            <div className='label-input'>
                                <input className='input-edit' value={profileNameEdit} onChange={handleProfileNameEditChange} type="text" placeholder='New Name...' disabled={disabled} />
                            </div>
                            <div className='label-input'>
                                <input className='input-edit' value={nicknameEdit} onChange={handleNickNameEditChange} type="text" placeholder='New Nick Name...' disabled={disabled} />
                            </div>
                            <div className='label-input'>
                                <input className='input-edit' value={hobbiesEdit} onChange={handleHobbiesEditChange} type="text" placeholder='New Hobbies...' disabled={disabled} />
                            </div>
                            <div className='label-input'>
                                <textarea value={descriptionEdit} onChange={handleDescriptionEditChange} type="text" placeholder='New Description...' className='input-edit' disabled={disabled}></textarea>
                            </div>
                            <div>
                                {(disabled) ?
                                    <button onClick={handleDisabledEditChange} className='Save-edit'>Edit profile</button>
                                    :
                                    <button onClick={submit} className='Save-edit'>Save profile</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile;
