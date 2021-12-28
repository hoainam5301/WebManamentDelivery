import React from 'react'
import "./editDeliveryMethod.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
// import {Publish} from '@material-ui/icons';

export default function EditDeliveryMethod() {
    //let { staffid } = useParams();
    //console.log("123123123123213",staffid)
    //useEffect để get data sau khi lấy đc id để gọi API
    return (
        <div className='editDeliveryMethod'>
            <div className='editDeliveryMethodTitleContainer'>
                <h1 className='editDeliveryMethodTitle'>Edit user</h1>
            </div>
            <div className='editDeliveryMethodContainer'>
                <div className='editDeliveryMethodShow'>
                    <div className='editDeliveryMethodShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editDeliveryMethodShowImg' />
                        <div className='editDeliveryMethodShowTopTitle'>
                            <span className='editDeliveryMethodShowUsername'>Teddy</span>
                            <span className='editDeliveryMethodShowUserTitle'>Software</span>
                        </div>
                    </div>
                    <div className='editDeliveryMethodShowBottom'>
                        <span className='editDeliveryMethodShowBottomTitle'>
                            Account Detail
                        </span>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <PermIdentity className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                Nguyễn Văn A
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <GridOn className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                123123123123
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <CalendarToday className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                05/04/1999
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <Wc className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                Gender
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <AccountCircle className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                Loại nhân viên
                            </span>
                        </div>
                        <span className='editDeliveryMethodShowBottomTitle'>
                            Contact Detail
                        </span>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <PhoneAndroid className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                +84 036 7065 301
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <MailOutline className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                nguyenvana@gmail.com
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <LocationOn className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                khu phố Vinh Thanh, Bà Rịa Vũng Tàu
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editDeliveryMethodUpdate'>
                    <span className='editDeliveryMethodUpdateTitle'>Edit</span>
                    <form className='editDeliveryMethodUpdateForm'>
                        <div className='editDeliveryMethodUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Họ và tên</lable>
                                    <input type='text' placeholder='Nguyễn Văn A' className='editDeliveryMethodUpdateInput' />
                                </div>
                                <div className='editDeliveryMethodUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Note Address</lable>
                                    <input type='text' placeholder='khu phố Vinh Thanh, Bà Rịa Vũng Tàu' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Id Number CCCD</lable>
                                    <input type='text' placeholder='123123123123' className='editDeliveryMethodUpdateInput' />
                                </div>
                                <div className='editDeliveryMethodUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Quận</lable>
                                    <input type='text' placeholder='Quận gì đó' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Ngày sinh</lable>
                                    <input type='text' placeholder='05/04/1999' className='editDeliveryMethodUpdateInput' />
                                </div>
                                <div className='editDeliveryMethodUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Huyện</lable>
                                    <input type='text' placeholder='Tân Thành' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Email</lable>
                                <input type='text' placeholder='kd2000' className='editDeliveryMethodUpdateInput' />
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Password</lable>
                                <input type='text' placeholder='kd2000' className='editDeliveryMethodUpdateInput' />
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Số điện thoại</lable>
                                <input type='text' placeholder='0908152231' className='editDeliveryMethodUpdateInput' />
                            </div>
                        </div>
                        <div className='editDeliveryMethodUpdateRight' >
                            <div className='editDeliveryMethodUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editDeliveryMethodUpdateImg' />
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className='' />
                            </div>
                            <button className='editDeliveryMethodUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
