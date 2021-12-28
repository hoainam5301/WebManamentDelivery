import React, { useEffect, useState } from 'react'
import "./editStore.css"
import { LocationOn, MailOutline, PhoneAndroid, Store, } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import {Publish} from '@material-ui/icons';

export default function EditStore() {
    //let { staffid } = useParams();
    //console.log("123123123123213",staffid)
    //useEffect để get data sau khi lấy đc id để gọi API
    let { storeid } = useParams();
    //useEffect để get data sau khi lấy đc id để gọi API
    const [storeData, setStoreData] = useState()
    const [idDistrictChosen, setidDistrictChosen] = useState()
    const [dataWard, setDataWard] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataTypeStaff, setDataTypeStaff] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/stores/${storeid}`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setStoreData(res.data.store)
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts`)
            .then(res => {
                // res.data.staffs= res.data.staffs.map(obj =>{
                //     obj.id=obj._id
                //     return obj;
                // })
                setDataDistrict(res.data.districts)
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

            email: data.get('email') != "" ? data.get('email') : storeData.email,
            password: data.get('password') != "" ? data.get('password') : storeData.password,
            name: data.get('namestore') != "" ? data.get('namestore') : storeData.name,
            accountName: storeData.accountName,
            accountNumber: storeData.accountNumber,
            branchBank: storeData.branchBank,
            phone: data.get('phone') != "" ? data.get('phone') : storeData.phone,
            address: {
                fullAddress: storeData.address.fullAddress,
                noteAddress: data.get('noteaddress') != "" ? data.get('noteaddress') : storeData.address.noteAddress,
                ward: {
                    ...JSON.parse(data.get('ward')) != "" ? JSON.parse(data.get('ward')) : storeData.address.ward,
                }
            },
            bank: storeData.bank,
        }
        console.log("123", dataUser)
        axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/stores/${storeid}`, dataUser)
            .then((res) => {
                console.log("Edit store Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/stores/${storeid}`)
                    .then(res => {
                        
                        setStoreData(res.data.store)
                        alert('Chỉnh sửa cửa hàng thành công')
                    })
                    .catch(error => console.log(error));
            })
    };

    return (
        <div className='editStore'>
            <div className='editStoreTitleContainer'>
                <h1 className='editStoreTitle'>Edit store</h1>
            </div>
            <div className='editStoreContainer'>
                <div className='editStoreShow'>
                    <div className='editStoreShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editStoreShowImg' />
                        <div className='editStoreShowTopTitle'>
                            <span className='editStoreShowUsername'>{storeData?.name}</span>
                            <span className='editStoreShowUserTitle'>{storeData?.phone}</span>
                        </div>
                    </div>
                    <div className='editStoreShowBottom'>
                        <span className='editStoreShowBottomTitle'>
                            Account Detail
                        </span>
                        <div className='editStoreShowBottomInfo'>
                            <Store className='editStoreShowBottomIcon' />
                            <span className='editStoreShowBottomInfoTitle'>
                                {storeData?.name}
                            </span>
                        </div>
                        <span className='editStoreShowBottomTitle'>
                            Contact Detail
                        </span>
                        <div className='editStoreShowBottomInfo'>
                            <PhoneAndroid className='editStoreShowBottomIcon' />
                            <span className='editStoreShowBottomInfoTitle'>
                                {storeData?.phone}
                            </span>
                        </div>
                        <div className='editStoreShowBottomInfo'>
                            <MailOutline className='editStoreShowBottomIcon' />
                            <span className='editStoreShowBottomInfoTitle'>
                                {storeData?.email}
                            </span>
                        </div>
                        <div className='editStoreShowBottomInfo'>
                            <LocationOn className='editStoreShowBottomIcon' />
                            <span className='editStoreShowBottomInfoTitle'>
                                {storeData?.address.fullAddress}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editStoreUpdate'>
                    <span className='editStoreUpdateTitle'>Edit</span>
                    <form className='editStoreUpdateForm' onSubmit={handleSummit}>
                        <div className='editStoreUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStoreUpdateItem'>
                                    <lable className='editStoreUpdateLabelItem'>Tên cửa hàng</lable>
                                    <input type='text' name='namestore' placeholder='Nguyễn Văn A' className='editStoreUpdateInput' />
                                </div>
                                <div className='editStoreUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStoreUpdateLabelItem'>Note Address</lable>
                                    <input type='text' name='noteaddress' placeholder='khu phố Vinh Thanh, Bà Rịa Vũng Tàu' className='editStoreUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStoreUpdateItem'>
                                    <lable className='editStoreUpdateLabelItem'>Email</lable>
                                    <input type='text' name='email' placeholder='123123123123' className='editStoreUpdateInput' />
                                </div>
                                <div className='editStoreUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStoreUpdateLabelItem'>Quận</lable>
                                    <select className='editStoreUpdateInput' name='districts' id='district' onChange={onChangedDistrict}>
                                        {
                                            dataDistrict.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editStoreUpdateItem'>
                                    <lable className='editStoreUpdateLabelItem'>Password</lable>
                                    <input type='text' name='password' placeholder='********' className='editStoreUpdateInput' />
                                </div>
                                <div className='editStoreUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editStoreUpdateLabelItem'>Huyện</lable>
                                    <select className='editStoreUpdateInput' name='ward' id='ward'>
                                        {
                                            dataWard.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className='editStoreUpdateItem'>
                                <lable className='editStoreUpdateLabelItem'>Số điện thoại</lable>
                                <input type='text' placeholder='0908152231' className='editStoreUpdateInput' />
                            </div>
                        </div>
                        <div className='editStoreUpdateRight' >
                            <div className='editStoreUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editStoreUpdateImg' />
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className='' />
                            </div>
                            <button className='editStoreUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
