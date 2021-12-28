import React, { useEffect, useState } from 'react'
import "./editWareHouse.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid, HomeWork } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import {Publish} from '@material-ui/icons';

export default function EditWareHouse() {
    //let { staffid } = useParams();
    //console.log("123123123123213",staffid)
    //useEffect để get data sau khi lấy đc id để gọi API
    let { warehouseid } = useParams();
    //useEffect để get data sau khi lấy đc id để gọi API
    const [warehouseData, setWarehouseData] = useState()
    const [idDistrictChosen, setidDistrictChosen] = useState()
    const [dataWard, setDataWard] = useState([])
    const [dataDistrict, setDataDistrict] = useState([])
    const [dataTypeStaff, setDataTypeStaff] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses/${warehouseid}`)
            .then(res => {
                
                setWarehouseData(res.data.warehouse)
                
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/districts`)
            .then(res => {

                setDataDistrict(res.data.districts)
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
            name: data.get('name') != "" ? data.get('name') : warehouseData.name,
            address: {
                fullAddress: warehouseData.address.fullAddress,
                noteAddress: data.get('noteaddress') != "" ? data.get('noteaddress') : warehouseData.address.noteAddress,
                ward: {
                    ...JSON.parse(data.get('ward')) != "" ? JSON.parse(data.get('ward')) : warehouseData.address.ward,
                }
            },
        }
        console.log("123", dataUser)
        axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses/${warehouseid}`, dataUser)
            .then((res) => {
                console.log("Edit WareHouse Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses/${warehouseid}`)
                .then(res => {
                    
                    setWarehouseData(res.data.warehouse)
                    alert('Chỉnh sửa thông tin kho thành công')
                })
                .catch(error => console.log(error));
            })
    };
    return (
        <div className='editWareHouse'>
            <div className='editWareHouseTitleContainer'>
                <h1 className='editWareHouseTitle'>Edit warehouse</h1>
            </div>
            <div className='editWareHouseContainer'>
                <div className='editWareHouseShow'>
                    <div className='editWareHouseShowTop'>
                        <img src='https://cdn.iconscout.com/icon/free/png-256/warehouse-2544075-2123173.png' alt='' className='editWareHouseShowImg' />
                        <div className='editWareHouseShowTopTitle'>
                            <span className='editWareHouseShowUsername'>{warehouseData?.name}</span>
                        </div>
                    </div>
                    <div className='editWareHouseShowBottom'>
                        <span className='editWareHouseShowBottomTitle'>
                            Account Detail
                        </span>
                        <div className='editWareHouseShowBottomInfo'>
                            <HomeWork className='editWareHouseShowBottomIcon' />
                            <span className='editWareHouseShowBottomInfoTitle'>
                                {warehouseData?.name}
                            </span>
                        </div>
                        <span className='editWareHouseShowBottomTitle'>
                            Address Detail
                        </span>
                        <div className='editWareHouseShowBottomInfo'>
                            <LocationOn className='editWareHouseShowBottomIcon' />
                            <span className='editWareHouseShowBottomInfoTitle'>
                                {warehouseData?.address.ward.name}
                            </span>
                        </div>
                        <div className='editWareHouseShowBottomInfo'>
                            <LocationOn className='editWareHouseShowBottomIcon' />
                            <span className='editWareHouseShowBottomInfoTitle'>
                                {warehouseData?.address.ward.district.name}
                            </span>
                        </div>
                        <div className='editWareHouseShowBottomInfo'>
                            <LocationOn className='editWareHouseShowBottomIcon' />
                            <span className='editWareHouseShowBottomInfoTitle'>
                                {warehouseData?.address.noteAddress}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editWareHouseUpdate'>
                    <span className='editWareHouseUpdateTitle'>Edit</span>
                    <form className='editWareHouseUpdateForm' onSubmit={handleSummit} >
                        <div className='editWareHouseUpdateLeft'>
                            <div className='editWareHouseUpdateItem'>
                                <lable className='editWareHouseUpdateLabelItem'>Tên kho</lable>
                                <input type='text' name='name' placeholder='kd2000' className='editWareHouseUpdateInput' />
                            </div>
                            <div className='editWareHouseUpdateItem'>
                                <lable className='editWareHouseUpdateLabelItem'>Quận</lable>
                                <select className='editWareHouseUpdateInput' name='districts' id='district' onChange={onChangedDistrict}>
                                        {
                                            dataDistrict.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                            </div>
                            <div className='editWareHouseUpdateItem'>
                                <lable className='editWareHouseUpdateLabelItem'>Huyện</lable>
                                <select className='editWareHouseUpdateInput' name='ward' id='ward'>
                                        {
                                            dataWard.map((item) => (
                                                <option value={JSON.stringify(item)}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                            </div>
                            <div className='editWareHouseUpdateItem'>
                                <lable className='editWareHouseUpdateLabelItem'>Note Address</lable>
                                <input type='text' name='noteaddress' placeholder='0908152231' className='editWareHouseUpdateInput' />
                            </div>
                        </div>
                        <div className='editWareHouseUpdateRight' >
                            <div className='editWareHouseUpdateUploadImg'>
                                <img src='https://cdn.iconscout.com/icon/free/png-256/warehouse-2544075-2123173.png' alt='' className='editWareHouseUpdateImg' />
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className='' />
                            </div>
                            <button className='editWareHouseUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
