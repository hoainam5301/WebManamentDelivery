import React, { useEffect, useState } from 'react'
import "./editDeliveryMethod.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditDeliveryMethod() {
    let { deliverymethodid } = useParams();
    const [dvMethodData, setDvMethodData] = useState()
    
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods/${deliverymethodid}`)
            .then(res => {

                setDvMethodData(res.data.dvMethod)
            })
            .catch(error => console.log(error));
    }, []);
    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            name: data.get('name') != "" ? data.get('name') : dvMethodData.name,
            innerDistrictFee: data.get('innerDistrictFee') != "" ? data.get('innerDistrictFee') : dvMethodData.innerDistrictFee,
            outerDistrictFee: data.get('outerDistrictFee') != "" ? data.get('outerDistrictFee') : dvMethodData.outerDistrictFee ,
            surChargeInner: data.get('surChargeInner') != "" ? data.get('surChargeInner') : dvMethodData.surChargeInner ,
            surChargeOuter: data.get('surChargeOuter') != "" ? data.get('surChargeOuter') : dvMethodData.surChargeOuter,
            feeChangeAddressDelivery: data.get('feeChangeAddressDelivery') != "" ? data.get('feeChangeAddressDelivery') : dvMethodData.feeChangeAddressDelivery,
            feeStorageCharges: data.get('feeStorageCharges') != "" ? data.get('feeStorageCharges') : dvMethodData.feeStorageCharges,
            feeReturn: data.get('feeReturn') != "" ? data.get('feeReturn') : dvMethodData.feeReturn,
        }
        axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods/${deliverymethodid}`, dataUser)
            .then((res) => {
                console.log("Edit user Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods/${deliverymethodid}`)
                    .then(res => {

                        setDvMethodData(res.data.dvMethod)
                        alert('Chỉnh sửa phương thức vận chuyển thành công');
                    })
                    .catch(error => console.log(error));
            })
    };

    return (
        <div className='editDeliveryMethod'>
            <div className='editDeliveryMethodTitleContainer'>
                <h1 className='editDeliveryMethodTitle'>Edit delivery method</h1>
            </div>
            <div className='editDeliveryMethodContainer'>
                <div className='editDeliveryMethodShow'>
                    <div className='editDeliveryMethodShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editDeliveryMethodShowImg' />
                        <div className='editDeliveryMethodShowTopTitle'>
                            <span className='editDeliveryMethodShowUsername'>{dvMethodData?.name}</span>
                        </div>
                    </div>
                    <div className='editDeliveryMethodShowBottom'>
                        <span className='editDeliveryMethodShowBottomTitle'>
                            Delivery Method Detail
                        </span>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <PermIdentity className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                {dvMethodData?.name}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <GridOn className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Phí giao nội quận: {dvMethodData?.innerDistrictFee}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <CalendarToday className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Phí giao ngoại quận: {dvMethodData?.outerDistrictFee}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <Wc className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Phí thay đổi địa chỉ: {dvMethodData?.feeChangeAddressDelivery}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <AccountCircle className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Phí lưu kho: {dvMethodData?.feeStorageCharges}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <AccountCircle className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Phí trả hàng: {dvMethodData?.feeReturn}
                            </span>
                        </div>
                        <span className='editDeliveryMethodShowBottomTitle'>
                            Sur Change
                        </span>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <PhoneAndroid className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                            Nội quận: {dvMethodData?.surChargeInner}
                            </span>
                        </div>
                        <div className='editDeliveryMethodShowBottomInfo'>
                            <MailOutline className='editDeliveryMethodShowBottomIcon' />
                            <span className='editDeliveryMethodShowBottomInfoTitle'>
                                Ngoại quận: {dvMethodData?.surChargeOuter}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editDeliveryMethodUpdate'>
                    <span className='editDeliveryMethodUpdateTitle'>Edit</span>
                    <form className='editDeliveryMethodUpdateForm' onSubmit={handleSummit}>
                        <div className='editDeliveryMethodUpdateLeft'>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Tên phương thức</lable>
                                    <input type='text' placeholder={dvMethodData?.name} name='name' className='editDeliveryMethodUpdateInput' />
                                </div>
                                <div className='editDeliveryMethodUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Phí vận chuyển nội quận</lable>
                                    <input type='text' placeholder={dvMethodData?.innerDistrictFee} name='innerDistrictFee' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Phí vận chuyển ngoại quận</lable>
                                    <input type='text' placeholder={dvMethodData?.outerDistrictFee} name='outerDistrictFee' className='editDeliveryMethodUpdateInput' />
                                </div>
                                <div className='editDeliveryMethodUpdateItem' style={{ marginLeft: '36px', }}>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Phụ phí nội quận</lable>
                                    <input type='text' placeholder={dvMethodData?.surChargeInner} name='surChargeInner' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginRight: '24px', }} >
                                <div className='editDeliveryMethodUpdateItem'>
                                    <lable className='editDeliveryMethodUpdateLabelItem'>Phụ phí ngoại quận</lable>
                                    <input type='text' placeholder={dvMethodData?.surChargeOuter} name='surChargeOuter' className='editDeliveryMethodUpdateInput' />
                                </div>
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Phí thay đổi địa chỉ</lable>
                                <input type='text' placeholder={dvMethodData?.feeChangeAddressDelivery} name='feeChangeAddressDelivery' className='editDeliveryMethodUpdateInput' />
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Phí lưu kho</lable>
                                <input type='text' placeholder={dvMethodData?.feeStorageCharges} name='feeStorageCharges' className='editDeliveryMethodUpdateInput' />
                            </div>
                            <div className='editDeliveryMethodUpdateItem'>
                                <lable className='editDeliveryMethodUpdateLabelItem'>Phí trả lại</lable>
                                <input type='text' placeholder={dvMethodData?.feeReturn} name='feeReturn' className='editDeliveryMethodUpdateInput' />
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
