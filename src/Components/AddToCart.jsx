
import { useState } from 'preact/hooks'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useStateContext } from '../Context/Provider'

function AddToCart(e) {
  const {addtocart,setlistproductsCart,listproductsCart,setnotification} = useStateContext()
  const product = JSON.parse(addtocart)
  const [qty,setQty] = useState(1)
    const handelclosewindow = ()=>{
        document.body.classList.remove('AddtocartAc')
    }
    const handeladdtocart=async()=>{
        try{
          const newproduct = listproductsCart ? JSON.parse(listproductsCart).find(li=>li.product_id==JSON.parse(addtocart).product_id) :false
            if (newproduct) {
             await document.body.classList.remove('AddtocartAc')
             
             
              setnotification({status:'warning',message:'aleady exist'})
              document.body.classList.add('shoppingAc')
            }else{
              const productList = Array.isArray(listproductsCart) ? listproductsCart : JSON.parse(listproductsCart || '[]');
              let newprduct = await [
                ...productList,
                {...product,qtychose:qty}
              ]
              setlistproductsCart(JSON.stringify(newprduct))
             await document.body.classList.remove('AddtocartAc')
              document.body.classList.add('shoppingAc')
              setnotification({status:'warning',message:'the product successfully saved'})
              

            }
          
         
          // setlistproductsCart([...listproductsCart,newprduct])
        }catch(err){console.log(err)}
    }
    const {t} = useTranslation()
    
   

  return (
    <div className='AddToCart'>
         <div className='containerAdd'>
            <div className='headAdd'>
                <button onClick={()=>handelclosewindow()} id='btn'><i class='bx bx-x' ></i></button>
            </div>
      <div className='bellow'>
        <div className='name'>
          <span>{product && product.title}</span>

        </div>
            <div className='chooseimages'>
              <div className='img'><img id='img' src={product && product.image} alt="" /></div>
            </div>
            <span className='secC instock'>{t("products.InStock")}</span>
            <span className='secC qtX'>{t("products.Quantity")}</span>
            <div className='choose'>
             
            <div className='qte'>
              <button onClick={()=>setQty(qt=>qt==1?1:qt-1)} className='qt'>-</button>
              <span>{qty}</span>
              <button onClick={()=>setQty(qt=>qt+1)} className='qt'>+</button>
            </div>
            <button onClick={()=>handeladdtocart()} id='addto'><i class='bx bx-cart' ></i>{t("products.addtocart")}</button>
            </div>
            <button className='showdetail'>{t("products.deatils")} <i class='bx bx-right-arrow-alt'></i></button>

         </div>

         </div>
    </div>
  )
}

export default AddToCart