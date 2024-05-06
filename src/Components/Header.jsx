import React from 'react'
import SwitchLangauge from './SwitchLangauge'
import { useEffect, useRef, useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import SlideCategories from './SlideCategories'
import {useTranslation} from "react-i18next"

function Header() {
    const [searchvalue,setSearchvalue] = useState('')
    const {t} = useTranslation()
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
    const handelSlideSearch = ()=>{
        document.body.classList.add('SlideSearchAc')
    }
  
    
  return (
    <div className='Header'>
        
        <div className='part'>
        {/* <button ref={Refbtn} onClick={()=>{handelSlideCategories()}} className='menuHeader mobilehidden'><i class='bx bx-menu' ></i><SlideCategories/></button> */}
        <button ref={Refbtn} onClick={()=>{handelSlideMenu()}} className='menuHeader mobilevisible'><i class='bx bx-menu' ></i></button>
        <Link id='linkd' to='/'>
        <div className='logowebsite mobilehidden'>
            <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" />
        </div>
        </Link>
        <ul className='ul mobilehidden'>
           <Link id='linkd' to='/'><li className='li'><i class='bx bx-home'></i>{t("header.home")}</li></Link>
           <Link id='linkd' to='/contact'><li className='li'><i class='bx bx-phone'></i>{t("header.contactus")}</li></Link>
        </ul>
        </div>
        <Link id='linkd' to='/'>
        <div className='logowebsite mobilevisible'>
            <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" />
        </div>
        </Link>
        <ul className='ul'>
            {/* <li onClick={()=>handelShopping()}  className='li s ss'><i class='bx bx-shopping-bag'></i></li> */}
            <li className='lan'>
                {localStorage.getItem('lan') ? 
            <div className='logol logoll'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>
            : 
            <div className='logol logoll'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/morocco.png`} alt="" /></div>

            }
           <i class='bx bx-chevron-down'></i>
           <SwitchLangauge setSearchvalue={setSearchvalue}/>
            </li>
        </ul>
    </div>
  )
}

export default Header