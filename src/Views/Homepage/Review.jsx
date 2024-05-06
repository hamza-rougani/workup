import React from 'react'
import { useTranslation } from 'react-i18next'

function Review(e) {
  const {t} = useTranslation()
  return (
    <div className='ReviewT'>
        <div className='logoR'>
            <div className='ic'><i class='bx bx-check-double'></i></div>
            <div className='logo'>
            <img id='img' src={e.review.image} alt="" />
        </div>
        </div>
        <div className='contentR'>
            <div className='starC'  >
            <div className='startsrl' style={{direction:'rtl'}}>
            {
    Array(5-e.review.rating).fill().map((_, index) => (
        <i key={index} class='bx bx-star' ></i>
    ))
}
            {
    Array(e.review.rating).fill().map((_, index) => (
        <i key={index} className='bx bxs-star'></i>
    ))
}
       
</div>
            </div>
            <div id='p'>{e.review.comment}</div>
             <div className='name'>
                <b>{e.review.fullname}</b>
                <span>{e.review.roll}</span>
             </div>
        </div>
    </div>
  )
}

export default Review