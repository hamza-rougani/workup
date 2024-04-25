import React from 'react'
import SwitchLangauge from './SwitchLangauge'
import Search from './Search'
import { useEffect, useRef, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import SlideCategories from './SlideCategories'

function Header() {
    const [searchvalue,setSearchvalue] = useState('')
    const Refbtn = useRef(null)
    useEffect(()=>{
        document.body.addEventListener('click',handelClickbody)
    },[])

    const handelClickbody = (ev)=>{
        setSearchvalue('')
        if (!Refbtn.current.contains(ev.target)) {
            document.body.classList.remove('SlideCategoriesac')
        }
    }
    const handelShopping = ()=>{
        document.body.classList.add('shoppingAc')
    }
    const handelSlideCategories = ()=>{
        document.body.classList.add('SlideCategoriesac')
    }
    const handelSlideMenu = ()=>{
        document.body.classList.add('SlideMenuac')
    }
  
    
  return (
    <div className='Header'>
        
        <div className='part'>
        <button ref={Refbtn} onClick={()=>{handelSlideCategories()}} className='menuHeader mobilehidden'><i class='bx bx-menu' ></i><SlideCategories/></button>
        <button ref={Refbtn} onClick={()=>{handelSlideMenu()}} className='menuHeader mobilevisible'><i class='bx bx-menu' ></i><SlideCategories/></button>
        <Link id='linkd' to='/'>
        <div className='logowebsite'>
            <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" />
        </div>
        </Link>
        <ul className='ul mobilehidden'>
           <Link id='linkd' to='/'><li className='li'><i class='bx bx-home'></i> Home</li></Link>
           <Link id='linkd' to='/blogs'> <li className='li'><i class='bx bxl-blogger' ></i> Blog</li></Link>
           <Link id='linkd' to='/contact'><li className='li'><i class='bx bx-phone'></i> Contact</li></Link>
        </ul>
        </div>
        <div className='search  mobilehidden'>
            <input value={searchvalue} onChange={(e)=>setSearchvalue(e.target.value)} type="text" placeholder='Search Products ...'/>
            <button><i class='bx bx-search-alt-2' ></i></button>
          {searchvalue.length>0 ? <Search/> : ''}  
        </div>
        <ul className='ul'>
            <li className='li s mobilevisible'><i class='bx bx-search-alt-2' ></i></li>
            <li onClick={()=>handelShopping()}  className='li s ss'><i class='bx bx-shopping-bag'></i></li>
            <li className='lan'>
            <i class='bx bx-globe'></i>
           <b> Fr</b>
           <i class='bx bx-chevron-down'></i>
           <SwitchLangauge setSearchvalue={setSearchvalue}/>
            </li>
        </ul>
    </div>
  )
}

export default Header