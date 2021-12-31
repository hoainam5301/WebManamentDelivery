import React from 'react'
import "./createDeliveryMethod.css"
import axios from 'axios';

export default function CreateDeliveryMethod() {
    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            name: data.get('name'),
            innerDistrictFee: data.get('innerDistrictFee'),
            outerDistrictFee: data.get('outerDistrictFee'),
            surChargeInner: data.get('surChargeInner'),
            surChargeOuter:data.get('surChargeOuter'),
            feeChangeAddressDelivery: data.get('feeChangeAddressDelivery'),
            feeStorageCharges:data.get('feeStorageCharges'),
            feeReturn: data.get('feeReturn'),
            
        }
        axios.post(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods`, dataUser)
            .then((res) => {
                console.log("Create user Success")
                alert('Tạo phương thức vận chuyển thành công');
            })
    };
    return (
        <div className='createDeliveryMethod'>
            <h1 className='createDeliveryMethodTitle'>New Delivery method</h1>
            <form className='createDeliveryMethodForm' onSubmit={handleSummit}>
                <div className='createDeliveryMethodFormItem'>
                    <label>Tên phương thức</label>
                    <input type='text' placeholder='Giao hàng nhanh' name='name' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phí vận chuyển nội quận</label>
                    <input type='text' placeholder='5000' name='innerDistrictFee' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phí vận chuyển ngoại quận</label>
                    <input type='text' placeholder='50000' name='outerDistrictFee' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phụ phí nội quận</label>
                    <input type='text' placeholder='5000' name='surChargeInner' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phụ phí ngoại quận</label>
                    <input type='text' placeholder='5000' name='surChargeOuter' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phí thay đổi địa chỉ</label>
                    <input type='text' placeholder='5000' name='feeChangeAddressDelivery' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phí lưu kho</label>
                    <input type='text' placeholder='5000' name='feeStorageCharges' />
                </div>
                <div className='createDeliveryMethodFormItem'>
                    <label>Phí trả hàng</label>
                    <input type='text' placeholder='5000' name='feeReturn' />
                </div>
                <button className='createDeliveryMethodButton'>Create</button>
            </form>
        </div>
    )
}
