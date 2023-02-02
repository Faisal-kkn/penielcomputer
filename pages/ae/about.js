/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import TeamSlider from "../../components/slider/Team";

function About() {
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
                    <div className="banner-hero bg-about-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2 color-gray-900">Our Story</h1>
                                    <p className="text-body-excerpt color-gray-600 mt-40">
                                        Peniel Computers is a dynamic and progressive company with a clear objective - to provide our clients with innovative and cost-effective business solutions through the efficient deployment and integration of information technology. It is a team with the capacity to deliver a comprehensive service tailored to your exact requirements and provide the IT capabilities you need while leaving you free to concentrate on your core business activities. As your technology partner, IT Solutions will work with you to create competitive advantage from the rapidly emerging technologies such as online solutions, always ensuring a versatile and reliable platform for your information systems that will adapt to changing business priorities.
                                        As a key technology provider, we ensure you that we can offer expert independent advice on the most advantageous networking, hardware and software solutions for your organization. Our service is 2nd to none and we prioritize the fulfillment of our clients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={openModal}>  </a>
                                    <img className="img-responsive bdrd-16" src="/assets/imgs/page/about/3/img.png" alt="Agon" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section-box mb-mobile mb-150">
                   
                    <div className="container mt-60 mb-70">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Our Vision</h4>
                                    <p className="text-body-excerpt color-gray-600">
                                        Our vision is to be the foremost valuable supporter of small and medium sized firms by making freedom and excellent solutions for them to succeed.
                                        We provide small and medium sized businesses with a range of easy-to-use, however powerful Business Management software system and services � from accounting and payroll, to enterprise resource planning (ERP), Customer Relationship Management (CRM) and other software.
                                    </p>
                                    <div className="box-image-inner bg-color-1 d-none d-lg-block"><img src="/assets/imgs/page/homepage1/Vision.png" alt="Agon" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-6 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">Our Mission</h4>
                                    <p className="text-body-excerpt color-gray-600">
                                        Our mission is to deliver consistent and positive results to our clients. Through our dedication, we aim to satisfy our purchasers so that they keep returning to us.
                                        We've combined purpose and passion to take our clients prior to the competition. we grow exponentially whenever we get a satisfied client. Day by day we�re growing with the integrity and honesty we maintain whereas working on various projects.
                                    </p>
                                    <div className="box-image-inner bg-color-2  d-none d-lg-block"><img src="/assets/imgs/page/homepage1/Mission.png" alt="Agon" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box why-peniel">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Why Peniel Computers?</h2>
                                <p className="text-body-excerpt color-gray-600 mt-20">
                                    We differentiate ourselves from our competition through the support service we provide to our customers. We make sure that our customers get the foremost out of their management software to fulfil their needs.
                                    As a trusted IT partner, we continuously look to respond in time to the critical support calls from our customers to help them run their businesses effectively always.
                                    Our emphasis is also on proper implementation of management software solutions with adequate training to the purchasers to provide to give our customers maximum control on the solution enforced.
                                </p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="popular-search">
                            <h2 className="text-heading-2 color-gray-900 mb-10 text-center">Accounting Softwares</h2>
                            <ul className="list-search-popular text-center">
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> Tally ERP 9</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> Sage 50 US</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> Sage 50 CA</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> Sage Peachtree</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> Intuit QuickBooks</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> ACT</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> CRM Software</a></Link>
                                </li>
                                <li>
                                    <Link href="#" legacyBehavior><a className="btn btn-border"> HR & Payroll</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Team</h3>
                                <p className="text-body-lead-large color-gray-600">Decades of experience in design and development</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TeamSlider />
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
                                        src="https://www.youtube.com/embed/SfkKLrkoh50"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
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

export default About;