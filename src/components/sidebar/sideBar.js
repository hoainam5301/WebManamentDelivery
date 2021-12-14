import React from 'react'
import "./sideBar.css"
import { Gavel, HomeWork, ListAlt, LocalShipping, ShowChart, Store, SupervisorAccount } from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBarWrapper'>
                <div className='sideBarMenu'>
                    <h3 className='sideBarTitle'>Quản lý người dùng</h3>
                    <ul className='sideBarList'>
                        <Link to="/users" className='link'>
                            <li className='sideBarListItem'>
                                <SupervisorAccount className='sideBarIcon' />
                                Quản lý nhân viên
                            </li>
                        </Link>
                        <li className='sideBarListItem'>
                            <Store className='sideBarIcon' />
                            Quản lý cửa hàng
                        </li>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className='sideBarTitle'>Quản lý dịch vụ</h3>
                    <ul className='sideBarList'>
                        <li className='sideBarListItem'>
                            <HomeWork className='sideBarIcon' />
                            Quản lý kho bãi
                        </li>
                        <li className='sideBarListItem'>
                            <LocalShipping className='sideBarIcon' />
                            Quản lý phương thức vận chuyển
                        </li>
                        <li className='sideBarListItem'>
                            <Gavel className='sideBarIcon' />
                            Quản lý chính sách hoa hồng
                        </li>
                        <li className='sideBarListItem'>
                            <ListAlt className='sideBarIcon' />
                            Quản lý đơn hàng
                        </li>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className='sideBarTitle'>Thống kê</h3>
                    <ul className='sideBarList'>
                        <li className='sideBarListItem'>
                            <ShowChart className='sideBarIcon' />
                            Thống kê doanh thu
                        </li>
                        <li className='sideBarListItem'>
                            <ShowChart className='sideBarIcon' />
                            Thống kê đơn hàng
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
