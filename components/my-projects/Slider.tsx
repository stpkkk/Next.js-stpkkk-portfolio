"use client";
import React, { useRef } from "react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@hooks/useMediaQuery";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

SwiperCore.use([Navigation]);

interface SliderProps {
  slides?: string[];
}

export const Slider = ({ slides }: SliderProps) => {
  const swiperRef = useRef<SwiperCore>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative max-w-[1000px] w-full mx-auto bg-secondary p-20 rounded-lg sm:px-0 sm:py-4">
      <Swiper
        slidesPerView={1}
        loop
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        modules={[Pagination]}
        pagination={isMobile ? { clickable: true } : false}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide}
              alt="slide"
              width={800}
              height={100}
              priority
              className="h-auto w-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isMobile || (
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
          <button
            type="button"
            className="swiper-button-prev"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <AiOutlineLeft size={40} />
          </button>
        </div>
      )}
      {isMobile || (
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
          <button
            type="button"
            className="swiper-button-next"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <AiOutlineRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};
