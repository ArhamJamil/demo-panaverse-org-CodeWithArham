import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
const StudentTetimonial = () => {
    return (
        <div>
      <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={50}
                            autoplay={{
                                delay:2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide><Image src={'/mac.jpg'} width={700} height={100} alt=""></Image></SwiperSlide>
                            <SwiperSlide><Image src={'/nasa.jpg'} width={700} height={100} alt=""></Image></SwiperSlide>
                            <SwiperSlide><Image src={'/peopleCode.jpg'} width={700} height={100} alt=""></Image></SwiperSlide>
                            <SwiperSlide><Image src={'/thought-catalog.jpg'} width={700} height={100} alt=""></Image></SwiperSlide>
                            
                            <SwiperSlide><Image src={'/machineLearning (1).jpg'} width={700} height={100} alt=""></Image></SwiperSlide>
                           
                        </Swiper>
                        </div>
                        </section>
                    </>
                </div>
                )
}

                export default StudentTetimonial
