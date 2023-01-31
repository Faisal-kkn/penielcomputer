import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../../components/elements/PriceTable2";
import Layout from "../../components/layout/Layout";
import OfferSlider from "../../components/slider/Offer";
import TestimonialSlider from "../../components/slider/Testimonial";

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
                    <div className="banner-hero banner-1" style={{ padding: '110px 0px 80px 0px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="tag-1 bg-6 color-green-900">Value-Added Tax</span>
                                    <h1 className="text-display-4 mt-20">
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
                                        <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>About VAT</a>
                                        <a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6" onClick={openModal}>Get VAT Software</a>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        {/* <div className="video-block shape-1">
                                            <a className="popup-youtube btn-play-video" ></a>
                                            <span className="text-heading-4">Watch intro video</span>

                                        </div> */}
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/homepage1/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-2 color-gray-900">
                                    VAT Enable Accounting software
                                    <br className="d-lg-block d-none" />in Oman, UAE, Saudi Arabia, Bahrain
                                </h2>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                    Peniel Computer is a provider of IT solutions ranging from a custom developing business application, VAT Accounting and financial software like Tally. ERP9, (New Tally Prime VAT) Peachtree, Sage 50 US, Sage 50 CA, Sage Pastel, QuickBooks, (VAT Enabled) and Simply Accounting. Incorporated in the UAE (Dubai, Sharjah, Ajman, Ras Al Khaimah, Abudhabi, Fujairah and Al ain) aims to serve the Middle East Market (Qatar, Bahrain, Oman & Saudi Arabia). Peniel Computer stands for trustworthiness and serving its clients with truly worthwhile solutions. As a key technology provider, we ensure you that we can offer expert independent advice on the most advantageous networking, hardware and software solutions for your organization. VAT software that is designed focusing on Oman VAT which manages the compliance with minimum efforts and time.
                                </p>
                                <div className=" text-center  text-start pt-30">
                                    <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Get a Quote</a>
                                </div>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-1.jpg" alt="Tally Prime" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">
                                    Tally Prime Oman
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    The all New Tally Prime, Tally Prime UAE, Tally, Tally VAT release, Tally ERP, Tally ERP 6.4, Tally. ERP 9 is the latest ERP offering of the Tally software series. As with all Tally products, rapid updates are made available for the lifetime of the product via periodic releases, thereby providing the high level of business capability that millions of users trust.
                                </p>
                                {/* <p className="text-body-excerpt color-gray-600 mt-30">
                                    We are Official Tally Software Gold Partner in Dubai, UAE, Oman, Bahrain, Saudi Arabia, Ajman, Abu Dhabi and all over the Middle East.
                                </p> */}
                                <div className=" text-lg-start text-start pt-30">
                                    <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Get VAT Enabled Tally Prime</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100 mb-100">
                        <div className="row align-items-center  flex-column-reverse flex-lg-row">

                            <div className="col-lg-6 col-sm-12 block-we-do">
                                {/* <span className="tag-1">What We Do, What You Get</span> */}
                                <h3 className="text-heading-2 ">
                                    QuickBooks Oman
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    Ready to run your business better with QuickBooks Online, Powerful accounting tools for small and growing businesses Access and manage your books from your computer, laptop, tablet, or smartphone anytime you choose. Create access privileges so that your colleague or accountant can login and work with your data online. We are an official QuickBooks Dealer in Dubai, UAE, Bahrain, Oman, Saudi Arabia, and all over the Middle East.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="mt-50">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">15</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Customers
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">33</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Downloads
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                <span className="count">99</span>%
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Client Satisfaction
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-2.jpg" alt="QuickBooks" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box section-green">
                    <div className="container mt-100 mb-50">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h3 className="text-heading-2 mb-10 text-white">Special Offer awaiting just for you.</h3>
                                <p className="text-body-lead-large color-gray-600 text-light">
                                    VAT Enabled Accounting and ERP Softwares
                                </p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start mt-md-3">
                               <a className="btn btn-default btn-white icon-arrow-right" onClick={openModal}>Get Offer</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-3.jpg" alt="CRM Software" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                {/* <span className="tag-1">What We Do, What You Get</span> */}
                                <h3 className="text-heading-3">
                                    CRM Software
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    Finding it hard to keep track of all the queries of customers? Forgetting to call new customers? Need software that can remind you to call your customers, give a visit for regular maintenance for your customers? Well, we have the right software for you!
                                </p>

                                <div className="line-bd-green mt-50" />
                                <div className="mt-50">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">7</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Customers
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">26</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Downloads
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                <span className="count">97</span>%
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Client Satisfaction
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" text-lg-start text-start pt-30">
                                        <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Get a quote</a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row  align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                {/* <span className="tag-1">What We Do, What You Get</span> */}
                                <h3 className="text-heading-3">
                                    HR & Payroll Management
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    It is essential to keep the employees of the company satisfied in their field of work and this leads to higher productivity and better output from each of them. To assist you in human resource management, we have an apt software solution for you. Human Resource Management System (HRMS) software will cater to all your requirements to manage the entire workforce with ease. HR and Payroll software Saudi Arabia is an important software needed in all companies today.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="mt-50">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">10</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Customers
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">49</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Downloads
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                <span className="count">99</span>%
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Client Satisfaction
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-4.jpg" alt="Agon" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-100">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="assets/imgs/page/homepage1/img-5.jpg" alt="Agon" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                {/* <span className="tag-1">What We Do, What You Get</span> */}
                                <h3 className="text-heading-3">
                                    Cheque Printing
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    Using the professional Cheque Printing Software provided by us, you can print cheques in any customized format you prefer. All the concerned elements like A/C payee, amount and date, etc. are printed. All you have to do is just filling in the software and printing the cheque.
                                </p>
                                <div className="line-bd-green mt-50" />
                                <div className="mt-50">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">3</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Customers
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                +<span className="count">12</span>k
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Downloads
                                            </p>
                                        </div>
                                        <div className="col-lg-4 col-sm-4 col-4">
                                            <h3 className="text-heading-4 color-gray-900 mb-15">
                                                <span className="count">100</span>%
                                            </h3>
                                            <p className="text-body-text-md color-gray-500">
                                                Client Satisfaction
                                            </p>
                                        </div>
                                    </div>
                                    <div className=" text-lg-start text-start pt-30">
                                       <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Get a quote</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-box  mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center mt-100">
                                <span className="tag-1 bg-6 color-green-900">Features</span>
                                <h2 className="text-heading-2 color-gray-900 mt-20">
                                    VAT Software solution <br className="d-lg-block d-none" /> Services for your business.
                                </h2>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                    Automate Online and Desktop accounting & bookkeeping with VAT Accounting Software, Bookkeeping software, Manufacturing Inventory Software, ERP Softwares, cheap accounting software, cost effective accounting software, Odoo Oman, ERPNext Oman. Highly customizable. Integrated with budget management & asset management. Integrated with Sales & Purchase. Mobile App. Desktop/PC. Customizable. API.
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-50">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up pl-30 pr-30">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Tally" height='80px' />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Tally Prime Oman
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Official Tally ERP 9 Dealer, Consultant, Gold Partner in Dubai, UAE, Oman, Bahrain, and Saudi Arabia, Tally Prime is the Latest Version of Tally ERP 9 Accounting Software.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="#" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Know More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up pl-30 pr-30">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="QuickBooks" height='80px' />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        QuickBooks Oman
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Intuit QuickBooks Official Dealer, Partner, Consultant in Dubai, UAE, Bahrain, Oman, Saudi Arabia. Get QuickBooks Support and Demo with Latest QuickBooks Version.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="#" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Know More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up pl-30 pr-30">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="Cheque Printing" height='80px' />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Cheque Printing
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Elate Cheque Printing and Bank Book Management software developed in the UAE and available across all leading IT Retailers across the Middle East, UAE.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="#" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Know More</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="card-grid-1 bg-4 bg-business hover-up pl-30 pr-30">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/crm.svg" alt="CRM Software" height='80px' />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        CRM Software
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Elate Customer Relationship Software is Customization & It Scales with Any Business. The Route, Prioritize & Solve Customer Support Tickets with Elate. Seamless Self-Service.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="#" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Know More</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box">
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
                </section> */}
                {/* <section className="section-box">
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
                </section> */}
                {/* <section className="section-box">
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
                </section> */}
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
                    <div className="container mt-90 mt-sm-5">
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
                                    <span className="tag-dot">Customer Services</span><Link href="/blog-single" legacyBehavior><a className="text-heading-4">Design Studios That Everyone Should know?</a></Link>
                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box section-green mt-100">
                    <div className="container mt-70">
                        <h3 className="text-heading-1 color-white text-center mb-10">
                            Choose The Best Plan<br className="d-lg-block d-none" />That’s For You
                        </h3>
                    </div>
                    <PriceTable2 />
                </section> */}
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Stay up to date
                                            </h4>
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
                    <section className="modal__bg">
                        <div className="modal__align">
                            <div className="modal__content" modal={modal}>
                                <div className="modal__video-align">
                                    <div className="box-gray-100 p-30 " style={{borderRadius: '20px'}}>
                                        <div className="row position-relative">
                                            <div className="btn p-0 position-absolute text-end fs-5 cursor-pointer" onClick={openModal} style={{zIndex: '99', top: '-50px', right: '-40px'}}>X</div>
                                            <div className="col-lg-12 ">
                                                <div className="form-group"><input className="form-control" placeholder="Enter your name" /></div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group"><input className="form-control" placeholder="Your email" /></div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group"><input className="form-control" placeholder="Phone number" /></div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group"><textarea className="form-control" placeholder="Message" /></div>
                                            </div>
                                            <div className="col-lg-12 text-lg-center"><button className="btn btn-black icon-arrow-right-white mr-40" type="submit">Send Message</button></div>
                                        </div>
                                    </div>
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