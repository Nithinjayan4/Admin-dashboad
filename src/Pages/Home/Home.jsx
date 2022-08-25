import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Widgets from '../../Components/Widgets/Widgets'
import '../Home/home.scss'

const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
        <Widgets/>
        <Widgets/>
        <Widgets/>
        <Widgets/>
        
       </div>
       </div>
    </div>
  )
}

export default Home