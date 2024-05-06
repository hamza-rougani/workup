import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { reviewsSlideAr } from '../../Admin/AddReviews/ReviewsAr';
import { reviewsSlideFr } from '../../Admin/AddReviews/ReviewsFr';


// import required modules
import { Navigation } from 'swiper/modules';
import Review from '../../Views/Homepage/Review';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'preact/hooks';

export default function Swiper1() {
  const [reviews,setReviews] = useState([])
  useEffect(()=>{
    if (localStorage.getItem('lan')){
      setReviews(reviewsSlideFr)
      console.log('swip fr')
    }else {
      setReviews(reviewsSlideAr)
      console.log('swip ar')
    }
    
  },[localStorage.getItem('lan')])
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review,index)=><SwiperSlide key={index}><Review review={review}/></SwiperSlide>)}
      </Swiper>
    </>
  );
}
