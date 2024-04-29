'use client'

import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import ReviewCard from './ReviewCard';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { IReview } from '@/types/dataObjs';
import { icons } from '@/exports/image';

const ReviewSlider = () => {

  const reviews: Array<IReview> = [
    {
      id: 1,
      companyLogo: icons.instacart,
      quote: "“We were able to get a published, working version of the entire website live in less than two weeks. And we didn’t have to compromise on our original designs.”",
      name: "Karen Yue",
      role: "Director of Digital Marketing Technology"
    },
    {
      id: 2,
      companyLogo: icons.coinbase,
      quote: "“We were able to get a published, working version of the entire website live in less than two weeks. And we didn’t have to compromise on our original designs.”",
      name: "Karen Yue",
      role: "Director of Digital Marketing Technology"
    },
    // {
    //   companyLogo: icons.innovation,
    //   quote: "“We were able to get a published,working version of the entire website live in less than two weeks. And we didn’t have to compromise on our original designs.”",
    //   name: "Karen Yue",
    //   role: "Director of Digital Marketing Technology"
    // }

  ];

  return (
    <section className='mySwiper'>
      <h2 className='fw-bold'>
      Real Stories from Satisfied Customers
      </h2>
      <Swiper
        navigation
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: false,
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        scrollbar={{ el: '.swiper-scrollbar' }}
        // centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.8,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, Scrollbar]}
        // className='mySwiper'
      >
        <section className=''>
          {reviews.map((review, idx) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>{' '}
    </section>
  )
}

export default ReviewSlider