import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import { set } from 'react-ga'
import { useTranslation } from 'react-i18next'
import { useStateContext } from '../../Context/Provider'
import { Link, useNavigate } from 'react-router-dom'

function Product(e) {
    const {setaddtocart} = useStateContext()
    const handelopenwindow = ()=>{
        setaddtocart(JSON.stringify(e.data))
        document.body.classList.add('AddtocartAc')
    }

    const {t} = useTranslation()
const navigate = useNavigate()
  return (
    <div className='Product move'>
    <div className='image'>
        <img id='img' src={e.data.image} alt="" />
      <button onClick={()=>handelopenwindow()} className='addto mobilevisible'><i class='bx bx-shopping-bag'></i>{t("products.addtocart")}</button>

    </div>
    <div className='info'>
        <span>{e.data.category}</span>
        <div className='title'>{e.data.title}</div>
        <div className='reviews'>
        
            <div className='review' style={{direction:'rtl'}}>
              
            {
    Array(5-e.data.rating).fill().map((_, index) => (
        <i key={index} class='bx bx-star' ></i>
    ))
}
            {
    Array(e.data.rating).fill().map((_, index) => (
        <i key={index} className='bx bxs-star'></i>
    ))
}
       
        </div>
        <span>{e.data.reviews} {t("products.review")}</span>
        </div>
        <div className='price'>{e.data.price}  {t("products.dh")}</div>
        <div className='placeorder mobilevisible'>
       <button onClick={()=>navigate(`/products/${e.data.slug}`)} id='btn'><i class='bx bx-show-alt'></i>{t("products.showprd")}</button>
        </div>
    </div>
    <div className='Side'>
        {/* <button className='cara' onClick={()=>handelopenwindow()}><i class='bx bx-shopping-bag'></i></button> */}
        <button onClick={()=>navigate(`/products/${e.data.slug}`)} className='cara'><i class='bx bx-show-alt'></i></button>
    </div>
</div>
  )
}

export default Product