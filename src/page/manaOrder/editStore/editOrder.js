import React, { useEffect, useState } from 'react'
import "./editOrder.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditOrder() {
    let { orderid } = useParams();
    const [orderData, setOrderData] = useState()
    const [staffChoosen,setStaffChoosen]=useState()
    const [listStaff, setListStaff] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/staffs/staff-deliveries`)
            .then(res => {

                setListStaff(res.data.staffs)
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/orders/${orderid}`)
            .then(res => {

                setOrderData(res.data.order)
            })
            .catch(error => console.log(error));
    }, []);
    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            staff:staffChoosen,
        }
        console.log("123", dataUser)
        axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/orders/${orderid}/status`, dataUser)
            .then((res) => {
                console.log("Edit store Success")
                alert('Phân đơn hàng thành công')
            })
    };
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
                            <span className='editOrderShowUsername'>{orderData?.orderName}</span>
                        </div>
                    </div>
                    <div className='editOrderShowBottom'>
                        <span className='editOrderShowBottomTitle'>
                            Order Detail
                        </span>
                        <div className='editOrderShowBottomInfo'>
                            <PermIdentity className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Tên đơn hàng: {orderData?.orderName}
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <GridOn className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Tiền hàng: {orderData?.orderMoney}
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <CalendarToday className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Cân nặng: {orderData?.weight}kg
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <Wc className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Note: {orderData?.note}
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <AccountCircle className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                Phương thức vận chuyển: {orderData?.useDVMethod.name}
                            </span>
                        </div>
                        <span className='editOrderShowBottomTitle'>
                            Contact Order Detail
                        </span>
                        <div className='editOrderShowBottomInfo'>
                            <PhoneAndroid className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                {orderData?.receiverPhone}
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <MailOutline className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                {orderData?.receiverEmail}
                            </span>
                        </div>
                        <div className='editOrderShowBottomInfo'>
                            <LocationOn className='editOrderShowBottomIcon' />
                            <span className='editOrderShowBottomInfoTitle'>
                                {orderData?.receiverAddress.fullAddress}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editOrderUpdate'>
                    <span className='editOrderUpdateTitle'>Assigned to staff</span>
                    <form className='editOrderUpdateForm' onSubmit={handleSummit}>
                        <div className='editOrderUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Họ và tên</lable>
                                    <lable className='editOrderUpdateInput'>{staffChoosen?.fullName}</lable>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Id Number CCCD</lable>
                                    <lable className='editOrderUpdateInput'>{staffChoosen?.idNumber}</lable>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editOrderUpdateItem'>
                                    <lable className='editOrderUpdateLabelItem'>Ngày sinh</lable>
                                    <lable className='editOrderUpdateInput'>{staffChoosen?.dateOfBirth}</lable>
                                </div>
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Email</lable>
                                <lable className='editOrderUpdateInput'>{staffChoosen?.email}</lable>
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Địa chỉ</lable>
                                <lable className='editOrderUpdateInput'>{staffChoosen?.address.fullAddress}</lable>
                            </div>
                            <div className='editOrderUpdateItem'>
                                <lable className='editOrderUpdateLabelItem'>Số điện thoại</lable>
                                <lable className='editOrderUpdateInput'>{staffChoosen?.phone}</lable>
                            </div>
                        </div>
                        <div className='editOrderUpdateRight' >
                            <div className='editOrderUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editOrderUpdateImg' />
                                <lable for='file' style={{marginBottom: 12,}} >Chọn nhân viên giao hàng</lable>
                                <select className='createComisionSelect' name='chooseStaff' onChange={(e)=>{setStaffChoosen(JSON.parse(e.target.value))}} id='active'>
                                    {
                                        listStaff.map((item) => (
                                            <option value={JSON.stringify(item)} >{item.fullName}</option>
                                        ))
                                    }
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
