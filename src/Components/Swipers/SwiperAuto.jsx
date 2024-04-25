import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import IntroductMobile from '../../Views/Homepage/IntroductMobile';

export default function SwiperAuto() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mobilevisible"
      >
        <SwiperSlide><IntroductMobile/></SwiperSlide>
        <SwiperSlide><IntroductMobile/></SwiperSlide>
        <SwiperSlide><IntroductMobile/></SwiperSlide>
      </Swiper>
    </>
  );
}
