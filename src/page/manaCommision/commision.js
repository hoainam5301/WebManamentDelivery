import React, { useState,useEffect } from 'react'
import "./commision.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rowDataStaff } from '../../data';
import axios from 'axios';

export default function ManaCommision() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstores`)
            .then(res => {
                res.data.cmStores = res.data.cmStores.map(obj => {
                    obj.id = obj._id
                    obj.type='Cửa hàng';
                    return obj;
                })
                setData(res.data.cmStores)
            })
            .catch(error => console.log(error));
            axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/cmstaffs`)
            .then(res => {
                res.data.cmStaffs = res.data.cmStaffs.map(obj => {
                    obj.id = obj._id
                    obj.type='Nhân viên';
                    return obj;
                })
                setData(prevState => {
                    let newState = [...prevState];
                    return newState.concat(res.data.cmStaffs)
                })
                
            })
            .catch(error => console.log(error));
    }, []);
    const columns = [
        { field: 'id', headerName: 'Mã chính sách', width: 240 },
        { field: 'name', headerName: 'Tên chính sách', width: 240 },  
        {
            field: 'ratioCommission', headerName: 'Chiết khấu', width: 180, renderCell: (params) => {
                return (
                    <div className='commision'>
                        <img className='commisionImg' src={params.row.avatar} alt='' />
                        {params.row.ratioCommission}
                    </div>
                )
            }
        },
        {
            field: 'orderPerMonthMax',
            headerName: 'Đơn hàng/tháng',
            width: 180,
        },
        {
            field: 'type',
            headerName: 'Loại chính sách',
            width: 220,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/commision/" + params.row.id + "?type=" + params.row.type}>
                            <button className='commisionEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='commisionDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        // setData(data.filter((item) => item.id !== id));
    };
    console.log("1231232",data)
    return (
        
        <div className='commision'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            <Link to='/createCommision'>
                <button className='commisionAddButton'>Create</button>
            </Link>
        </div>
    )
}
