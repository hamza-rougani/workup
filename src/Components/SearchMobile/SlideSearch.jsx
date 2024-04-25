import React from 'react'
import Product from '../../Views/Homepage/Product'
import CardSearchProduct from '../CardSearchProduct'
import { useState } from 'preact/hooks'

function SlideSearch() {
    const [searchval,setsearchval] = useState('')
    const handelSlideMenu = ()=>{
        document.body.classList.remove('SlideSearchAc')
    }

  return (
    <div className='SlideSearch'>
    <div className="headerMenu">
            <div className='logowebsite'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/logooff.png`} alt="" /></div>
            <button onClick={()=>handelSlideMenu()} className='close'><i class='bx bx-x'></i></button>
        </div>
        <div className='search'>
            <input onChange={(ev)=>setsearchval(ev.target.value)} placeholder='Search for Products ...' type="text" />
            <button id='ic'><i class='bx bx-search'></i></button>
        </div>
        {searchval ? 
        <div className='reasultsearch'>
            <ul>
                <li><CardSearchProduct/></li>
                <li><CardSearchProduct/></li>
                <li><CardSearchProduct/></li>
                <li><CardSearchProduct/></li>
            </ul>
        </div>
        :''}
        
    </div>
  )
}

export default SlideSearch