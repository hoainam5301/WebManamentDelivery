import React from 'react'
import "./user.css"
import { CalendarToday, LocationOn, MailOutline, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { Link } from 'react-router-dom'
// import {Publish} from '@material-ui/icons';

export default function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='userShowImg' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna</span>
                            <span className='userShowUserTitle'>Software</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowBottomTitle'>
                            Account Detail
                        </span>
                        <div className='userShowBottomInfo'>
                            <PermIdentity className='userShowBottomIcon' />
                            <span className='userShowBottomInfoTitle'>
                                Anna bed
                            </span>
                        </div>
                        <div className='userShowBottomInfo'>
                            <CalendarToday className='userShowBottomIcon' />
                            <span className='userShowBottomInfoTitle'>
                                Anna bed
                            </span>
                        </div>
                        <span className='userShowBottomTitle'>
                            Contact Detail
                        </span>
                        <div className='userShowBottomInfo'>
                            <PhoneAndroid className='userShowBottomIcon' />
                            <span className='userShowBottomInfoTitle'>
                                Anna bed
                            </span>
                        </div>
                        <div className='userShowBottomInfo'>
                            <MailOutline className='userShowBottomIcon' />
                            <span className='userShowBottomInfoTitle'>
                                Anna bed
                            </span>
                        </div>
                        <div className='userShowBottomInfo'>
                            <LocationOn className='userShowBottomIcon' />
                            <span className='userShowBottomInfoTitle'>
                                Anna bed
                            </span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>    
                            <div className='userUpdateItem'>
                                <lable className='userUpdateLabelItem'>User Name</lable>
                                <input type='text' placeholder='kd2000' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <lable className='userUpdateLabelItem'>Full Name</lable>
                                <input type='text' placeholder='kd2000' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <lable className='userUpdateLabelItem'>Email</lable>
                                <input type='text' placeholder='kd2000' className='userUpdateInput' />
                            </div>
                            <div className='userUpdateItem'>
                                <lable className='userUpdateLabelItem'>Password</lable>
                                <input type='text' placeholder='kd2000' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className='userUpdateRight' > 
                            <div className='userUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='userUpdateImg'/>
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className=''/>
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
