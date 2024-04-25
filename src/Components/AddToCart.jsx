import React from 'react'

function AddToCart() {
    const handelclosewindow = ()=>{
        document.body.classList.remove('AddtocartAc')
    }
  return (
    <div className='AddToCart'>
         <div className='containerAdd'>
            <div className='headAdd'>
                <button onClick={()=>handelclosewindow()} id='btn'><i class='bx bx-x' ></i></button>
            </div>
      <div className='bellow'>
        <div className='name'>
          <span>Perfect Vitamine</span>

        </div>
            <div className='chooseimages'>
              <div className='img'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/a1.png`} alt="" /></div>
              <div className='img'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Images/a2.png`} alt="" /></div>
            </div>
            <span className='secC instock'>In Stock</span>
            <span className='secC qtX'>Quantity</span>
            <div className='choose'>
             
            <div className='qte'>
              <button className='qt'>-</button>
              <span>{0}</span>
              <button className='qt'>+</button>
            </div>
            <button id='addto'><i class='bx bx-cart' ></i> Add To Card</button>
            </div>
            <button className='showdetail'>View full details <i class='bx bx-right-arrow-alt'></i></button>

         </div>

         </div>
    </div>
  )
}

export default AddToCart