import React from 'react'

function Emptycart() {
  return (
    <div className='Emptycart'>
        <div className='empty'>
        <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/empty-cart.webp`} alt="" />
        </div>
        <span>Your Cart is empty</span>
        <button>Go To Shop</button>
    </div>
  )
}

export default Emptycart