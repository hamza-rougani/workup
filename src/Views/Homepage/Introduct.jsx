import React from 'react'

function Introduct() {
  return (
    <div className='Introduct'>
           <div className='infoI'>
            <div className='headI'>
              <span className='sub'>Take care of your health</span>
               <h1>Welcome To Vitamin Platform</h1>
            </div>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. facilis ducimus nam ex odit deleniti tempora nemo rem laboriosam, quam, sint odio fuga!</p>
              <button id='shop'>Shop Now</button>

           </div>
           <div className='Image'>
           {/* <img src='https://shofy-grocery.botble.com/storage/grocery/sliders/slider-1.png' alt="" /> */}
           <div className='img img1'><img id='img' src='https://www.valebio.com/modules/ybc_blog/views/img/post/Vitamine%20C.png' alt="" /></div>
           <div className='img img2'><img id='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8eZgyiHObQSOIECsVCo5g5GAdwf7n56Czg&s" alt="" /></div>
           <div className='img img3'><img id='img' src="https://media.istockphoto.com/id/1367872098/fr/photo/photo-compl%C3%A8te-dun-beau-jeune-athl%C3%A8te-masculin-courant-sur-une-piste-ext%C3%A9rieure.jpg?s=612x612&w=0&k=20&c=60LRL5Q4M9MwmXCu3WXO3Zo948Z126jeVuIrr4J-yVM=" alt="" /></div>
           </div>
        </div>
  )
}

export default Introduct