/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import EnabledBusiness from "../../components/slider/EnabledBusiness";
import TestimonialSlider from "../../components/slider/Testimonial";
import Accordion from "../../components/elements/Accordion";

function TallyPrimeCloudVersion() {
    
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
        setModal(!modal);
    };
    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1" style={{ background: '#dcefff'}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-heading-3 mt-30">Cloud Based Tally Prime</h1>
                                    <h1 className="text-display-3 mt-30">Tally Cloud <br /> Solution Provider</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                        Peniel Technology LLC Provides Tally Prime (Tally ERP 9) ERP Software Cloud Version for Customers in Dubai, UAE, Sharjah, Bahrain, Abu Dhabi, Oman and all over the Middle East.
                                    </p>
                                    <div className="mt-40">
                                        <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Buy Now!</a></Link>
                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Personal Demo!</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-2"><img src="https://agon-nextjs-13.vercel.app/assets/imgs/page/services/1/banner-2.png" alt="Agon" /></div><img src="/assets/imgs/page/services/1/banner.png" alt="Agon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Salesman Module" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">Cloud Accounting</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">Tally on World's Fastest Cloud - Official TALLY & Cloud Partner Dubai, UAE</p>
                                <p className="text-body-excerpt color-gray-600 mt-10">Hosted in a secured Data Center. Can be accessed from Office, Branch and Home as well. Highly optimised Tally Cloud for better remote performance with lowest Internet Bandwidth requirements.</p>
                                <p className="text-body-excerpt color-gray-600 mt-10"><strong>Ask for Tally Cloud Version Demo for Trail and Download!</strong></p>
                                <div className="mt-30">
                                    <Link href="#" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Download</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-50">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Tally Prime Cloud Version Services</h2>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3">Get Access Now!</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Personal Demo!</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30 ">
                        <div className="row ">
                            <div className="col-lg-6 col-sm-12 block-we-do mt-50">
                                <h3 className="text-heading-2 ">
                                    Benefits of Tally Cloud
                                </h3>
                                <ul className="list-icons-2 p-0 mt-20">
                                    <li className="w-100 p-0" style={{ background: `url('')` }}>
                                        <ul className="text-body-excerpt color-gray-600">
                                            <li>
                                                Cloud-based live financial and operational reporting
                                            </li>
                                            <li>
                                                Dynamic data integrated with security
                                            </li>
                                            <li>
                                                Helps you access to the all kind of transactions history over a single click
                                            </li>
                                            <li>
                                                Pre-configured data warehouse for quick implementations
                                            </li>
                                            <li>
                                                Customizable Tally on Cloud modules with high security
                                            </li>
                                            <li>
                                                Provides simplicity in developing, budgeting, forecasting, modeling, and inspecting.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do mt-50">
                                <h3 className="text-heading-2 ">
                                    Why Host Tally on Cloud
                                </h3>

                                <ul className="list-icons-2 p-0 mt-20">
                                    <li className="w-100 p-0" style={{ background: `url('')` }}>
                                        <ul className="text-body-excerpt color-gray-600">
                                            <li>
                                                <strong>Outstanding Server Performance</strong>
                                                We provide 99.99 % uptime which increases the performance of your business
                                            </li>
                                            <li>
                                                <strong>Intact Data security</strong>
                                                security actions in place to keep your critical data safe from all threats and malicious files
                                            </li>
                                            <li>
                                                <strong>Amazingly Lightweight</strong>
                                                Our Tally ERP Cloud (Tally Cloud Hosting) is vastly optimized with lowest internet bandwidth requirements                                            </li>
                                            <li>
                                                <strong>No Backup Worries</strong>
                                                Automated backup mechanism and data synchronization that helps you to be prepared anytime.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
               

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                            <div className="modal__content" modal={modal}>
                                <div className="modal__video-align">
                                    {videoLoading ? (
                                        <div className="modal__spinner">
                                            <i className="fi-rr-refresh"></i>
                                        </div>
                                    ) : null}
                                    <iframe
                                        className="modal__video-style"
                                        onLoad={spinner}
                                        loading="lazy"
                                        width="800"
                                        height="500"
                                        src="https://www.youtube.com/embed/wnISyo5r2Bg?rel=0&showinfo=0&autoplay=1"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}

            </Layout>

        </>
    )
}

export default TallyPrimeCloudVersion;