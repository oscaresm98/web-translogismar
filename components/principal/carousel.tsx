'use client'
import { CSSProperties } from "react"
import camion from "@/public/img/camion.jpg"
import contenedorUno from "@/public/img/contenedores1.jpg"
import contenedorDos from "@/public/img/contenedores2.jpg"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';


export default function Carousel() {
  return (
    <>
      <Swiper
        style={{
            '--swiper-pagination-color': '#ff6a0f',
          // '--swiper-navigation-color': '#fff',
        }as CSSProperties}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="w-full h-[43rem]"
      >
        <SwiperSlide className="bg-center bg-cover relative overflow-hidden">
          <div className="absolute flex flex-col justify-center h-full w-full">
            <div className="z-10 min-h-[25%] max-w-[45%] p-8 bg-gradient-to-r from-black/30 flex items-center">
              <p className="uppercase text-1xl md:text-5xl font-bold text-white inline-block hover:cursor-default">El camino más seguro para tu mercancía</p>
            </div>
          </div>
          <Image
            src={contenedorUno}
            className="block object-cover w-full h-full brightness-50"
            alt='imagen de carrusel'
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover relative overflow-hidden">
          <div className="absolute min-h-[25%] max-w-[45%] top-0 right-0 z-10">
            <div className="p-8 bg-gradient-to-l from-black/30 flex items-center">
              <p className="uppercase text-1xl md:text-5xl font-bold text-white inline-block hover:cursor-default">el mejor aliado para tu carga</p>
            </div>
          </div>
          <Image
            src={camion}
            className="block object-cover w-full h-full brightness-50"
            alt='imagen de carrusel'
            priority
          />
        </SwiperSlide>
        <SwiperSlide className="bg-center bg-cover relative overflow-hidden">
          <div className="absolute bottom-0 right-0 min-h-[25%] max-w-[45%] z-10">
            <div className="p-8 bg-gradient-to-r from-black/30 flex items-center">
              <p className="uppercase text-1xl md:text-5xl font-bold text-white inline-block hover:cursor-default">La solución que necesitas para tu negocio</p>
            </div>
          </div>
          <Image
            src={contenedorDos}
            className="block object-cover w-full h-full brightness-50"
            alt='imagen de carrusel'
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
