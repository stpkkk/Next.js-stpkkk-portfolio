"use client";
import React, { useRef } from "react";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@hooks/useMediaQuery";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image, { StaticImageData } from "next/image";

SwiperCore.use([Navigation]);

interface SliderProps {
  slides?: StaticImageData[];
}

export const Slider = ({ slides }: SliderProps) => {
  const swiperRef = useRef<SwiperCore>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className="w-full min-h-[851px] sm:min-h-[551px] pt-[105px] sm:pt-[50px] "
      id="prices"
    >
      <div className="relative max-w-[1000px] w-full mx-auto bg-secondary p-10 rounded-lg sm:px-0 sm:py-4">
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
              <div className="flex_center min-h-[300px]">
                <Image
                  src={slide}
                  alt="slide"
                  width="0"
                  height="0"
                  priority
                  className="max-w-[800px] h-auto w-full overflow-hidden"
                />
              </div>
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
    </div>
  );
};
