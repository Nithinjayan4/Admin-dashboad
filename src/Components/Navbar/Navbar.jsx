import React from 'react'
import '../Navbar/navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type='text' placeholder='search'/>
                <SearchOutlinedIcon/>
                 
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className='icon'/>
                    English

                </div>
                <div className="item">
                   <DarkModeOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                   <FullscreenExitOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                   <NotificationsNoneOutlinedIcon className='icon'/>
                   <div className="counter">1</div>
                </div>
                <div className="item">
                   <ChatBubbleOutlineOutlinedIcon className='icon'/>
                   <div className="counter">5</div>
                </div>
                <div className="item">
                   <ListOutlinedIcon className='icon'/>
                </div>
                <div className="item">
                  <img
                   src= "https://wallpaperscraft.com/download/men_figurines_boy_girl_close-up_stone_green_68292/800x600"
                  alt=""
                  className='avatar '/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar 