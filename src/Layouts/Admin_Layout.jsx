import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
function Admin_Layout() {
  return (
    <div className='Admin_Layout'>
        <Sidebar/>
        <div className='container'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Admin_Layout