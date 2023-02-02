/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSlider = () => {

    const data = [
        {
            avatar: "1.png",
            name: "German Parts",
            company: "Posted on Google",
            quote: "Best Tally software dealer in UAE. Professional team good support",
            bg: ""
        },
        {
            avatar: "2.png",
            name: "lmp video AV",
            company: "Posted on Google",
            quote: "Good software Tally ERP for Accounting purpose us also your service is very good",
            bg: "bd-bg-6"
        },
        {
            avatar: "3.png",
            name: "gaurav hegde",
            company: "Posted on Google",
            quote: "Tally is very easy and user friendly to use compared to other accounting software is and data traceability is also good",
            bg: "bd-bg-10"
        },
        {
            avatar: "4.png",
            name: "Bhakiyaraj Tamilmani",
            company: "Posted on Google",
            quote: "Providing excellent business solutions with the latest in technology to make any business run simple and efficient.",
            bg: "bd-bg-6"
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        // slidesPerView={4}
                        spaceBetween={30}
                        // loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-4",
                            nextEl: ".swiper-button-next-4"
                        }}
                        className="swiper-wrapper pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active">
                                    <div className={`card-grid-style-3 hover-up ${item.bg}`}>
                                        <div className="grid-3-img">
                                            <img src={`/assets/imgs/page/homepage1/user-${item.avatar}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-6 mb-5 mt-20">{item.name}</h3>
                                        <span className="text-body-small d-block">{item.company}</span>
                                        <p className="text-body-text text-desc color-gray-500 mt-20">{item.quote}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-4" />
                <div className="swiper-button-prev swiper-button-prev-4" />
            </div>
        </>
    );
};

export default TestimonialSlider;

