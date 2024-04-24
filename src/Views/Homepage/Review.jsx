import React from 'react'

function Review() {
  return (
    <div className='ReviewT'>
        <div className='logoR'>
            <div className='ic'><i class='bx bx-check-double'></i></div>
            <div className='logo'>
            <img id='img' src="https://shofy-grocery.botble.com/storage/main/users/3.jpg" alt="" />
        </div>
        </div>
        <div className='contentR'>
            <div className='starC'>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            <i class='bx bx-star'></i>
            </div>
            <div id='p'> I'd be happy to help. However, could you please specify which specific vitamin product you're interested in</div>
             <div className='name'>
                <b>HAMZA ROUGANI</b>
                <span>Developer</span>
             </div>
        </div>
    </div>
  )
}

export default Review