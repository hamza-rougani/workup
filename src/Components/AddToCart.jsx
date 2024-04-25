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
         </div>
    </div>
  )
}

export default AddToCart