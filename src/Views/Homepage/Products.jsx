import React from 'react'
import Product from './Product'
import { useTranslation } from 'react-i18next'
import productsAr from '../../Admin/AddProducts/productsArabic';
import productsFr from '../../Admin/AddProducts/productsFr';
import { useEffect, useState } from 'preact/hooks';

function Products() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    if (localStorage.getItem('lan')){
      setProducts(productsFr)
    }else {
      setProducts(productsAr)
    }
    
  },[localStorage.getItem('lan')])
  const {t} = useTranslation()
  return (
    <div className='Products' id='shopsection'>
        <h2 className='best mobilehidden'>{t("products.BestProducts")}</h2> 
        <div className='containerProducts'>
       {products.map((p,index)=><Product data={p} key={index}/>)}
       
       </div>
       <div className='imgside'>
        <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/pic.jpg`} alt="" />
       </div>
    </div>
  )
}

export default Products