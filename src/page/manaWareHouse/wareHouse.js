import React, { useState, useEffect } from 'react'
import "./wareHouse.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rowDataStaff } from '../../data';
import axios from 'axios';

export default function ManaWareHouse() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses`)
            .then(res => {
                res.data.warehouses = res.data.warehouses.map(obj => {
                    obj.id = obj._id
                    return obj;
                })
                setData(res.data.warehouses)
            })
            .catch(error => console.log(error));
    }, []);
    const columns = [
        { field: 'id', headerName: 'Mã kho', width: 250 },
        { field: 'name', headerName: 'Tên kho', width: 200 },
        {
            field: 'noteaddress', headerName: 'Note Address', width: 220, renderCell: (params) => {
                return (
                    <div className='wareHouse'>
                        {params.row.address.noteAddress}
                    </div>
                )
            }
        },
        {
            field: 'ward', headerName: 'Huyện', width: 190, renderCell: (params) => {
                return (
                    <div className='wareHouse'>

                        {params.row.address.ward.name}
                    </div>
                )
            }
        },
        {
            field: 'address', headerName: 'Quận', width: 190, renderCell: (params) => {
                return (
                    <div className='wareHouse'>

                        {params.row.address.ward.district.name}
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
                        <Link to={"/wareHouse/" + params.row.id}>
                            <button className='wareHouseEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='wareHouseDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        axios.delete(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses/${id}`)
            .then(res => {
                console.log("Delete Success")
                axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/warehouses`)
                    .then(res => {
                        res.data.warehouses = res.data.warehouses.map(obj => {
                            obj.id = obj._id
                            return obj;
                        })
                        setData(res.data.warehouses)
                        alert('Xóa kho thành công')
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };
    return (
        <div className='wareHouse'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            <Link to='/createwareHouse'>
                <button className='wareHouseAddButton'>Create</button>
            </Link>
        </div>
    )
}
