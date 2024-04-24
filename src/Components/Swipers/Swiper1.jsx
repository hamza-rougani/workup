import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import Review from '../../Views/Homepage/Review';

export default function Swiper1() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Review/></SwiperSlide>
        <SwiperSlide><Review/></SwiperSlide>
        <SwiperSlide><Review/></SwiperSlide>
        <SwiperSlide><Review/></SwiperSlide>


      </Swiper>
    </>
  );
}
