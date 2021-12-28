import React, { useEffect, useState } from 'react'
import "./createStore.css"
import axios from 'axios';

export default function CreateStore() {

    const [idDistrictChosen, setidDistrictChosen] = useState()
    const [dataWard, setDataWard] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataBanks, setDataBanks] = useState([])
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
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/banks`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setDataBanks(res.data)
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
        const dataStore = {
            email: data.get('email'),
            password: data.get('password'),
            name: data.get('namestore'),
            accountName: data.get('nameaccountbank'),
            accountNumber: data.get('numberaccountbank'),
            branchBank: data.get('branchbank'),
            phone: data.get('phone'),
            address: {
                fullAddress: '',
                noteAddress: data.get('noteaddress'),
                ward: {
                    ...JSON.parse(data.get('ward')),
                }
            },
            bank: JSON.parse(data.get('bank')),
        }
        console.log("123", dataStore)
        axios.post(`https://fast-delivery-server.herokuapp.com/api/v1/stores`, dataStore)
            .then((res) => {
                console.log("Create store Success")
                alert("Tạo cửa hàng thành công")
            })
    };

    return (
        <div className='createStore'>
            <h1 className='createStoreTitle'>New Store</h1>
            <form className='createStoreForm' onSubmit={handleSummit}>
                <div className='createStoreFormItem'>
                    <label>Email</label>
                    <input type='email' name='email' placeholder='Nguyenvanhoa@gmail.com' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Password </label>
                    <input type='password' name='password' placeholder='*********' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Name store</label>
                    <input type='text' name='namestore' placeholder='nguyễn văn a' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Số điện thoại</label>
                    <input type='text' name='phone' placeholder='123123123' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Note Address</label>
                    <input type='text' name='noteaddress' placeholder='hỏi cc' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Quận</label>
                    <select className='createStoreSelect' name='districts' id='district' onChange={onChangedDistrict}>
                        {
                            dataDistrict.map((item) => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createStoreFormItem'>
                    <label>Huyện</label>
                    <select className='createStoreSelect' name='ward' id='ward'>
                        {
                            dataWard.map((item) => (
                                <option value={JSON.stringify(item)}>{item.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createStoreFormItem'>
                    <label>Ngân hàng</label>
                    <select className='createStoreSelect' name='bank' id='bank'>
                    {
                            dataBanks.map((item) => (
                                <option value={JSON.stringify(item)}>{item.vnName}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='createStoreFormItem'>
                    <label>Tên tài khoản</label>
                    <input type='text' name='nameaccountbank' placeholder='123123123' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Số tài khoản</label>
                    <input type='text' name='numberaccountbank'  placeholder='123123123' />
                </div>
                <div className='createStoreFormItem'>
                    <label>Chi nhánh</label>
                    <input type='text' name='branchbank' placeholder='123123123' />
                </div>

                <button className='createStoreButton'>Create</button>
            </form>
        </div>
    )
}
