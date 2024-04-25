import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Topheader from '../Components/Topheader'
import Shopping from '../Views/Homepage/Shopping'
import { useEffect, useRef } from 'preact/hooks'
import Subscribe from '../Views/Homepage/Subscribe'
import ScrollUp from '../Components/ScrollUp'
import SlideMenu from '../Components/SlideMenu'
import SlideSearch from '../Components/SearchMobile/SlideSearch'

function Guest_Layout() {

  return (
    <div className='Guest'>
        <Topheader/>
        <Header/>
        <Shopping />
        <Outlet/>
        <Subscribe/>
        <ScrollUp/>
        <SlideMenu/>
        <SlideSearch/>
        <Footer/>
    </div>
  )
}

export default Guest_Layout