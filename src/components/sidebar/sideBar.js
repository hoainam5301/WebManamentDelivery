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
                        <Link to="/staffs" className='link'>
                            <li className='sideBarListItem'>
                                <SupervisorAccount className='sideBarIcon' />
                                Quản lý nhân viên
                            </li>
                        </Link>
                        <Link to="/stores" className='link'>
                            <li className='sideBarListItem'>
                                <Store className='sideBarIcon' />
                                Quản lý cửa hàng
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className='sideBarTitle'>Quản lý dịch vụ</h3>
                    <ul className='sideBarList'>
                        <Link to="/warehouse" className='link'>
                            <li className='sideBarListItem'>
                                <HomeWork className='sideBarIcon' />
                                Quản lý kho bãi
                            </li>
                        </Link>
                        <Link to="/deliverymethods" className='link'>
                            <li className='sideBarListItem'>
                                <LocalShipping className='sideBarIcon' />
                                Quản lý phương thức vận chuyển
                            </li>
                        </Link>
                        <Link to="/commisions" className='link'>
                            <li className='sideBarListItem'>
                                <Gavel className='sideBarIcon' />
                                Quản lý chính sách hoa hồng
                            </li>
                        </Link>
                        <Link to="/orders" className='link'>
                            <li className='sideBarListItem'>
                                <ListAlt className='sideBarIcon' />
                                Quản lý đơn hàng
                            </li>
                        </Link>
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
        </div >
    )
}
