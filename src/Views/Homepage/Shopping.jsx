import React from 'react'
import { useEffect, useRef } from 'preact/hooks'

import Emptycart from './Emptycart'

function Shopping() {
    const shopping = useRef(null)
    useEffect(()=>{
      document.addEventListener('click', handelclick)
  
    },[])
    const handelclick = (ev)=>{
  if (!shopping.current.contains(ev.target) &&  ev.target.className != 'li s ss' &&  ev.target.className != 'bx bx-shopping-bag') {
    document.body.classList.remove('shoppingAc')
  }else if (ev.target.className == 'bx bx-x') {
    document.body.classList.remove('shoppingAc')
  }

  
    
  }
  return (
    <div className='Shopping' >
        <div className='cardsSh' ref={shopping}>
            <div className='headshop'>
               <h3>Shopping Cart</h3> 
               <i class='bx bx-x' ></i>
            </div>
            <div className='cards'>
                <Emptycart/>
            </div>
        </div>
        
    </div>
  )
}

export default Shopping