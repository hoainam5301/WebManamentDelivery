import React, { useEffect, useState } from 'react';
import './deliveryStaff.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function DeliveryStaff() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`https://fast-delivery-server.herokuapp.com/api/v1/staffs`)
            .then((res) => {
                res.data.staffs = res.data.staffs.map((obj) => {
                    obj.id = obj._id;
                    return obj;
                });
                console.log('12312312312312', res.data.staffs);
                setData(res.data.staffs);
            })
            .catch((error) => console.log(error));
    }, []);
    const columns = [
        { field: 'id', headerName: 'Mã nhân viên', width: 220 },
        { field: 'email', headerName: 'Email', width: 210 },
        {
            field: 'fullName',
            headerName: 'Họ và tên',
            width: 240,
            renderCell: (params) => {
                return (
                    <div className="deliveryStaffUser">
                        <img
                            className="deliveryStaffUserImg"
                            src={`https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png`}
                            alt=""
                        />
                        {params.row.fullName}
                    </div>
                );
            },
        },
        {
            field: 'gender',
            headerName: 'Giới tính',
            width: 130,
        },
        {
            field: 'dateOfBirth',
            headerName: 'Ngày sinh',
            width: 180,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/staff/' + params.row.id}>
                            <button className="deliveryStaffUserEdit">
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline
                            className="deliveryStaffUserDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    const handleDelete = (id) => {
        axios
            .delete(
                `https://fast-delivery-server.herokuapp.com/api/v1/staffs/${id}`
            )
            .then((res) => {
                console.log('Delete Success');
            })
            .catch((error) => console.log(error));
        axios
            .get(`https://fast-delivery-server.herokuapp.com/api/v1/staffs`)
            .then((res) => {
                res.data.staffs = res.data.staffs.map((obj) => {
                    obj.id = obj._id;
                    return obj;
                });
                setData(res.data.staffs);
                alert('Xóa nhân viên thành công');
            })
            .catch((error) => console.log(error));
    };
    return (
        <div className="deliveryStaff">
            {data.length > 0 && (
                <DataGrid
                    rows={data}
                    columns={columns}
                    disableSelectionOnClick
                    pageSize={9}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            )}
            <Link to="/createStaff">
                <button className="staffAddButton">Create</button>
            </Link>
        </div>
    );
}
