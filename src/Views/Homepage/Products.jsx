import React from 'react'
import Product from './Product'
const products = [1,2,3,4,5,6,6,6,6,6]
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
       {products.map(()=><Product/>)}
       </div>
    </div>
  )
}

export default Products