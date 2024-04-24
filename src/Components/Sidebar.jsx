import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
    const handelclick = (event)=>{
     let Sidebar = document.querySelector('.Sidebar')
     Sidebar.classList.toggle('dropdown')
    }
  return (
    <div className='Sidebar'>
        <div className='head_sidebar'>
            <div className='menu'>
            <i class='bx bx-menu'></i>
            </div>
            <div className='logo'>
                <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logo.jpg`} alt="" />
            </div>
            {/* <div className='title'>
                <b>Uniklay</b>
            </div> */}
        </div>
        <ul className='ul'>
            <Link to='/admin' id='linkd'><li className='checked'><i class='bx bx-home' ></i> Dashboard</li></Link>
            <li id='li' onClick={()=>handelclick('ecommerce')}><div className='first'><i class='bx bx-shopping-bag' ></i> Ecommerce </div> <i class='bx bx-chevron-down'></i></li>
            <ul className='ul1'>
               <Link to='/admin/ecommerce/products' id='linkl'> <li><i class='bx bx-package'></i> Products</li></Link>
                <li><i class='bx bx-objects-vertical-bottom'></i> Orders</li>
            </ul>
        </ul>
    </div>
  )
}

export default Sidebar