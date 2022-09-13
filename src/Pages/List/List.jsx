import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from  '../../Components/Navbar/Navbar'
import '../List/list.scss'

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       {/* <Datatable/> */}
      </div>
    </div>
  )
}

export default List