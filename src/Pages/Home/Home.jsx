
import React from 'react'
import Chart from '../../Components/Chart/Chart'
import Featured from '../../Components/Featured/Featured'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Tables from '../../Components/Table/Tables'
import Widgets from '../../Components/Widgets/Widgets'
import '../Home/home.scss'

const Home = () => {
  return (
    <div className='home'>
       <Sidebar/>
       <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
        <Widgets type="user" />
        <Widgets type="order"/>
        <Widgets type="earning"/>
        <Widgets type="balance"/>
       </div>
       <div className="charts"> 
       <Featured/>
       <Chart/>
       </div>
       <div className="listContainer">
        <div className="ListTitle">Latest Transaction</div>
        <Tables/>
       </div>
       </div>
    </div>
  )
}

export default Home