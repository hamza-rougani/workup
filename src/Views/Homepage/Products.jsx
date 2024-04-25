import React from 'react'
import Product from './Product'
const products = [
  {image:'https://dietechfitness.com/wp-content/uploads/2019/03/daily-vita-min-90-tabs-scitec-nutrition.jpg'},
  {image:'https://www.nutrifactor.com.pk/cdn/shop/products/VitaminB1260_7adb6aa8-6d54-48dd-8a5e-2148c1a8894a.png?v=1654087497'},
  {image:'https://german-beautyshop.com/wp-content/uploads/2020/02/Design-ohne-Titel-81.jpg'},
  {image:'https://novapara.ma/cdn/shop/products/Vertu-Plus-Vitamine-C-500mg-60-Gelules-nova-parapharmacie-casablanca.jpg?v=1658314430'},
  {image:'https://i.ebayimg.com/images/g/pacAAOSwMXxfNYe-/s-l1200.webp'},
  {image:'https://dietechfitness.com/wp-content/uploads/2019/03/daily-vita-min-90-tabs-scitec-nutrition.jpg'},
  {image:'https://www.protein-shop.gr/thumb/500/500/images/products/2023/05/Scitec_Vitamin_D3_250_Caps.jpg?products_id=7365'},
  {image:'https://www.protein-shop.gr/thumb/900/900/images/products/2023/05/Scitec_Vita_C_1100_100_Caps.jpg?products_id=7364'},
  {image:'https://www.nutrifactor.com.pk/cdn/shop/products/VitaminB1260_7adb6aa8-6d54-48dd-8a5e-2148c1a8894a.png?v=1654087497'},
  {image:'https://5.imimg.com/data5/SELLER/Default/2022/10/YK/HF/UN/24746280/vitamin-b12-tablets.jpg'},
]
function Products() {
  return (
    <div className='Products'>
      <div className='headproducts mobilehidden'>
        <h1>Best Products</h1> 
        <div className='categories'>
          <ul>
            <li className='checkcate'>All</li>
            <li>Vitamin</li>
            <li>Trending</li>
            <li>On Sale</li>
            <li>Top rated</li>
          </ul>
        </div>
        </div> 
        <h2 className='best mobilehidden'>Best Products</h2> 
        <div className='containerProducts'>
       {products.map((p,index)=><Product data={p} key={index}/>)}
       </div>
    </div>
  )
}

export default Products