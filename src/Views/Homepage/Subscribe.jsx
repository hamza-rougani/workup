import React from 'react'

function Subscribe() {
  return (
    <div className='Subscribe'>
        <div className='itemS'>
        <div className='title'> 
        <div id='sale'>SALE 20% OFF ALL STORE</div>
       <div id='sub'>Subscribe our Newsletter</div>
        </div>
        <div className='subs'>
            <input placeholder='Enter your number phone' type="text" />
            <button>Subscribe</button>
        </div>
        </div>

            <div className='img1'>
                <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/cta-shape-1.png`} alt="" />
            </div>
            <div className='img1'>
                <img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/cta-shape-1.png`} alt="" />
        </div>
    </div>
  )
}

export default Subscribe