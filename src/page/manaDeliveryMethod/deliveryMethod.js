import React, { useState,useEffect } from 'react'
import "./deliveryMethod.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rowDataStaff } from '../../data';
import axios from 'axios';

export default function ManaDeliveryMethod() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods`)
            .then(res => {
                res.data.dvMethods = res.data.dvMethods.map(obj => {
                    obj.id = obj._id
                    return obj;
                })
                setData(res.data.dvMethods)
            })
            .catch(error => console.log(error));
    }, [data]);
    const columns = [
        
        { field: 'id', headerName: 'Mã phương thức', width: 300 },
        { field: 'name', headerName: 'Tên phương thức', width: 230 },  
        {
            field: 'innerDistrictFee', headerName: 'Phí vận chuyển nội quận', width: 250,
        },
        {
            field: 'outerDistrictFee',
            headerName: 'Phí vận chuyển ngoại quận',
            width: 250,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/deliverymethod/" + params.row.id}>
                            <button className='deliveryMethodEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='deliveryMethodDelete'
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        },
    ];

    const handleDelete = (id) => {
        axios.delete(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods/${id}`)
            .then(res => {
                console.log("Delete Success")
            })
            .catch(error => console.log(error));
        axios.get(`https://fast-delivery-server.herokuapp.com/api/v1/dvmethods`)
            .then(res => {
                res.data.dvMethods = res.data.dvMethods.map(obj => {
                    obj.id = obj._id
                    return obj;
                })
                setData(res.data.dvMethods)
                alert('Xóa phương thức vận chuyển thành công');
            })
            .catch(error => console.log(error));
    };
    return (
        <div className='deliveryMethod'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={9}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
            <Link to='/createdeliverymethod'>
                <button className='deliveryMethodAddButton'>Create</button>
            </Link>
        </div>
    )
}
