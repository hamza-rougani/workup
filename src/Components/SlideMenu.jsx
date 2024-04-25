import React from 'react'
import { Link } from 'react-router-dom'

function SlideMenu() {
    const handelSlideMenu = ()=>{
        document.body.classList.remove('SlideMenuac')
    }
  return (
    <div className='SlideMenu'>
        <div className='topmenu'>
        <div className="headerMenu">
            <div className='logowebsite'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" /></div>
            <button onClick={()=>handelSlideMenu()} className='close'><i class='bx bx-x'></i></button>
        </div>
        <ul className='ulmenu'>
            <Link id='linkl' to='/'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-home' ></i> Home</li></Link>
            <Link id='linkl' to='/'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-shopping-bag' ></i> Shopping Cart</li></Link>
            <Link id='linkl' to='/blogs'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bxl-blogger' ></i> Blog</li></Link>
            <Link id='linkl' to='/contact'><li onClick={()=>handelSlideMenu()} className='limenu'><i class='bx bx-phone'></i> Contact</li></Link>
        </ul>
        </div>
        <div className='more'>
            <button><div className='logol'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>Francais <i class='bx bx-chevron-down'></i></button>
            <button><i class='bx bx-money' ></i>MAD (DH)</button>
        </div>
    </div>
  )
}

export default SlideMenu