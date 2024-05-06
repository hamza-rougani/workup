
import React from 'react'
import { useTranslation } from 'react-i18next'

function Cardofreview(e) {
  const {t} = useTranslation()
  return (
    <div className='Cardofreview move'>
    <div className='profile'>
    <div className='logo'>
            <img id='img' src={e.review.image} alt="" />
        </div>
      <div className='info'>
                <b>{e.review.fullname}</b>
                <span>{e.review.roll}</span>
      </div>
    </div>
    <div className='content'>
        <div className='reviewsC'>
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
        <span>{e.review.comment}</span>
    </div>
</div>
  )
}

export default Cardofreview