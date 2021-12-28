import React, { useState,useEffect } from 'react'
import "./order.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rowDataStaff } from '../../data';
import axios from 'axios';

export default function ManaOrder() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/orders`)
            .then(res => {
                res.data.orders = res.data.orders.map(obj => {
                    obj.id = obj._id
                    return obj;
                })
                setData(res.data.orders)
                console.log("1231232",data)
            })
            .catch(error => console.log(error));
    }, []);
    const columns = [
        { field: 'id', headerName: 'Mã đơn hàng', width: 255 },
        { field: 'receiverName', headerName: 'Tên người nhận', width: 210 },  
        {
            field: 'orderName', headerName: 'Tên đơn hàng', width: 240, renderCell: (params) => {
                return (
                    <div className='orderUser'>
                        <img className='orderUserImg' src={params.row.avatar} alt='' />
                        {params.row.orderName}
                    </div>
                )
            }
        },
        {
            field: 'receiverAddress',
            headerName: 'Địa chỉ giao hàng',
            width: 310,
            renderCell: (params) => {
                return (
                    <div className='orderUser'>
                        {params.row.receiverAddress.fullAddress}
                    </div>
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/order/" + params.row.id}>
                            <button className='orderUserEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='orderUserDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    return (
        <div className='order'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
