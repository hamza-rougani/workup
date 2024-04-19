import React from 'react'
import { Outlet } from 'react-router-dom'

function Guest_Layout() {
  return (
    <div className='Guest'>
        <Outlet/>
    </div>
  )
}

export default Guest_Layout