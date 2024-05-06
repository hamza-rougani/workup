import React from 'react'
import Swiper1 from '../../Components/Swipers/Swiper1'
import { useTranslation } from 'react-i18next'

function Reviews() {
  const {t} = useTranslation()
  return (
    <div className='ReviewsC move'>
        <div className='title'>
            <span id='span'>{t("reviews.CustomerReviews")}</span> 
        <h1>{t("reviews.happey")}</h1>
        </div>
        <Swiper1/>
    </div>
  )
}

export default Reviews