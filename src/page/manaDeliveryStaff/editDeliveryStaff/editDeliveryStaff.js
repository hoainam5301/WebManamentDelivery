import React, { useEffect, useState } from 'react'
import "./editDeliveryStaff.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import {Publish} from '@material-ui/icons';

export default function EditDeliveryStaff() {
    let { staffid } = useParams();

    //useEffect để get data sau khi lấy đc id để gọi API
    const [staffData, setStaffData] = useState()
    const [idDistrictChosen, setidDistrictChosen] = useState()
    const [dataWard, setDataWard] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataTypeStaff, setDataTypeStaff] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/staffs/${staffid}`)
            .then(res => {

                setStaffData(res.data.staff)
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts`)
            .then(res => {

                setDataDistrict(res.data.districts)
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/typestaffs`)
            .then(res => {

                setDataTypeStaff(res.data.typeStaffs)
            })
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts/${idDistrictChosen}/wards`)
            .then(res => {

                setDataWard(res.data.wards)

            })
            .catch(error => console.log(error));
    }, [idDistrictChosen])
    const onChangedDistrict = (e) => {
        const idDistrict = JSON.parse(e.target.value)._id;
        setidDistrictChosen(idDistrict)
    }
    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            email: data.get('email') != "" ? data.get('email') : staffData.email,
            password: data.get('password') != "" ? data.get('password') : staffData.password,
            fullName: data.get('fullname') != "" ? data.get('fullname') : staffData.fullName,
            basicSalary: staffData.basicSalary,
            idNumber: data.get('idnumber') != "" ? data.get('idnumber') : staffData.idNumber,
            phone: data.get('phone') != "" ? data.get('phone') : staffData.phone,
            dateOfBirth: data.get('dateofbirth') != "" ? data.get('dateofbirth') : staffData.dateOfBirth,
            address: {
                fullAddress: staffData.address.fullAddress,
                noteAddress: data.get('noteaddress') != "" ? data.get('noteaddress') : staffData.address.noteAddress,
                ward: {
                    ...JSON.parse(data.get('ward')) != "" ? JSON.parse(data.get('ward')) : staffData.address.ward,
                }
            },
            typeStaff: staffData.typeStaff,
            gender: staffData.gender,
        }
        axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/staffs/${staffid}`, dataUser)
            .then((res) => {
                console.log("Edit user Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/staffs/${staffid}`)
                    .then(res => {

                        setStaffData(res.data.staff)
                        alert('Chỉnh sửa nhân viên thành công');
                    })
                    .catch(error => console.log(error));
            })
    };
    return (
        <div className='editStaff'>
            <div className='editStaffTitleContainer'>
                <h1 className='editStaffTitle'>Edit user</h1>
            </div>
            <div className='editStaffContainer'>
                <div className='editStaffShow'>
                    <div className='editStaffShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editStaffShowImg' />
                        <div className='editStaffShowTopTitle'>
                            <span className='editStaffShowUsername'>{staffData?.fullName}</span>
                            <span className='editStaffShowUserTitle'>{staffData?.typeStaff.name}</span>
                        </div>
                    </div>
                    <div className='editStaffShowBottom'>
                        <span className='editStaffShowBottomTitle'>
                            Account Detail
                        </span>
                        <div className='editStaffShowBottomInfo'>
                            <PermIdentity className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.fullName}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <GridOn className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.idNumber}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <CalendarToday className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.dateOfBirth}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <Wc className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.gender}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <AccountCircle className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.typeStaff.name}
                            </span>
                        </div>
                        <span className='editStaffShowBottomTitle'>
                            Contact Detail
                        </span>
                        <div className='editStaffShowBottomInfo'>
                            <PhoneAndroid className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.phone}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <MailOutline className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.email}
                            </span>
                        </div>
                        <div className='editStaffShowBottomInfo'>
                            <LocationOn className='editStaffShowBottomIcon' />
                            <span className='editStaffShowBottomInfoTitle'>
                                {staffData?.address.fullAddress}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editStaffUpdate'>
                    <span className='editStaffUpdateTitle'>Edit</span>
                    <form className='editStaffUpdateForm' onSubmit={handleSummit}>
                        <div className='editStaffUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStaffUpdateItem'>
                                    <lable className='editStaffUpdateLabelItem'>Họ và tên</lable>
                                    <input type='text' placeholder={staffData?.fullName} name='fullname' className='editStaffUpdateInput' />
                                </div>
                                <div className='editStaffUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStaffUpdateLabelItem'>Note Address</lable>
                                    <input type='text' name='noteaddress' placeholder='khu phố Vinh Thanh, Bà Rịa Vũng Tàu' className='editStaffUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStaffUpdateItem'>
                                    <lable className='editStaffUpdateLabelItem'>Id Number CCCD</lable>
                                    <input type='text' name='idnumber' placeholder={staffData?.idNumber} className='editStaffUpdateInput' />
                                </div>
                                <div className='editStaffUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStaffUpdateLabelItem'>Quận</lable>
                                    <select className='editStaffUpdateInput' name='districts' id='district' onChange={onChangedDistrict}>
                                        {
                                            dataDistrict.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStaffUpdateItem'>
                                    <lable className='editStaffUpdateLabelItem'>Ngày sinh</lable>
                                    <input type='text' name='dateofbirth' placeholder={staffData?.dateOfBirth} className='editStaffUpdateInput' />
                                </div>
                                <div className='editStaffUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStaffUpdateLabelItem'>Huyện</lable>
                                    <select className='editStaffUpdateInput' name='ward' id='ward'>
                                        {
                                            dataWard.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>

                                </div>
                            </div>
                            <div className='editStaffUpdateItem'>
                                <lable className='editStaffUpdateLabelItem'>Email</lable>
                                <input type='text' name='email' placeholder={staffData?.email} className='editStaffUpdateInput' />
                            </div>
                            <div className='editStaffUpdateItem'>
                                <lable className='editStaffUpdateLabelItem'>Password</lable>
                                <input type='text' name='password' placeholder='*********' className='editStaffUpdateInput' />
                            </div>
                            <div className='editStaffUpdateItem'>
                                <lable className='editStaffUpdateLabelItem'>Số điện thoại</lable>
                                <input type='text' name='phone' placeholder={staffData?.phone} className='editStaffUpdateInput' />
                            </div>
                        </div>
                        <div className='editStaffUpdateRight' >
                            <div className='editStaffUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editStaffUpdateImg' />
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className='' />
                            </div>
                            <button className='editStaffUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
