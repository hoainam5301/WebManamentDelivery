import React from 'react'
import "./topBar.css"
import { NotificationsNone,Language,Settings } from '@material-ui/icons'
import logoImg from '../../assets/img/logo.png'

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper" >
                <div className="topBarLeft">
                    <img src={logoImg} className='topBarLogoImg' alt='' />
                </div>
                <div className="topBarRight">
                    <div className="topBarIconsContainer">
                        <NotificationsNone  />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topBarIconsContainer">
                        <Language  />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topBarIconsContainer">
                        <Settings  />
                        <span className="topIconBag">2</span>
                    </div>
                    <img src='https://cdn.icon-icons.com/icons2/1260/PNG/512/1496676192-jd17_84602.png' alt='' className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
