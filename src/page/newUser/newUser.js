import React from 'react'
import "./newUser.css"

export default function NewUser() {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserFormItem'>
                    <label>Username</label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Fullname </label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Email</label>
                    <input type='email' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Password</label>
                    <input type='password' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Phone</label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Address</label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='newUserFormItem'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'> 
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='newUserFormItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' name='gender' id='male' value='male' placeholder='hỏi cc' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' placeholder='hỏi cc' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='orther' value='orther' placeholder='hỏi cc' />
                        <label for='orther'>Orther</label>
                    </div>
                </div>
                
                <button className='newUserButton'>Create</button>
            </form>
        </div>
    )
}
