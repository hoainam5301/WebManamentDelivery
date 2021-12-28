import React, { useState, useEffect } from 'react'
import "./store.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rowDataStaff } from '../../data';
import axios from 'axios';

export default function ManaStore() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/stores`)
            .then(res => {
                res.data.stores = res.data.stores.map(obj => {
                    obj.id = obj._id
                    return obj;
                })
                setData(res.data.stores)
                console.log("1231232", data)
            })
            .catch(error => console.log(error));
    }, []);
    const columns = [
        { field: 'id', headerName: 'Mã cửa hàng', width: 270 },
        { field: 'email', headerName: 'Email', width: 210 },
        {
            field: 'name', headerName: 'Tên cửa hàng', width: 240, renderCell: (params) => {
                return (
                    <div className='storeUser'>
                        <img className='storeUserImg' src={`https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png`} alt='' />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'address',
            headerName: 'Full Address',
            width: 320,
            renderCell: (params) => {
                return (
                    <div className='storeUser'>
                        {params.row.address.fullAddress}
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
                        <Link to={"/store/" + params.row.id}>
                            <button className='storeUserEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='storeUserDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        axios.delete(`https://fast-delivery-server.herokuapp.com/api/v1/stores/${id}`)
            .then(res => {
                console.log("Delete Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/stores`)
                    .then(res => {
                        res.data.stores = res.data.stores.map(obj => {
                            obj.id = obj._id
                            return obj;
                        })
                        setData(res.data.stores)
                        alert("Xóa cửa hàng thành công")
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };
    return (
        <div className='store'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            <Link to='/createStore'>
                <button className='staffAddButton'>Create</button>
            </Link>
        </div>
    )
}
