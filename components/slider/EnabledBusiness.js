/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link"

SwiperCore.use([Autoplay, Navigation]);
const EnabledBusiness = () => {

    const data = [
        {
            name: "VAT Compliance",
            quote: "Stay up-to-date with your inventory level and at all times and effectively track your stock at single or multiple locations.With Tally Dubai, you can record all inventory transactions easily and comprehensively using goods receipt notes, delivery notes, stock transfer journals, manufacturing journals, and physical stock journals.",
            list: [
                'Godown wise reports',
                'Multiple units of measure',
                'Item-Wise & Invoice-Wise Profitability',
                'Multiple Stock Valuation',
                'Stock wise summary report',
                'Item Batch-Wise Details',
                'Grouping& Categorisation of Stock Items',
                'Reorder Levels',
            ],
            bg: ""
        },
        {
            name: "Banking",
            quote: "Tally Banking makes automation and fast banking processes, a reality for your business - Tally Software Dubai. The key features are: ",
            list: [
                'Bank Reconciliation',
                'Cheque Book Management',
                'Cheque printing',
                'Capture Transaction Types - ATM and Cards',
                'Calculate interest of bank accounts based on reconciliation date',
                'Printing beneficiary account number and Bank code on the Payment Advice',
            ],
            bg: "bd-bg-6"
        },
        {
            name: "Payroll management",
            quote: "Payroll management is an essential ingredient for a well- functioning and successful organization.Tally.ERP 9 Dubai lets you simplify payroll management for your business.It allows you to efficiently manage your employee details and experience error - free processing of employee salaries. The key features are",
            list: [
                'Pay Slip Printing and E-Mailings',
                'Employee Category/Group-Wise Pay Sheet',
                'Employee Profile, Group &amp; Category',
                'Employee Pay Structure Management',
                'Payroll Exception Reports',
                'Employee Profile Report',
                'Payment Advice',
            ],
            bg: "bd-bg-10"
        },
        {
            name: "MIS-REPORTING",
            quote: "MIS reports add to the intelligence, alertness and, awareness of business managers by providing them with relevant information required for effective decision making.MIS reporting capabilities in Tally.ERP 9 allows you to instantly generate easy to use reports like stock aging and movement analysis, profit analysis, income and expenditure statements, exception reports, etc. The key features are ",
            list: [
                'Comparative Reports in Multi-Columnar Format',
                'Exception Reports',
                'Payment Performance of Debtors',
                'Stock Ageing Analysis',
                'Stock Movement Analysis',
                'Profit Analysis',
                'Job Costing Analysis,',
                'Income Expenditure Statements',
                'Scenario Management',
            ],
            bg: "bd-bg-6"
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        // slidesPerView={4}
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
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active">
                                    <div className={`card-grid-style-3 pb-20 pt-20 hover-up ${item.bg}`}>
                                        <h3 className="text-heading-6 ">{item.name}</h3>
                                        <p className="text-body-text text-desc color-gray-500 mt-10">{item.quote}</p>
                                        <div className="content-detail">
                                            <ul className=''>
                                                {
                                                    item?.list?.map((lis, index) => {
                                                        return (
                                                            <li key={index}>{lis}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
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

export default EnabledBusiness;

