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
import AddToCart from '../Components/AddToCart'
import AnimationItems from '../Components/Animation/AnimationItems'
import { useStateContext } from '../Context/Provider'
import Notifications from '../Components/Notifications/Notifications'
import Whatsapp from '../Components/Whatsapp'
function Guest_Layout() {
const {notification} = useStateContext()
  return (
    <div className='Guest'>
        <Topheader/>
        <Header/>
        <Shopping />
        <Outlet/>
        {
        notification ? <Notifications field={notification}/>:""
        }
        <Subscribe/>
        <ScrollUp/>
        <SlideMenu/>
        <SlideSearch/>
        <AddToCart/>
        <Whatsapp/>
        <AnimationItems/>
        <Footer/>
    </div>
  )
}

export default Guest_Layout