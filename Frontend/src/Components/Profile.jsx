import React from 'react'

function Profile() {
  return (
    <div className="edit-profile-container">
    <div className='profile-edit'><p>👤</p></div>
    <div className='edit-profile'>
        
        <div className='edit-inputs'>
            <div className='label-input'>
                <input type="text" placeholder='Name...' />
            </div>
            <div className='label-input'>
                <input type="text" placeholder='Nick Name...' />
            </div>
            <div className='label-input'>
                <input type="text" placeholder='Password...' />
            </div>
            <div className='label-input'>
                <input type="text" placeholder='Description...' />
            </div>
            <div className='label-input'>
                <input type="text" placeholder='Hobbies...' />
            </div>
            <button className='Save-edit'>Save</button>
        </div>
    </div>
</div>
  )
}

export default Profile