import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
        className="mySwiper"
      >
        <SwiperSlide><div className='slideiamge'><img id='img' src="https://resize.prod.docfr.doc-media.fr/s/1200/ext/eac4ff34/content/2022/7/5/vitamine-e-3a576ddd9bf3b661.jpeg" alt="" /></div></SwiperSlide>
        <SwiperSlide><div className='slideiamge'><img id='img' src="https://previews.123rf.com/images/ninamunha/ninamunha1705/ninamunha170500076/78739421-vitamine-e-ou-tocoph%C3%A9rol-et-vecteur-ensemble-d-aliments-riches-en-vitamine-e-concept-de-mode-de-vie.jpg" alt="" /></div></SwiperSlide>
      </Swiper>
    </>
  );
}
