import React from 'react'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <div className='head_sidebar'>
            <div className='menu'>
            <i class='bx bx-menu'></i>
            </div>
            <div className='logo'>
                <img src={`${import.meta.env.VITE_BASE_URL}/Images/uniklay.png`} alt="" />
            </div>
            {/* <div className='title'>
                <b>Uniklay</b>
            </div> */}
        </div>
        <ul>
            <li className='checked'><i class='bx bx-home' ></i> Dashboard</li>
            <li><i class='bx bx-shopping-bag' ></i> Ecommerce</li>
        </ul>
    </div>
  )
}

export default Sidebar