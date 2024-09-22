// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { aplicaciones } from '../../../Data/AccesoClientes/dataAplicaciones';
import { CardApp } from './CardApp';
import '../../../styles/SwiperStyles.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';



export const CarouselCardsApps = () => {



    return (
        <>

            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {aplicaciones.map((app, index) => (
                    <SwiperSlide key={index}>
                        <CardApp
                            Nombre={app.Nombre}
                            Imagen={app.pathImg}
                            Caracteristicas={app.Caracteristicas}
                            url={app.url}>
                        </CardApp>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={100}
                slidesPerView={'auto'}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[Autoplay ,EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {aplicaciones.map((app, index) => (
                    <SwiperSlide key={index}>
                        <CardApp
                            Nombre={app.Nombre}
                            Imagen={app.pathImg}
                            Caracteristicas={app.Caracteristicas}
                            url={app.url}>
                        </CardApp>
                    </SwiperSlide>
                ))}

            </Swiper> */}
        </>
    )
}
