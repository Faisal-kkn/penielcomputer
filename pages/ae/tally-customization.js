/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import PriceTable from "../../components/elements/PriceTable";
import Layout from "../../components/layout/Layout";
import EnabledBusiness from "../../components/slider/EnabledBusiness";
import TestimonialSlider from "../../components/slider/Testimonial";
import Accordion from "../../components/elements/Accordion";
import Intro2 from "../../components/slider/Intro2";


function Service1() {
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
                    <div className="banner-hero banner-homepage6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 mt-50 pb-120"><span className="tag-1 bg-green-900">Tally Prime Customization</span>
                                    <h1 className="text-display-2 mt-20">Tally Customization</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-30 pr-40">We have developed customized modules in TallyPrime in order to enhance the efficieny and capabilities of Tally ERP 9 or TallyPrime.</p>
                                    <div className="mt-40">
                                        <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">300+ Ready Modules</a></Link>
                                        {/* <Link href="#" legacyBehavior><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works</a></Link> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><img src="/assets/imgs/page/homepage6/line-chart.svg" alt="Agon" /></div>
                                        <div className="block-2 shape-3"><img src="/assets/imgs/page/homepage6/card.png" alt="Agon" /></div><img className="img-banner img-responsive shape-2" alt="Agon" src="/assets/imgs/page/homepage6/banner.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className="section-box box-slider-3 d-none d-lg-flex">
                    <div className="container">
                        <div className="block-slider-bottom-banner pr-0">
                            <div className="box-swiper">
                                <div className="swiper-container swiper-group-1">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="card-grid-style-2 hover-up bg-gray-100 pt-30 pb-30">
                                                <div class="content-detail">
                                                    <ul class="">
                                                        <li>Invoice Customization</li>
                                                        <li>Packing List Customization</li>
                                                        <li>Receipt Voucher Format Customization</li>
                                                        <li>Payment Voucher Customization</li>
                                                        <li>All Format Customization</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="card-grid-style-2 hover-up bg-gray-100 pt-30 pb-30">
                                                <div class="content-detail">
                                                    <ul class="">
                                                        <li>Ledger Security Control Customization</li>
                                                        <li>Entry Level Customization</li>
                                                        <li>Password Recovery</li>
                                                        <li>Negative Stock Control</li>
                                                        <li>Tally Alerts / Reminders</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-12">
                                            <div className="card-grid-style-2 hover-up bg-gray-100 pt-30 pb-30">
                                                <div class="content-detail">
                                                    <ul class="">
                                                        <li>Cost center wise P&L</li>
                                                        <li>Remote Connectivity</li>
                                                        <li>Tally Access from Anywhere</li>
                                                        <li>Label Customization</li>
                                                        <li>Tally Barcode Printing</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="banner-hero banner-homepage8">
                        <div className="container mt-20">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h1 className="text-display-4 font-bold">How can customization be benificial to your <span className="color-green-900">business?</span></h1>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs d-flex">
                                        <div className="rounded-img shape-1"><img className="img-responsive" alt="Agon" src="/assets/imgs/page/homepage8/banner1.png" /></div>
                                        <div className="rounded-img mt-20 shape-1-2"><img className="img-responsive" alt="Agon" src="/assets/imgs/page/homepage8/banner2.png" /></div>
                                        <div className="rounded-img shape-1"><img className="img-responsive" alt="Agon" src="/assets/imgs/page/homepage8/banner3.png" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-40">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-50">
                                    <h2 className="text-heading-2 color-gray-900">Special Offer awaiting just for you.</h2>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3">Get Offer</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Salesman Module" height='300px' width='100%' />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">Salesman Module</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">With this Basic module, the user can define master for each salesman and choose the appropriate salesman at the Invoice/Credit Note voucher and will be able to generate Salesman wise Outstanding, Item Sales Report, & collection Report. The advanced module also allows to define the percentage of Commission payable based on the criteria of Gross Sales Value and generate a Commission Payable Report.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container ">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2 ">
                                    Scheduled AutoBackup
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    The customized AutoBackup feature allows the user to create user defined backup mechanism which allows the Tally Prime system to initiate automated backup folder copies defined by Date and Time stamp on the local disk or Network drive at three different scheduled times.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-2.jpg" alt="Scheduled AutoBackup" height='300px' width='100%' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Salesman Module" height='400px' width='100%' />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">Vouchers Approval</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    The Voucher approval module allows user to define the set of vouchers for which approval is mandatory to take effect on the Tally UAE Application through the Security Control feature in TallyPrime. All Vouchers configured for approval fall in a separate register and the Authorized Manager or Supervisor can approve the vouchers after verifying and then it will appear in the books of accounts. The user also has the provision to set up hierarchy for the approvals like first stage of approval by Supervisor and the secondary approval from the Manager.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Get your free trial now!</h2>
                                    <p className="text-body-excerpt color-gray-600 mt-30">
                                        Upgrade Your Tally ERP 9 with Latest Tally Prime Version
                                    </p>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3">Know More</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Check Tally Cloud Version</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container ">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">

                            <div className="col-lg-6 col-sm-12 block-we-do">
                                {/* <span className="tag-1">What We Do, What You Get</span> */}
                                <h3 className="text-heading-2 ">
                                    Import Data From Excel
                                </h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">
                                    The Import data tool module allows the user to import Master data like the Chart of Accounts, Customer master and Supplier Master with Bill wise Opening Balances, Item list with opening balances and Price from Excel spreadsheet or CSV file with a click of few buttons.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    The Advanced Module also supports Transactional data Import for all types of Voucher data.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-2.jpg" alt="Scheduled AutoBackup" height='300px' width='100%' />
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

export default Service1;