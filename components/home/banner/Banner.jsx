"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { MSG } from "@/constants/MSG";

const Banner = () => {
    return(
        <section className="w-screen max-w-full h-auto">
            <Swiper
                modules={[Scrollbar, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                scrollbar={{draggable: true}}
                autoplay={{delay : 2500}}
                effect={"fade"}
            >
                {MSG.COMPONENTS.HOME.BANNER.map((banner, i) => (
                    <SwiperSlide key={i}>
                        <img src={banner.imgUrl} alt={banner.alt} 
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
};

export default Banner;