import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {
    Link
} from "react-router-dom";
import { rows } from '../../data';

export default function UserList() {
    const [data,setData]=useState(rows)
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 180, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img className='userListUserImg' src={params.row.avatar} alt='' />
                        {params.row.userName}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Vol',
            width: 180,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id }>
                            <button className='userListUserEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userListUserDelete' 
                            onClick={()=> handleDelete(params.row.id)}
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
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                disableSelectionOnClick
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

        </div>
    )
}
