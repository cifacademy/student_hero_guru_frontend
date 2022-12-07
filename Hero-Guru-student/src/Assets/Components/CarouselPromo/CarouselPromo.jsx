import React from 'react'
import { Container } from 'react-bootstrap'
import image2 from '../../Img/Slider Menu - 1 1.png'
import './CarouselPromo.css'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';

export const CarouselPromo = () => {
  return (
    <Container className='containercarousel_landingPage'>
      <Swiper
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
      >
        <SwiperSlide className='swipercontent_landingPage'>
          <img alt='' src={image2} />
        </SwiperSlide>
        <SwiperSlide className='swipercontent_landingPage'>
          <img alt='' src={image2} />
        </SwiperSlide>
        <SwiperSlide className='swipercontent_landingPage'>
          <img alt='' src={image2} />
        </SwiperSlide>
        <SwiperSlide className='swipercontent_landingPage'>
          <img alt='' src={image2} />
        </SwiperSlide>
        <SwiperSlide className='swipercontent_landingPage'>
          <img alt='' src={image2} />
        </SwiperSlide>

      </Swiper>
    </Container>

  )
}
