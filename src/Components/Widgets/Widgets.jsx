import React from 'react'
import '../Widgets/widgets.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';

const Widgets = ({type}) => {
    let data;
    //temp
    const amount=100
    const diff=20
    switch(type){
        case "user":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:<PersonOutlineOutlinedIcon className='icon'
            style={{
                color:"orangered",
                backgroundColor:"rgb(229, 214, 209)"
            }}
            
            />

            

        }
        break;
        case "order":
        data={
            title:"ORDERS",
            isMoney:false,
            link:"View all orders",
            icon:<ShoppingCartCheckoutOutlinedIcon className='icon' style={{
                color:"blue",
                backgroundColor:"rgb(147, 170, 217)"
            }}/>   

            

        }
        break;
        case "earning":
        data={
            title:"EARNING",
            isMoney:true,
            link:"View net earning",
            icon:<MonetizationOnOutlinedIcon  className='icon'style={{
                color:"green",
                backgroundColor:"rgb(171, 232, 136)"
            }} />

            

        }
        break;
        case "balance":
        data={
            title:"BALANCE",
            isMoney:true,
            link:"See details",
            icon:< AccountBalanceOutlinedIcon className='icon' style={{
                color:"Purple",
                backgroundColor:"rgb(212, 156, 223)"
            }}/>

            

        }
        break;
        default:
            break;
    }




  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "₹"}{amount}</span>
            <span className="Link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}% 
                 </div>
                 {data.icon}
                 {/* <PersonOutlineOutlinedIcon className='icon'/> */}
        </div>
    </div>
  )
}

export default Widgets