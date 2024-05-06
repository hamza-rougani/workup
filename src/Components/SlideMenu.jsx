import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SwitchLangauge from './SwitchLangauge'

function SlideMenu() {
    const handelSlideMenu = ()=>{
        document.body.classList.remove('SlideMenuac')
    }
    const {t} = useTranslation()
  return (
    <div className='SlideMenu'>
        <div className='topmenu'>
        <div className="headerMenu">
            <div className='logowebsite'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" /></div>
            <button onClick={()=>handelSlideMenu()} className='close'><i class='bx bx-x'></i></button>
        </div>
        <ul className='ulmenu'>
            <Link id='linkl' to='/'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-home' ></i> {t("menuhome.home")}</li></Link>
            <Link id='linkl' to='/'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-shopping-bag' ></i>{t("shopping.shoppingcart")}</li></Link>
            <Link id='linkl' to='/contact'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-phone'></i> {t("menuhome.contactus")}</li></Link>
        </ul>
        </div>
        <div className='more'>
            <button className='lanmenu'>
            {localStorage.getItem('lan') ? 
            <div className='logol'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>
            : 
            <div className='logol'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/morocco.png`} alt="" /></div>

            }
            {t("menuhome.language")}
                <i class='bx bx-chevron-down'></i>
                <SwitchLangauge/>
                </button>
            <button><i class='bx bx-money' ></i>{t("menuhome.dh")} (DH)</button>
        </div>
    </div>
  )
}

export default SlideMenu