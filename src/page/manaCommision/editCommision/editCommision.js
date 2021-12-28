import React, { useEffect, useState } from 'react'
import "./editCommision.css"
import { CalendarToday, LocationOn, Wc, MailOutline, GridOn, AccountCircle, PermIdentity, PhoneAndroid } from "@material-ui/icons"
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function EditCommision() {
    let { commisionid } = useParams();
    let query = useQuery();
    //console.log(query.get("type"))
    const [commissionData, setCommissionData] = useState()

    useEffect(() => {
        if (query.get("type") === "Cửa hàng") {
            axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstores/${commisionid}`)
                .then(res => {
                    // res.data.staffs= res.data.staffs.map(obj =>{
                    //     obj.id=obj._id
                    //     return obj;
                    // })
                    setCommissionData(res.data.cmStore)

                })
                .catch(error => console.log(error));
        }
        else if (query.get("type") === "Nhân viên") {
            axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstaffs/${commisionid}`)
                .then(res => {
                    // res.data.staffs= res.data.staffs.map(obj =>{
                    //     obj.id=obj._id
                    //     return obj;
                    // })
                    setCommissionData(res.data.cmStaff)

                })
                .catch(error => console.log(error));
        }
    }, []);

    const handleSummit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const dataUser = {
            name: data.get('name') != "" ? data.get('name') : commissionData.name,
            orderPerMonthMin: data.get('minorder') != "" ? data.get('minorder') : commissionData.orderPerMonthMin,
            orderPerMonthMax: data.get('maxorder') != "" ? data.get('maxorder') : commissionData.orderPerMonthMax,
            ratioCommission: data.get('chietkhau') != "" ? data.get('chietkhau') : commissionData.ratioCommission,
            note: data.get('note') != "" ? data.get('note') : commissionData.note,
        }
        if (query.get("type") === "Nhân viên") {
            axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/cmstaffs/${commisionid}`, dataUser)
                .then((res) => {
                    console.log("Edit commission Success")
                    axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstaffs/${commisionid}`)
                        .then(res => {
                            // res.data.staffs= res.data.staffs.map(obj =>{
                            //     obj.id=obj._id
                            //     return obj;
                            // })
                            setCommissionData(res.data.cmStaff)
                            alert("Chỉnh sửa chính sách nhân viên thành công")
                        })
                        .catch(error => console.log(error));

                })
        }
        else if (query.get("type") === "Cửa hàng") {
            axios.put(`https://fast-delivery-server.herokuapp.com/api/v1/cmstores/${commisionid}`, dataUser)
                .then((res) => {
                    console.log("Edit commission Success")
                    axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstores/${commisionid}`)
                        .then(res => {
                            // res.data.staffs= res.data.staffs.map(obj =>{
                            //     obj.id=obj._id
                            //     return obj;
                            // })
                            setCommissionData(res.data.cmStore)
                            alert('Chỉnh sửa chính sách cửa hàng thành công')
                        })
                        .catch(error => console.log(error));
                })
        }

    };

    return (
        <div className='editCommisiom'>
            <div className='editCommisiomTitleContainer'>
                <h1 className='editCommisiomTitle'>Edit commission</h1>
            </div>
            <div className='editCommisiomContainer'>
                <div className='editCommisiomShow'>
                    <div className='editCommisiomShowTop'>
                        <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editCommisiomShowImg' />
                        <div className='editCommisiomShowTopTitle'>
                            <span className='editCommisiomShowUsername'>{commissionData?.name}</span>
                        </div>
                    </div>
                    <div className='editCommisiomShowBottom'>
                        <span className='editCommisiomShowBottomTitle'>
                            About commision
                        </span>
                        <div className='editCommisiomShowBottomInfo'>
                            <PermIdentity className='editCommisiomShowBottomIcon' />
                            <span className='editCommisiomShowBottomInfoTitle'>
                                {commissionData?.name}
                            </span>
                        </div>
                        <div className='editCommisiomShowBottomInfo'>
                            <GridOn className='editCommisiomShowBottomIcon' />
                            <span className='editCommisiomShowBottomInfoTitle'>
                                {commissionData?.ratioCommission}
                            </span>
                        </div>
                        <div className='editCommisiomShowBottomInfo'>
                            <CalendarToday className='editCommisiomShowBottomIcon' />
                            <span className='editCommisiomShowBottomInfoTitle'>
                                {commissionData?.orderPerMonthMax}
                            </span>
                        </div>
                        <div className='editCommisiomShowBottomInfo'>
                            <Wc className='editCommisiomShowBottomIcon' />
                            <span className='editCommisiomShowBottomInfoTitle'>
                                {query.get("type")}
                            </span>
                        </div>
                        <div className='editCommisiomShowBottomInfo'>
                            <AccountCircle className='editCommisiomShowBottomIcon' style={{ alignItems: 'start' }} />
                            <span className='editCommisiomShowBottomInfoTitle'>
                                {commissionData?.note}
                            </span>
                        </div>
                    </div>
                </div>
                <div className='editCommisiomUpdate'>
                    <span className='editCommisiomUpdateTitle'>Edit</span>
                    <form className='editCommisiomUpdateForm' onSubmit={handleSummit}>
                        <div className='editCommisiomUpdateLeft'>
                            <div className='editCommisiomUpdateItem'>
                                <lable className='editCommisiomUpdateLabelItem'>Tên chính sách</lable>
                                <input type='text' name='name' placeholder='kd2000' className='editCommisiomUpdateInput' />
                            </div>
                            <div className='editCommisiomUpdateItem'>
                                <lable className='editCommisiomUpdateLabelItem'>Chiết khấu</lable>
                                <input type='text' name='chietkhau' placeholder='kd2000' className='editCommisiomUpdateInput' />
                            </div>
                            <div className='editCommisiomUpdateItem'>
                                <lable className='editCommisiomUpdateLabelItem'>Số đơn hàng tối thiểu trong tháng</lable>
                                <input type='text' name='minorder' placeholder='0908152231' className='editCommisiomUpdateInput' />
                            </div>
                            <div className='editCommisiomUpdateItem'>
                                <lable className='editCommisiomUpdateLabelItem'>Số đơn hàng tối đa trong tháng</lable>
                                <input type='text' name='maxorder' placeholder='0908152231' className='editCommisiomUpdateInput' />
                            </div>
                            <div className='editCommisiomUpdateItem'>
                                <lable className='editCommisiomUpdateLabelItem'>Note</lable>
                                <input type='text' name='note' placeholder='0908152231' className='editCommisiomUpdateInput' />
                            </div>
                        </div>
                        <div className='editCommisiomUpdateRight' >
                            <div className='editCommisiomUpdateUploadImg'>
                                <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='editCommisiomUpdateImg' />
                                {/* <lable for='file' ><Publish/></lable> */}
                                <input type='file' id='file' className='' />
                            </div>
                            <button className='editCommisiomUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
