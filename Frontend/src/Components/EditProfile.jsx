import React from 'react'
import './EditProfile.css'

function EditProfile() {
    return (
        <>
            <div className="edit-profile-container">
                <h1 className='edit'>Edit Profile</h1>
                <div className='edit-profile'>
                    <div className='profile-edit'><p>👤</p></div>
                    <div className='edit-inputs'>
                        <div className='label-input'>
                            <input type="text" placeholder='Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='Nick Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Password...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Description...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='Hobbies...' />
                        </div>
                        <button className='Save-edit'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile