import React from 'react'
import './EditProfile.css'

function EditProfile() {
    return (
        <>
            <div className="edit-profile-container">
                <div className='profile-edit'><p>👤</p></div>
                <div className='edit-profile'>
                    
                    <div className='edit-inputs'>
                        <div className='label-input'>
                            <input type="text" placeholder='New Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Nick Name...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Password...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Hobbies...' />
                        </div>
                        <div className='label-input'>
                            <input type="text" placeholder='New Description...' />
                        </div>
                        <button className='Save-edit'>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProfile