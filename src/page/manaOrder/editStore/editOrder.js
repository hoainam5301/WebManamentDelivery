import React from 'react'
import "./editOrder.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
// import {Publish} from '@material-ui/icons';

export default function EditOrder() {
    //let { staffid } = useParams();
    //console.log("123123123123213",staffid)
    //useEffect để get data sau khi lấy đc id để gọi API
    return (
        <div className='editOrder'>
            <div className='editOrderTitleContainer'>
                <h1 className='editOrderTitle'>Assigment Order</h1>
            </div>
            <div className='editOrderContainer'>
                <div className='editOrderShow'>
                    <div className='editOrderShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editOrderShowImg' />
                        <div className='editOrderShowTopTitle'>
                            <span className='editOrderShowUsername'>Teddy</span>
                            <span className='editOrderShowUserTitle'>Software</span>
                        </div>
                    </div>
                    <div className='editOrderShowBottom'>
                        <span className='editOrderShowBottomTitle'>
                            Order Detail
                        </span>
                        <div className='editOrderShowBottomInfo'>
                            <PermIdentity className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Tên đơn hàng
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <GridOn className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Tiền hàng
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <CalendarToday className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Cân nặng
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <Wc className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Note
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <AccountCircle className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Phương thức vận chuyển
                            </span>
                        </div>
                        <span className='editOrderShowBottomTitle'>
                            Contact Order Detail
                        </span>
                        <div className='editOrderShowBottomInfo'>
                            <PhoneAndroid className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                +84 036 7065 301
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <MailOutline className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                nguyenvana@gmail.com
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <LocationOn className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                khu phố Vinh Thanh, Bà Rịa Vũng Tàu
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editOrderUpdate'>
                    <span className='editOrderUpdateTitle'>Assigment</span>
                    <form className='editOrderUpdateForm'>
                        <div className='editOrderUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Họ và tên</lable>
                                    <input type='text' placeholder='Nguyễn Văn A' className='editOrderUpdateInput' />
                                </div>
                                <div className='editOrderUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editOrderUpdateLabelItem'>Note Address</lable>
                                    <input type='text' placeholder='khu phố Vinh Thanh, Bà Rịa Vũng Tàu' className='editOrderUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Id Number CCCD</lable>
                                    <input type='text' placeholder='123123123123' className='editOrderUpdateInput' />
                                </div>
                                <div className='editOrderUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editOrderUpdateLabelItem'>Quận</lable>
                                    <input type='text' placeholder='Quận gì đó' className='editOrderUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Ngày sinh</lable>
                                    <input type='text' placeholder='05/04/1999' className='editOrderUpdateInput' />
                                </div>
                                <div className='editOrderUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editOrderUpdateLabelItem'>Huyện</lable>
                                    <input type='text' placeholder='Tân Thành' className='editOrderUpdateInput' />
                                </div>
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Email</lable>
                                <input type='text' placeholder='kd2000' className='editOrderUpdateInput' />
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Password</lable>
                                <input type='text' placeholder='kd2000' className='editOrderUpdateInput' />
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Số điện thoại</lable>
                                <input type='text' placeholder='0908152231' className='editOrderUpdateInput' />
                            </div>
                        </div>
                        <div className='editOrderUpdateRight' >
                            <div className='editOrderUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editOrderUpdateImg' />
                                <lable for='file' >Chọn nhân viên giao hàng</lable>
                                <select className='createComisionSelect' name='active' id='active'>
                                    <option value='yes'>NGuyễn Văn A</option>
                                    <option value='no'>NGuyễn Văn B</option>
                                </select>
                                {/* <input type='file' id='file' className='' /> */}
                            </div>
                            <button className='editOrderUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
