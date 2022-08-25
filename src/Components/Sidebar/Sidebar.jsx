import React from 'react'
import '../Sidebar/sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
//import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CircleNotifications from '@mui/icons-material/CircleNotifications';
//import QueryStatsIcon from '@mui/icons-material/QueryStats';
import QueryStats from '@mui/icons-material/QueryStats';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';




const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Admin Data</span>
            </div>
            <hr/>
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonRoundedIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon  className='icon'/>
                    <span>Order</span>
                </li>
                <li>
                    <DeliveryDiningIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <CircleNotifications className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <QueryStats className='icon'/>
                    <span>stats</span>
                </li>
                <li>
                    <SystemSecurityUpdateGoodIcon className='icon'/>
                    <span>System Health </span>
                </li>
                <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Setting</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
                

            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            {/* <div className="colorOption"></div> */}
        </div>

    </div>
  )
}

export default Sidebar