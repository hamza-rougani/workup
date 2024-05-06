import React from 'react'
import { useEffect, useRef, useState } from 'preact/hooks'
import { useStateContext } from '../../Context/Provider'
import Emptycart from './Emptycart'
import { useTranslation } from 'react-i18next'
import Shopcard from './Shopcard'

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
  const {t} = useTranslation()
  const {listproductsCart,setlistproductsCart} = useStateContext()
  const [product,setProduct] = useState(JSON.parse(listproductsCart))
  const [total,setTotal] = useState()
 
useEffect(async()=>{
  let subtotal = 0;
await product.map((p)=>{
      subtotal += p.qtychose * p.price
    })
    setTotal(subtotal)
},[product])
    
  
  return (
    <div className='Shopping' >
        <div className='cardsSh' ref={shopping}>
            <div className='headshop'>
               <h3>{t("shopping.shoppingcart")}</h3> 
               <i class='bx bx-x' ></i>
            </div>
            
              {listproductsCart ?
              <div className='containerList'>
                <div className='cards'>
                {
              product.map((list,index)=><Shopcard index={index} setProduct={setProduct}  product={list}/>)
            }
            </div>
            <div className='formcheckout'>
              <div className='info'>
                <b>Total : </b>
                <span>{total} dh</span>
              </div>
              <div className='form'>
                <input type="text"  placeholder='fullname'/>
                <input type="text" maxLength={10}  placeholder='phone'/>
                <input type="text"  placeholder='address'/>
                <button id='send'>checkout</button>
              </div>
            </div>
              </div>
                 : <Emptycart/>}
            
        </div>
        
    </div>
  )
}

export default Shopping