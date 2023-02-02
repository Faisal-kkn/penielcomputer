/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

function TallyPrimeSingleUser() {
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
                    <div className="banner-hero bg-service-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-heading-3 mt-30">Tally Prime Silver Edition 2.0</h1>
                                    <h1 className="text-display-2">Tally Prime <span className="color-green-900"> Single User</span></h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                        Single user edition For Standalone PCs - THe Best VAT Enabled ERP Software in Dubai, UAE, Tally ERP 9 Single User - Silver Edition (Tally Prime 2.0) -Tally UAE
                                    </p>
                                    <div className="mt-40 text-center">
                                        <Link href="#" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Buy Now!</a></Link>

                                        <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">Tally Prime Demo!</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-12 d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-8">
                                            <div className="banner-imgs">
                                                <div className="block-1 shape-2"><img src="/assets/imgs/page/services/2/banner2.png" alt="Agon" /></div>
                                                <div className="block-2 shape-2"><img src="/assets/imgs/page/services/2/banner1.png" alt="Agon" /></div>
                                                <div className="block-3 shape-2"><img src="/assets/imgs/page/services/2/banner3.png" alt="Agon" /></div><img src="/assets/imgs/page/services/1/banner.png" alt="Agon" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-20">
                        <div className="bdrd-58 box-gray-100">
                            
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-10">
                                        <div className="card-grid-style-2 hover-up">
                                            <div className="box-img-user mt-0">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                                                {/* <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p> */}
                                            </div>
                                            <h5 className="text-heading-5 color-gray-900 mt-30">Renewal TSS</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                Tally Software Services (TSS) is a subscription for additional features to your TallyPrime.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-10">
                                        <div className="card-grid-style-2 hover-up">
                                            <div className="box-img-user mt-0">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                                                {/* <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p> */}
                                            </div>
                                            <h5 className="text-heading-5 color-gray-900 mt-30">Customization</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                customized modules in TallyPrime in order to enhance the efficiency and capabilities of Tally UAE
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-10">
                                        <div className="card-grid-style-2 hover-up">
                                            <div className="box-img-user mt-0">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                                                {/* <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p> */}
                                            </div>
                                            <h5 className="text-heading-5 color-gray-900 mt-30">Tally Cloud</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">
                                                Tally on Cloud: Business Runs on Tally, Make Your Tally Run on Our Cloud Server - Tally Cloud Version
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
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Tally Prime" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">Single User Edition</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">Tally ERP 9 Single User - TallyPrime (Rel 2.0)</p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Where a single computer with Tally.ERP 9 is adequate for your operations, the Silver edition is what you need. A ‘user’ in this context is a computer system. This edition comes with all the features & capabilities including Tally.NET and services like Remote Access, Tally ERP9 Support. With Silver, you can manage as many companies (business entities) and personal books of accounts as you need.
                                </p>
                                {/* <p className="text-body-excerpt color-gray-600 mt-30">
                                    We are Official Tally Software Gold Partner in Dubai, UAE, Oman, Bahrain, Saudi Arabia, Ajman, Abu Dhabi and all over the Middle East.
                                </p> */}
                                <div className=" text-lg-start text-start pt-30">
                                    <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Download Tally Prime 2.0</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Benefits of an ERP to the Management</h2>
                                </div>
                                <div className="mt-20 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3 mt-10">Know More</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white mt-10">Check Tally Cloud Version</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">Features</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">Tally ERP 9<br className="d-lg-block d-none" />Silver Features</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Accounting without CODES</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            lets you define unlimited levels of classification, with regular names (no more inconvenient account codes), so Tally.ERP 9 can manage the most complex ledgers with ease.                                         </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Unified Ledgers</h4>
                                        <p className="text-body-text color-gray-600 mt-15">You can stay updated with your inventory level every day and
                                            integrates your general, sales and purchase ledgers into a single ledger, organized in groups, for easy management.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Comprehensive Accounting</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            lets you instantly obtain your Balance Sheets, Profit & Loss statements, Cash and Funds flows, Trial Balances, and other Tally Reports.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Multi-Currency Accounting</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Offers you the flexibility of multiple currencies in the same transaction and allows viewing of all Tally.ERP 9 reports in one or more currencies. Tally UAE meets the fundamental criteria set out for EMU handling.                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Receivables and Payables</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Enables you to: Dynamically allocate payments against invoices with reference to due dates. Get reports that are classified, grouped, and aged to your definitions Generate customizable reminders, for overdue.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">Payment Performance of Debtors </h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            It Helps you identify troublesome debtors and persistent late payers, thereby helping you make the right decision.                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-60">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Special Offer on Tally Prime</h2>
                                </div>
                                <div className="mt-20 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3 mt-10">Renewal</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3 mt-10">Subscription</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white mt-10">Upgradation</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center ">
                                <h2 className="text-heading-2 color-gray-900">
                                    General Features - Tally ERP9 <br className="d-lg-block d-none" />( Tally Prime )
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Whether you're a small business or an enterprise, Tally's business software caters to all your ERP or Accounting needs.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-50">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Concurrent
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Tally Software UAE allows you to expand your business beyond geographical boundaries without
                                        worrying about language barriers.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Payroll
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        lets you automate the management of your employee records including visa and
                                        employment contract management.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Job Costing
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Tally Dubai Job Costing enables you to generate profitability statements for each project executed, including financial and material
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        POS Invoicing
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        POS allows faster data entry and printing on 40 columns of continuous stationery. It also provides barcode support.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Flexible Financial
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Allows you to break away from inflexible accounting years and perform all accounting functions in Tally UAE.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" height='80px' alt="Agon" />
                                    </div>
                                    <h3 className="text-heading-4 mt-20">
                                        Unlimited Companies
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                        Tally ERP 9 UAE allows you to create and maintain up to 99,999 companies, concurrently time-periods that suit your convenience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-60">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Special Offer on Tally Prime</h2>
                                </div>
                                <div className="mt-20 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3 mt-10">Renewal</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3 mt-10">Subscription</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white mt-10">Upgradation</a></Link>
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

export default TallyPrimeSingleUser;