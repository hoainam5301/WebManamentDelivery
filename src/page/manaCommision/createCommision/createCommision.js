import React from 'react'
import "./createCommision.css"
import axios from 'axios';

export default function CreateCommision() {

    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            name: data.get('name'),
            orderPerMonthMin: data.get('minorrder'),
            orderPerMonthMax: data.get('maxorrder'),
            ratioCommission: data.get('radio'),
            note: `Đối với những cửa hàng, nhân viên có số lượng đơn hàng giao >${data.get('maxorrder')}đơn/ tháng sẽ nhận được ${data.get('radio')}% tổng cước giao hàng trong 10 đơn hàng đầu tiên`,
        }
        console.log("123", dataUser)
        console.log("456456",data.get('type'))
        if (data.get('type') === "nhanvien") {
            console.log("vào nhân viên")
            axios.post(`https://fast-delivery-server.herokuapp.com/api/v1/cmstaffs`, dataUser)
                .then((res) => {
                    console.log("Create commission Staf Success")
                })
        }
        else if(data.get('type')==="cuahang"){
            console.log("vào cửa hàng")
            axios.post(`https://fast-delivery-server.herokuapp.com/api/v1/cmstores`, dataUser)
                .then((res) => {
                    console.log("Create commission Store Success")
                    alert('Tạo chính sách thành công')
                })
        }
    };

    return (
        <div className='createComision'>
            <h1 className='createComisionTitle'>New Commision</h1>
            <form className='createComisionForm' onSubmit={handleSummit}>
                <div className='createComisionFormItem'>
                    <label>Tên chính sách</label>
                    <input type='text' name='name' placeholder='Nguyenvanhoa@gmail.com' />
                </div>
                <div className='createComisionFormItem'>
                    <label>Đơn hàng tối thiểu trong tháng </label>
                    <input type='text' name='minorrder' placeholder='50' />
                </div>
                <div className='createComisionFormItem'>
                    <label>Đơn hàng tối đa trong tháng</label>
                    <input type='text' name='maxorrder' placeholder='100' />
                </div>
                <div className='createComisionFormItem'>
                    <label>Chiết khấu</label>
                    <input type='text' name='radio' placeholder='7%' />
                </div>
                <div className='createComisionFormItem'>
                    <label>Loại chính sách</label>
                    <select className='createComisionSelect' name='type' id='type'>
                        <option value='nhanvien'>Nhân viên</option>
                        <option value='cuahang'>Cửa hàng</option>
                    </select>
                </div>
                <button className='createComisionButton'>Create</button>
            </form>
        </div>
    )
}
