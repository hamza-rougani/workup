import { useEffect, useState } from 'preact/hooks'
import React from 'react'

function Shopcard(e) {
const [qty,setQty] = useState(e.product.qtychose)
const handleQty = async (ev) => {
  if (ev === '+') {
      const newQty = qty + 1; // Calculate the new quantity
      setQty(newQty); // Update the local state first
      // Update the product quantity in the parent component with the new quantity
      e.setProduct(p => {
          const newP = [...p];
          newP[e.index] = { ...newP[e.index], qtychose: newQty }; // Use the new quantity here
          return newP;
      });
  } else {
      const newQty = qty === 1 ? 1 : qty - 1; // Calculate the new quantity
      setQty(newQty); // Update the local state first
      // Update the product quantity in the parent component with the new quantity
      e.setProduct(p => {
          const newP = [...p];
          newP[e.index] = { ...newP[e.index], qtychose: newQty }; // Use the new quantity here
          return newP;
      });
  }
}

  return (
    <div className='Shopcard'>
        <div className='image'>
            <img id='img' src={e.product.image} alt="" />
        </div>
        <div className='info'>
            <span>{e.product.title}</span>
            <div className='qte'>
              <button onClick={()=>handleQty('-')} className='qt y'>-</button>
              <span className='qt'>{qty}</span>
              <button onClick={()=>handleQty('+')} className='qt y'>+</button>
            </div>
            <span>{e.product.price} dh</span>
        </div>
    </div>
  )
}

export default Shopcard