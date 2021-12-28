import React from 'react'
import "./createDeliveryMethod.css"

export default function CreateDeliveryMethod() {
    return (
        <div className='createDeliveryMethod'>
            <h1 className='createDeliveryMethodTitle'>New User</h1>
            <form className='createDeliveryMethodForm'>
                <div className='createDeliveryMethodFormItem'>
                    <label>Email</label>
                    <input type='email' placeholder='Nguyenvanhoa@gmail.com' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Password </label>
                    <input type='password' placeholder='*********' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Full name</label>
                    <input type='text' placeholder='nguyễn văn a' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Số điện thoại</label>
                    <input type='text' placeholder='123123123' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Ngày sinh</label>
                    <input type='date' placeholder='22/14/2001' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Note Address</label>
                    <input type='text' placeholder='hỏi cc' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Quận</label>
                    <select className='createDeliveryMethodSelect' name='active' id='active'> 
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Huyện</label>
                    <select className='createDeliveryMethodSelect' name='active' id='active'> 
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Gender</label>
                    <div className='createDeliveryMethodGender'>
                        <input type='radio' name='gender' id='male' value='male' placeholder='hỏi cc' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' placeholder='hỏi cc' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='orther' value='orther' placeholder='hỏi cc' />
                        <label for='orther'>Orther</label>
                    </div>
                </div>
                
                <button className='createDeliveryMethodButton'>Create</button>
            </form>
        </div>
    )
}
