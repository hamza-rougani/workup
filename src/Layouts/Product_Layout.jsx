import React from 'react'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
function Product_Layout() {
  return (
    <div className='Product_Layout'>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Product_Layout