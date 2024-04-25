import React from 'react'

function Product(e) {
    const handelopenwindow = ()=>{
        document.body.classList.add('AddtocartAc')
    }
  return (
    <div className='Product move'>
    <div className='image'>
        <img id='img' src={e.data.image} alt="" />
      <button onClick={()=>handelopenwindow()} className='addto mobilevisible'><i class='bx bx-shopping-bag'></i>Add to card</button>

    </div>
    <div className='info'>
        <span>Categorie</span>
        <div className='title'>Whole Wheat Pasta</div>
        <div className='reviews'>
            <div className='review'>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
            <i class='bx bxs-star' ></i>
        </div>
        <span>(20) reviews</span>
        </div>
        <div className='price'>1200.00 dh</div>
        <div className='placeorder mobilevisible'>
            <button id='btn'><i class='bx bx-show-alt'></i>Show Product</button>
        </div>
    </div>
    <div className='Side'>
        <button className='cara' onClick={()=>handelopenwindow()}><i class='bx bx-shopping-bag'></i></button>
        <button className='cara'><i class='bx bx-show-alt'></i></button>
    </div>
</div>
  )
}

export default Product