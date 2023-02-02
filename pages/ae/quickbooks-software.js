/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

function QuickbooksSoftware() {
    
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
                                    <h2 className="text-heading-3 mt-30">ACCOUNTING SOFTWARE</h2>
                                    <h1 className="text-display-2"><span className="color-green-900">INTUIT </span>  QUICKBOOKS UAE</h1>
                                    <p className="text-body-excerpt color-gray-600 mt-10">Accounting software Intuit QuickBooks Dealer UAE, Dubai, Abu Dhabi, Qatar, Sharjah and Ajman</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className="section-box ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Tally Prime" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">QuickBooks UAE</h3>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    QuickBooks UAE - Businesses run better with QuickBooks. Track expenses, manage cash flow & create invoices. QuickBooks Online gives you what you need most to run your business, all in one place. Easy To Use. Access From Anywhere. Free Trial. Save Time. Best Quickbooks Dealer in Abu Dhabi Dubai, UAE.
                                </p>
                                <div className=" text-lg-start text-start pt-30">
                                    <a className="btn btn-black icon-arrow-right-white me-2" onClick={openModal}>Buy Now</a>
                                    <a className="btn btn-black icon-arrow-right-white me-2" onClick={openModal}>Free Demo</a>
                                    <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Free Training</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row align-items-center flex-column-reverse flex-lg-row">
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">Turn heads</h3>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Create and send professional-looking invoices in seconds. Custom templates and automated reminders make getting paid even simpler.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Use QuickBooks invoicing software to create a custom invoice to represent your brand.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Turn quotes/estimates to invoices - Create quotes that include discounts, payment terms and more. When you’re ready, turn your estimate into an invoice with a click.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Tally Prime" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-lg-6 col-sm-12 block-img-we-do">
                                <img className="bdrd-16 img-responsive" src="/assets/imgs/page/homepage1/img-1.jpg" alt="Tally Prime" />
                            </div>
                            <div className="col-lg-6 col-sm-12 block-we-do">
                                <h3 className="text-heading-2">QB Report</h3>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    See how your business is doing with a range of popular reports. Or customise one to include details that matter to you.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    The profit and loss statement is an essential tool for a business owner. It details whether the business is operating at a profit or a loss for a specific period of time.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    With QuickBooks’ UAE easy to use profit and loss template, you can produce an accurate statement in a couple of clicks.
                                </p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Access up-to-date reports, including balance sheets, cash flow, and profit and loss statements.
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                {/* <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">Features</span></div> */}
                                <h2 className="text-heading-2 color-gray-900 mb-50">QuickBooks Proadviosr</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd mb-20"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">QUICKBOOKS SOFTWARE FREE DEMO</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            We are providing a free demo for Intuit QuickBooks. Our Company is based in Dubai, Abu Dhabi, Middle East, UAE
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd mb-20"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">INTUIT QUICKBOOKS SOFTWARE SUPPORT</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            Our Experts will provide highly efficient support to all your queries regarding QuickBooks. We are having branches all over in UAE.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd mb-20"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">INTUIT QUICKBOOKS SOFTWARE INSTALLATION</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            We are providing QuickBooks installation to all our customers in Dubai, Abu Dhabi, Sharjah, Al ain, Fujairah, Ajman UAE.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">QUICKBOOKS SOFTWARE ANNUAL MAINTENANCE</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Penieltech providing maintenance to our product, QuickBooks annually. These services will provide to all our customers in Dubai and the Middle East.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">QUICKBOOKS SOFTWARE TRAINING</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Our accounting experts will provide training on QuickBooks. You can easily understand and can use our product QuickBooks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">QUICKBOOKS ONLINE & ONSITE SUPPORT</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            We are providing highly efficient online & onsite support to QuickBooks. Customers all over in the Middle East can access our support at any time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-30">
                    <div className="container">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-10 mx-auto col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-2 color-gray-900">Ask for QuickBooks Free Training</h2>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3">Free Training</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h3 className="text-heading-2">QuickBooks Solution</h3>
                                <ul className="list-icons-2 ps-0  mt-30">
                                    <li>
                                        <h3 className="text-heading-5 mb-10">SCHEDULED REPORTS</h3>
                                        <p className="text-body-text color-gray-500">Capture receipt photos on your mobile device and attach them to your QuickBooks expenses. No more saving paper receipts and remembering to manually enter them later.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">SEARCH IMPROVEMENTS</h3>
                                        <p className="text-body-text color-gray-500">Locating the information that you need, quickly and efficiently, can be important if you have a large amount of information to work within your QuickBooks file. </p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">REPORT CUSTOMIZATION IMPROVEMENTS</h3>
                                        <p className="text-body-text color-gray-500">You can now view and print information about what filters have been included in the report, make multiple-record filter selections easily.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">SECURITY IMPROVEMENTS</h3>
                                        <p className="text-body-text color-gray-500">Intuit has changed what components are used by the program to improve security, as well as some other security-related issues.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">FAST AND EASY SETUP, CUSTOMIZED FOR YOU</h3>
                                        <p className="text-body-text color-gray-500">It takes only minutes to get started and everything is automatically customized for your specific type of business.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">SEE WHAT'S IMPORTANT RIGHT AWAY</h3>
                                        <p className="text-body-text color-gray-500">Elegantly designed dashboards and feeds instantly show you the health of your business and your next action steps. That’s the beauty of the new QuickBooks homepage.</p>
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

export default QuickbooksSoftware;