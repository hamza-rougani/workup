import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
function Messages_Layout() {
  return (
    <div className='Messages_Layout'>
        <Outlet/>
    </div>
  )
}

export default Messages_Layout