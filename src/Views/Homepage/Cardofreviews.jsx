import React from 'react'
import Cardofreview from './Cardofreview'
import { useEffect, useState } from 'preact/hooks'
import { reviewsCardAr } from '../../Admin/AddReviews/ReviewsAr'
import { reviewsCardFr } from '../../Admin/AddReviews/ReviewsFr'
import { useTranslation } from 'react-i18next'
function Cardofreviews() {
  const {t} = useTranslation()
  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    if (localStorage.getItem('lan')){
      setReviews(reviewsCardFr)
    }else {
      setReviews(reviewsCardAr)
    }
    
  },[localStorage.getItem('lan')])
  return (
    <div className='Cardofreviews'>
       {reviews.map((review,index)=><Cardofreview key={index} review={review}/>)}
    </div>
  )
}

export default Cardofreviews