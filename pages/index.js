import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";

function Home() {
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
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="tag-1">Value-Added Tax</span>
                                    <h1 className="text-display-4">
                                        VAT Enabled
                                    </h1>
                                    <h1 className="text-display-2">
                                        <span className="color-green-900"> Accounting</span> and
                                        <span className="color-green-900"> ERP </span> Softwares
                                    </h1>
                                    <p className="text-body-excerpt color-gray-500 mt-20 pr-60">
                                        We are a leading VAT ERP and VAT Accounting Software company in Oman for VAT Software, ERP Software, Accounting Software. Ask for Tally Prime VAT, QuickBooks VAT and Other vat compliance software for Small Businesses.
                                    </p>
                                    <div className="mt-40">
                                        <Link href="/page-service-1" legacyBehavior><a className="btn btn-black icon-arrow-right-white">About VAT</a></Link>
                                        <Link href="/page-about-1" legacyBehavior><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Get VAT Software</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="video-block shape-1">
                                            <a className="popup-youtube btn-play-video" onClick={openModal}></a>
                                            <span className="text-heading-4">Watch intro video</span>

                                        </div>
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/homepage1/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="section-box overflow-visible mt-70">
                    <div className="container">
                        <div className="row justify-content-md-center">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                                <Link href="/#" legacyBehavior><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">
                                    VAT Enable Accounting software
                                    <br className="d-lg-block d-none" />in Oman, UAE, Saudi Arabia, Bahrain
                                </h2>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                    Peniel Computer is a provider of IT solutions ranging from a custom developing business application, VAT Accounting and financial software like Tally. ERP9, (New Tally Prime VAT) Peachtree, Sage 50 US, Sage 50 CA, Sage Pastel, QuickBooks, (VAT Enabled) and Simply Accounting. Incorporated in the UAE (Dubai, Sharjah, Ajman, Ras Al Khaimah, Abudhabi, Fujairah and Al ain) aims to serve the Middle East Market (Qatar, Bahrain, Oman & Saudi Arabia). Peniel Computer stands for trustworthiness and serving its clients with truly worthwhile solutions. As a key technology provider, we ensure you that we can offer expert independent advice on the most advantageous networking, hardware and software solutions for your organization. VAT software that is designed focusing on Oman VAT which manages the compliance with minimum efforts and time.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                    Peniel Computer is a dynamic and progressive company with a clear objective - to provide our clients with innovative and cost-effective business solutions through the efficient deployment and integration of information technology. It is a team with the capacity to deliver a comprehensive service tailored to your exact requirements and provide the IT capabilities you need while leaving you free to concentrate on your core business activities. As your technology partner, IT Solutions will work with you to create a competitive advantage from the rapidly emerging technologies such as online solutions, always ensuring a versatile and reliable platform for your information systems that will adapt to changing business priorities.
                                </p>
                                <div className=" text-lg-center text-start pt-30">
                                    <Link href="/about" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Get a Quote</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    {/* <div className="container">
                        <div className="text-center mt-90">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="/#tab-1" legacyBehavior>
                                        <a className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Tally </a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="/#tab-2" legacyBehavior>
                                        <a className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>QuickBooks </a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="/#tab-3" legacyBehavior>
                                        <a className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Animation</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="/#tab-4" legacyBehavior>
                                        <a className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>User Experience</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(5)}>
                                    <Link href="/#tab-5" legacyBehavior>
                                        <a className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Social Network</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(6)}>
                                    <Link href="/#tab-6" legacyBehavior>
                                        <a className={activeIndex === 6 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Marketing</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Tally Prime Oman -VAT Accounting Software
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    The all New Tally Prime, Tally Prime UAE, Tally, Tally VAT release, Tally ERP, Tally ERP 6.4, Tally. ERP 9 is the latest ERP offering of the Tally software series. As with all Tally products, rapid updates are made available for the lifetime of the product via periodic releases, thereby providing the high level of business capability that millions of users trust.
                                                </p>
                                                <p className="text-body-excerpt mt-30">
                                                    We are Official Tally Software Gold Partner in Dubai, UAE, Oman, Bahrain, Saudi Arabia, Ajman, Abu Dhabi and all over the Middle East.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Get VAT Enabled Tally Prime</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a>
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.png" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-1 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    QuickBooks Desktop - Online QuickBooks Oman
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Ready to run your business better with QuickBooks Online, Powerful accounting tools for small and growing businesses Access and manage your books from your computer, laptop, tablet, or smartphone anytime you choose. Create access privileges so that your colleague or accountant can login and work with your data online. We are an official QuickBooks Dealer in Dubai, UAE, Bahrain, Oman, Saudi Arabia, and all over the Middle East.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-2.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    We can blend colors multiple
                                                    ways
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Choose The Best Plan Thats For
                                                    You
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Subscribe our newsletter to get
                                                    gift
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 6 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-6 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Ready to get started? Create and
                                                    Account
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea
                                                    commodo consequat. Duis aute
                                                    irure dolor in reprehenderit in
                                                    voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <a className="popup-youtube btn-play-video" onClick={openModal}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-6.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.png" alt="Agon" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-1 mt-30">
                                    Tally Prime Oman -VAT Accounting Software
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Necessary to deliver white glove, fully managed
                                    campaigns that surpass industry benchmarks.Take
                                    your career to next level.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Boost your sale
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Smart Installation Tools
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Introducing New Features
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Dynamic Boosting
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.png" alt="Agon" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">
                                    We believe that our works can contribute to a
                                    better world.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Necessary to deliver white glove, fully managed
                                    campaigns that surpass industry benchmarks.Take
                                    your career to next level.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Boost your sale
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Smart Installation Tools
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Introducing New Features
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Dynamic Boosting
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                    We facilitate the creation<br className="d-lg-block d-none" />of strategy and design
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Interactively transform magnetic growth
                                    strategies whereas prospective outside the
                                    box thinking.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Business Strategy
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Local Marketing
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-2" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Social media
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        You are always welcome to visit our little
                                        den. Professional in teir craft! All
                                        products were super amazing with strong
                                        attension to details, comps and overall
                                        vibe.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-3" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.png" alt="Agon" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <span className="tag-1">What We Do, What You Get</span>
                                <h3 className="text-heading-1 mt-30">
                                    We believe that our works can contribute to a
                                    better world.
                                </h3>
                                <p className="text-body-lead-large color-gray-600 mt-30">
                                    Necessary to deliver white glove, fully managed
                                    campaigns that surpass industry benchmarks.Take
                                    your career to next level.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Boost your sale
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Smart Installation Tools
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Introducing New Features
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">
                                            Dynamic Boosting
                                        </h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">
                                            The latest design trends meet
                                            hand-crafted templates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1 color-gray-900">
                                        What We Offer
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        What makes us different from others? We give
                                        holistic solutions with strategy, design
                                        and technology.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">
                                    Our Happy Customers
                                </h3>
                                <p className="text-body-lead-large color-gray-600">
                                    Know about our clients, we are a woldwide
                                    corporate brand
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">
                                    From Our blog and Event fanpage
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1" legacyBehavior><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Company</span><Link href="/blog-single" legacyBehavior><a className="text-heading-4">We can blend colors multiple ways, the most
                                        common</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior>
                                            <a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Marketing Event</span><Link href="/blog-single" legacyBehavior><a className="text-heading-4">How To Blow Through Capital At An
                                        Incredible Rate</a></Link>
                                    <div className="grid-4-img">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4">
                                    <span className="tag-dot">Customer Services</span><Link href="/blog-single" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should Know
                                        About?</a></Link>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box section-green mt-100">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                            Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                        </h3>
                    </div>
                    <PriceTable2 />
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Subscribe our newsletter
                                            </h4>
                                            <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <img src="/assets/imgs/template/chart.png" alt="Agon" />
                                            </div>
                                            <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
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
                                        src="https://www.youtube.com/embed/oRI37cOPBQQ"
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

export default Home;