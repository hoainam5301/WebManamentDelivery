import React, { useEffect, useState } from 'react'
import "./createDeliveryStaff.css"
import axios from 'axios';

export default function CreateDeliveryStaff() {
    const [idDistrictChosen, setidDistrictChosen] = useState()
    const [dataWard, setDataWard] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataTypeStaff, setDataTypeStaff] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setDataDistrict(res.data.districts)
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/typestaffs`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setDataTypeStaff(res.data.typeStaffs)
            })
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts/${idDistrictChosen}/wards`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setDataWard(res.data.wards)
                //console.log("123123123123123123", res.data.wards)
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
            email: data.get('email'),
            password: data.get('password'),
            fullName: data.get('fullname'),
            basicSalary: data.get('basicsalary'),
            idNumber:data.get('idnumber'),
            phone: data.get('phone'),
            dateOfBirth: data.get('dateofbirth'),
            address: {
                fullAddress: '',
                noteAddress: data.get('noteaddress'),
                ward: {
                    ...JSON.parse(data.get('ward')),
                }
            },
            typeStaff: JSON.parse(data.get('typestaff')),
            gender: data.get('gender'),
        }
        console.log("123", dataUser)
        axios.post(`https://fast-delivery-server.herokuapp.com/api/v1/staffs`, dataUser)
            .then((res) => {
                console.log("Create user Success")
                alert('Tạo nhân viên thành công');
            })
    };
    return (
        <div className='createDelivery'>
            <h1 className='createDeliveryTitle'>New User</h1>
            <form className='createDeliveryForm' onSubmit={handleSummit}>
                <div className='createDeliveryFormItem'>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Nguyenvanhoa@gmail.com' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Password </label>
                    <input type='password' name='password' placeholder='*********' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Full name</label>
                    <input type='text' name='fullname' placeholder='nguyễn văn a' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Số điện thoại</label>
                    <input type='text' name='phone' placeholder='123123123' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Lương cơ bản</label>
                    <input type='text' name='basicsalary' placeholder='123123123' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Số CCCD/CMND</label>
                    <input type='text' name='idnumber' placeholder='123123123' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Ngày sinh</label>
                    <input type='date' name='dateofbirth' placeholder='22/14/2001' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Note Address</label>
                    <input type='text' name='noteaddress' placeholder='hỏi cc' />
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Quận</label>
                    <select className='createDeliverySelect' name='districts' id='district' onChange={onChangedDistrict}>
                        {
                            dataDistrict.map((item) => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Huyện</label>
                    <select className='createDeliverySelect' name='ward' id='ward'>
                        {
                            dataWard.map((item) => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Loại nhân viên</label>
                    <select className='createDeliverySelect' name='typestaff' id='typestaff'>
                        {
                            dataTypeStaff.map((item) => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createDeliveryFormItem'>
                    <label>Gender</label>
                    <div className='createDeliveryGender'>
                        <input type='radio' name='gender' id='male' value='male' placeholder='hỏi cc' />
                        <label for='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female' placeholder='hỏi cc' />
                        <label for='female'>Female</label>
                        <input type='radio' name='gender' id='orther' value='orther' placeholder='hỏi cc' />
                        <label for='orther'>Orther</label>
                    </div>
                </div>

                <button className='createDeliveryButton'>Create</button>
            </form>
        </div>
    )
}
