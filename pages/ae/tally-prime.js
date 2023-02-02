/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import EnabledBusiness from "../../components/slider/EnabledBusiness";
import TestimonialSlider from "../../components/slider/Testimonial";
import Accordion from "../../components/elements/Accordion";


function TallyPrime() {
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
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-heading-3 mt-30">Tally Gold Partner</h1>
                                    <h1 className="text-display-3 mt-30">UAE's Official Tally Prime Software Solution Provider</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">All new TallyPrime 2.0 is here - more flexible & insightful. It is offering all sorts of business management solutions for VAT, accounting, inventories & ERPs in the UAE.</p>
                                    <div className="mt-40">
                                        <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Free Consultation</a></Link>
                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Tally Prime Demo!</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-2"><img src="/assets/imgs/page/services/1/banner-2.png" alt="Agon" /></div><img src="/assets/imgs/page/services/1/banner.png" alt="Agon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30 ">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-we-do mt-50">
                                <h3 className="text-heading-2 ">
                                    New Tally Prime
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    The objective of TallyPrime has always been to offer its users up-to-date and cutting-edge software that supports boosting their experience while systematizing numerous processes, comprising accounting, inventory, compliance, etc. With this purpose in mind, Tally Prime has launched an innovative, better, and smarter version of Tally.ERP 9, which is called TallyPrime. This new creation compromises a great user experience and comes with a host of new features.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    Tally Software Solutions Providers & Tally Gold Partner Dubai, UAE - Tally ERP 9 Dubai is a Gold partner & Tally Software provider in the UAE. It has been for 13+ years a leading part of the Tally Partner .
                                </p>
                                <div className="mt-20">
                                    <a className="btn btn-black icon-arrow-right-white me-5 mt-10">Tally Renewal</a>
                                    <a className="btn btn-black icon-arrow-right-white mt-10">Tally ERP 9</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do mt-50">
                                <h3 className="text-heading-2 ">
                                    Tally Solution
                                </h3>

                                <ul className="list-icons-2 p-0 mt-20">
                                    <li className="w-100 p-0" style={{ background: `url('')` }}>
                                        <ul className="text-body-excerpt color-gray-600">
                                            <li>
                                                Holding the simplicity and flexibility of the Tally.ERP 9 software, the recently launched product – TallyPrime – will assist in boosting the productivity of processes leading to greater efficiency and quicker results. With the TallyPrime software, you can take your business to the succeeding level of growth, and some of the ideas covered include:
                                            </li>
                                            <li>
                                                Streamlining the TallyPrime platform– you can now discover products effortlessly and complete responsibilities sooner without the need of learning anything new.
                                            </li>
                                            <li>
                                                It comes with superior flexibility, which confirms that it can be modified to suit your business model and requirements.
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                                <div className="mt-20">
                                    <a className="btn btn-black icon-arrow-right-white me-5 mt-10">Tally Prime 2.0</a>
                                    <a className="btn btn-black icon-arrow-right-white mt-10">VAT Enabled</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container ">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Tally Prime Dubai</h2>
                                    <p className="text-body-excerpt  color-gray-600 mt-20">Tally Prime, Tally Prime UAE, Tally, Tally VAT release, Tally ERP, Tally ERP 6.4, Tally. ERP 9 is the latest ERP offering of the Tally software series. As with all Tally products, rapid updates are made available for the lifetime of the product via periodic releases, providing a high level of business capability that millions of users trust. Download Tally Latest Version.</p>
                                </div>
                            </div>
                            <div className="mt-30 text-center">
                                <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Download Tally Prime Now!</a></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">What We Do</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">Manage every business need,<br className="d-lg-block d-none" />effortlessly with Tally Prime!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Accounting</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            The size of your business or to which trade it belongs does not matter as TallyPrime makes Accounting and Finance function easily.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Inventory</h4>
                                        <p className="text-body-text color-gray-600 mt-15">You can stay updated with your inventory level every day and
                                            efficiently tracks your stock at single or multiple places.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Payroll</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            The TallyPrime Payroll module is extremely flexible for
                                            modifying methods of salary calculations and regularity of disbursal for
                                            a different types of business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Manufacturing</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Handling business work and tracking raw material depletion
                                            is crucial for all business entities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Banking</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Tally Banking streamlines day-to-day bank-associated tasks
                                            right to your fingertips and eases transactions and processing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">VAT and Other Features</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Flexibility to build and manage VAT classifications and tax
                                            rates. A seamless solution with many features to speed up the progress
                                            of your business.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <ul className="list-icons-2 ps-0">
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Your Growth Partner - Tally Solution Dubai</h3>
                                        <p className="text-body-text color-gray-500">To nurture your business, and make the right business decisions, you need precise understanding. With features like “Go To” and “Customisable Reports” in the new TallyPrime, you can determine and view the reports, slicing and dicing them as per your necessity. To support you in your evolution journey, TallyPrime allows you to manage multiple companies and add features such as multiple locations, cost centers, etc.</p>
                                        {/* <div className="mt-30">
                                            <a className="btn btn-black icon-arrow-right-white me-5">Tally Prime 2.0</a>
                                        </div> */}
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Better Control over Cash Flow</h3>
                                        <p className="text-body-text color-gray-500">You can now get paid faster as well as manage payment timelines through rapid and hassle-free bills receivables and payable management options. Similarly, TallyPrime enables easy and effective stock movement, making it potential to improve the cash flow. Also, the availability of insightful reports in the blink of an eye can support you to make assured decisions and strategize the growth of your business in a superior way.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Improved Business Efficiency - Tally Solution UAE</h3>
                                        <p className="text-body-text color-gray-500">With the speed that TallyPrime brings, you can do things rapidly and save valuable time, serving you to do more for less. You can print or view the reports present in the mid of the voucher entry, you can load additional company in a report without leaving the activity you were on it, get to know the loopholes or odd details from each report that you view, and much more. You don’t have to memorize shortcut keys instead have a spontaneous and reliable workflow that helps you do work quicker</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Tax compliance Made Easy</h3>
                                        <p className="text-body-text color-gray-500">The Prevention, Detection, and Correction mechanism guarantees that your books are always precise, therefore assuring you that the returns you file are at all times accurate</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-50">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Tally Prime New Release 2021 - VAT ERP Latest Version!</h2>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Exclusive Offer</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="box-bg-bottom">
                            <div className="box-video-homepage6">
                                <div className="box-image mb-30">
                                    <img className="img-responsive bdrd-16" src="/assets/imgs/page/homepage1/vat.png" /></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd mb-0"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-acquis.svg" /></span>
                                            <h4 className="text-heading-4">Tally Prime Gold (Unlimited Users)</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Tally Prime Gold comes with limitless multiple users for multiple PC using a local area network. Gold and Silver editions are the same in the aspect of features and functionalities except that multiple users can work at the same time. We are glad to bring to you Tally Prime Gold which is packed with added capabilities that offer data safety, distant access, on-demand data synchronization, and flexibility to suit your business practices.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="list-icons mt-50">
                                        <div className="item-icon none-bd mb-0"><span className="icon-left"><img src="/assets/imgs/page/homepage6/icon-active.svg" /></span>
                                            <h4 className="text-heading-4">Tally Prime Silver (Single User)</h4>
                                            <p className="text-body-text color-gray-600 mt-15">
                                                Tally Prime Silver is intended for a single user. This edition comes with all the features and skills including Tally.NET and services like remote access. Both versions are the same in the facet of features and functionalities except that it runs on one single system at a time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-50">
                                <h2 className="text-heading-2 color-gray-900">TallyPrime AMC Services - Tally Dubai </h2>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Free Demo</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">We are a trusted Tally Partner offering Tally Solution in Dubai, UAE, Bahrain, Abu Dhabi, Oman, Sharjah, Ajman, Kuwait, and the Middle East. We offer a free demo for TallyPrime.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Customer Support</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">Our experts will assist you in augmenting your business processes by expediting communication and information system. We offer highly efficient support to all your queries regarding TallyPrime.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Quick Installation</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">We offer Tally ERP 9 installation as per the request of customized and personalized service, coupled with our drive to offer our customers all the help they need to make the most out of their TallyPrime implementation.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Training</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">We provide Free Tally Online Training on the Latest ERP 9 version in scientifically designed and step by step Video Tutorials.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Online and Onsite Support</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">We offer highly efficient online and onsite Tally support. We make the customer's experience as smooth and speedy as possible.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 ">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15 d-flex gap-4 align-items-center">
                                            <img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" />
                                            <h4 className="text-heading-4">Annual Maintenance</h4>
                                        </div>
                                        <p className="text-body-text color-gray-600 mt-15">We provide maintenance to our product, Tally annually. These valued services will be offered to all our customers in Dubai and the Middle East.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">Upgradation </span></div>
                                <h2 className="text-heading-1 color-gray-900 mb-60">Upgrade Latest<br className="d-lg-block d-none" /> Tally Version</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-12 col-12" />
                            <div className="col-lg-10 col-sm-12 col-12">
                                <ul className="list-steps">
                                    <li className="icon-asset1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="text-center block-step">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Tally 9</h3>
                                            <p className="text-body-text color-gray-500 h-auto">Tally.ERP 9 Silver to Tally.ERP 9 Gold: 1260 USD / 4680 AED</p>
                                            <p className="text-body-text color-gray-500">(Upgrade Tally Single User to Tally Multi User )</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        <div className="text-center block-step">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-connect.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Tally 7.2</h3>
                                            <p className="text-body-text color-gray-500 h-auto">Gold to Tally.ERP 9 Gold: 756 USD / 2808 AED</p>
                                            <p className="text-body-text color-gray-500">( Upgrade Tally Gold 7.2 to Tally ERP 9 Gold )</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="text-center block-step bg-5">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-match.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Tally 7.2</h3>
                                            <p className="text-body-text color-gray-500 h-auto">Silver to Tally.ERP 9 Silver: 252 USD / 936 AED</p>
                                            <p className="text-body-text color-gray-500">( Upgrade Tally Silver 7.2 to Tally ERP 9 Silver )</p>
                                        </div>
                                    </li>
                                    <li className="icon-asset4 wow animate__animated animate__fadeIn pb-0" data-wow-delay=".9s">
                                        <div className="text-center block-step bg-5">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-complete.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Tally 7.2</h3>
                                            <p className="text-body-text color-gray-500 h-auto">Gold to Tally.ERP 9 Gold: 756 USD / 2808 AED</p>
                                            <p className="text-body-text color-gray-500">( Upgrade Tally Gold 7.2 to Tally ERP 9 Gold )</p>
                                        </div>
                                    </li>
                                    <li className="wow animate__animated animate__fadeIn  pb-0" data-wow-delay=".7s">
                                        <div className="text-center block-step bg-9">
                                            <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-review.svg" alt="Agon" /></div>
                                            <h3 className="text-heading-5 mb-10">Tally 9 </h3>
                                            <p className="text-body-text color-gray-500 h-auto">Silver to Tally.ERP 9 Silver: 126 USD / 468 AED</p>
                                            <p className="text-body-text color-gray-500">( Upgrade Tally 9 Silver to Tally ERP 9 Silver )</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-1 col-sm-12 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container ">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Tally Dealer in Oman</h2>
                                    <p className="text-body-text color-gray-500">Peniel Technology LLC is an Top notch Dealer for Tally in Oman (VAT Compliance) with the best Support services and Customization, Tally Prime VAT with New VAT Rule in Oman 2021.</p>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Buy Tally for Oman</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-2 mb-10">VAT Enabled Business Software</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <EnabledBusiness />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Tally Prime New Release 2021</h2>
                                </div>
                                <div className="mt-20 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white mr-10 mt-10">Tally Versions</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white mt-10">Download Now!</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-40 bg-green-900 pt-70 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 col-12 block-gallery-1 mt-30">
                                <div className="row">
                                    <div className="col-lg-6"><img className="img-responsive mb-10" src="/assets/imgs/page/about/2/img-2.png" alt="Agon" /><img className="img-responsive d-none d-lg-block" src="/assets/imgs/page/about/2/img-3.png" alt="Agon" /></div>
                                    <div className="col-lg-6 d-none d-lg-block"><img className="img-responsive" src="/assets/imgs/page/about/2/img-1.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-12 block-gallery-1 mt-30">
                                <h2 className="text-heading-3 color-white mb-10">VAT Enabled Business Software</h2>
                                <div className="content-detail ">
                                    <ul className='text-light'>
                                        <li>Access business data maintained by your in-house accountant or an outsourced accountant / Chartered Accountant</li>
                                        <li>Generate financial statements / MIS reports securely without depending on anyone </li>
                                        <li>Easily get access to business information when you are away from office</li>
                                    </ul>
                                </div>
                                <h2 className="text-heading-3 color-white mb-10 mt-30">Tally Prime Feature</h2>
                                <div className="content-detail ">
                                    <ul className='text-light'>
                                        <li> Grand New Look with advanced new user Experience</li>
                                        <li> New Menu Driven interface while retaining older keyboard navigation</li>
                                        <li> Revolutionary GoTo Button No need to remember which report place: use new inbuilt search of tally prime</li>
                                        <li> Navigate to any report from any screen or any menu</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20 ">
                        <div className="row flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 col-sm-12 col-12 mt-30">
                                <h2 className="text-heading-3 color-white mb-10">Tally POS Billing</h2>
                                <p className="text-inter-lg">Tally POS is a hi-tech cash register that enhances the sales total, calculates tax, computes the alteration from the money tendered, and automatically adjusts the store’s inventory to debit the amount of inventory sold. </p>
                                <h2 className="text-heading-3 color-white mb-10 mt-30">Tally POS Feature</h2>
                                <div className="content-detail ">
                                    <ul className='text-light'>
                                        <li> It is one of the simple and user-friendly software that can be easily installed</li>
                                        <li> Enables quicker data entry and calculations</li>
                                        <li> Supports you to calculate sales and sale profits</li>
                                        <li> Accomplishes inventory and enables bar code scanner operations</li>
                                        <li> You can print the Invoices with few minutes</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-12 block-gallery-1 mt-30">
                                <div className="row">
                                    <div className="col-lg-6"><img className="img-responsive mb-10 d-none d-lg-block" src="/assets/imgs/page/about/2/img-2.png" alt="Agon" /><img className="img-responsive" src="/assets/imgs/page/about/2/img-3.png" alt="Agon" /></div>
                                    <div className="col-lg-6 d-none d-lg-block"><img className="img-responsive" src="/assets/imgs/page/about/2/img-1.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-2 color-gray-900">

                                    Tally UAE - Tally Prime UAE<br className="d-lg-block d-none" />Tally ERP 9 Accounting Software
                                </h2>
                                <p className="text-body-excerpt color-gray-600 mt-20 ">
                                    Tally UAE - The New Tally Prime simpler and faster way of working - Tally Solution UAE
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-50">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="#tab-1" legacyBehavior>
                                        <a className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Price</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="#tab-2" legacyBehavior>
                                        <a className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Support UAE</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="#tab-3" legacyBehavior>
                                        <a className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Support Oman</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="#tab-4" legacyBehavior>
                                        <a className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>TVU Pack</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(5)}>
                                    <Link href="#tab-5" legacyBehavior>
                                        <a className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Gold Partner</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-30">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally Software Price List
                                                </h3>
                                                <div className="content-detail ">
                                                    <ul className='text-body-excerpt mt-30'>
                                                        <li> Tally ERP 9 Single User (Silver Edition) Price is Starting from $630</li>
                                                        <li> Tally ERP 9 Multi User (Silver Edition) Price is Starting from $1890</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a>
                                                <img className="img-responsive" src="/assets/imgs/page/homepage1/img-1.png" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-1 panel-box mt-30">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally Support and Customer Care 
                                                </h3>
                                                <div className="content-detail ">
                                                    <ul className='text-body-excerpt mt-30'>
                                                        <li> Tally Online Support: +971 50 961 7708</li>
                                                        <li>Tally Onsite Visit Support: +971 50 961 7708</li>
                                                        <li>Tally Onsite Email Support: info@penieltech.com</li>
                                                        <li>Tally Chat Support: +971 50 961 7708 (Whats App)</li>
                                                    </ul>
                                                </div>
                                                <p className="text-body-excerpt mt-10">
                                                    Tally Customer Care UAE | Tally Customer Care Dubai Contact Number: +971 4 239 8571/+971 50 961 7708
                                                </p>
                                                <p className="text-body-excerpt mt-20">
                                                    Tally UAE Toll Free Number - +971 4 239 8571
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="/assets/imgs/page/homepage1/img-1-2.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-3 panel-box mt-30">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally Oman and Support
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Peniel Technology LLC is an Top notch Dealer for Tally in Oman (VAT Compliance) with best Support services and Customization, Tally Prime VAT with New VAT Rule in Oman 2021.
                                                </p>
                                                <div className="content-detail ">
                                                    <ul className='text-body-excerpt mt-30'>
                                                        <li> Tally Support Oman: +968 90139256</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="/assets/imgs/page/homepage1/img-1-3.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-30">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally virtual user
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Tally Virtual User (TVU) pack is an instance of accessing Tally.ERP 9 over a virtualised environment through tools like Windows RDP, Windows thin Client, Citrix, or similar technologies. In simple terms, if you use Windows RDP or similar technologies to access TallyPrime Dubai, you will require a license having TVU pack entitlement.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="/assets/imgs/page/homepage1/img-1-4.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-30">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally Gold Partner
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Penieltech is gold partner & Tally Software provider in the UAE. It has been for many years a leading part of the Tally Partner Network with depth knowledge and technical expertise with efficient, effective and satisfying services to its clients.
                                                </p>
                                                <p className="text-body-excerpt mt-20">
                                                    Tally in Dubai, Tally ERP Dubai Software,Tally in Sharjah, Tally in Abu Dhabi, Tally in Al Ain, Tally ERP9 Dubai, Tally ERP9 UAE, Tally in Ras Al Khaimah, Tally Accounting UAE, VAT UAE, Tax in UAE, Tax in Dubai, Tally Training dubai, VAT Training Dubai,Tally Dealers in Dubai, UAE
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="/assets/imgs/page/homepage1/img-1-5.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="banner-hero banner-4 mt-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-heading-2 color-white">TALLY PRIME UAE SYSTEM REQUIREMENTS</h1>
                                    <div>
                                        <table className=" mt-30 ">
                                            <tbody className="text-light">
                                                <tr>
                                                    <td className="p-3 bg-light text-dark"><strong>Particulars</strong></td>
                                                    <td className="w-75 p-3 bg-light text-dark"><strong>Recommended Configuration</strong></td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">Processor</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">1.8 GHz 64-bit (x64) architecture processor; Core2 Duo, Dual Core, Core i3, Core i5, Core i7 equivalent, or above</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">RAM</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">4 GB or more</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">Hard Disk</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">150 MB free space to install the application (This excludes the space required to store company data.)</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">Monitor Resolution</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">1366 × 768</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">Operating System</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">64-bit editions of Microsoft Windows 7, Windows Server 2008 R2, or above</td>
                                                </tr>
                                                <tr>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">Other MS Office software</td>
                                                    <td className="ps-3 pe-3 pt-10 pb-10">64-bit editions of MS Office software such as Excel, Word, and so on</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <a className="popup-youtube btn-play-video-2" onClick={openModal}></a>
                                        <img className="img-responsive shape-2" alt="Agon" src="/assets/imgs/page/homepage4/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-50">
                        <TestimonialSlider />
                    </div>
                </div>

                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-2 color-gray-900">Tally FAQ's</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Still Can’t Find What You Are Looking For?</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <Accordion />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
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

export default TallyPrime;