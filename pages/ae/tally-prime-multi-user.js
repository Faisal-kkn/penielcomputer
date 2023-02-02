/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

function TallyPrimeMultiUser() {
    
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
                                    <h1 className="text-heading-3 mt-30">BEST ERP SOFTWARE IN DUBAI, UAE</h1>
                                    <h1 className="text-display-2"><span className="color-green-900"> MULTI - USER</span> TALLY GOLD</h1>
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
                                <h3 className="text-heading-2">Tally ERP 9 Multi User</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">Best ERP Software for multi user - Tally UAE</p>
                                <p className="text-body-excerpt color-gray-600 mt-10">
                                    Where more than one computer needs to have access to Tally.ERP 9, a Gold edition is what you need. Any number of users can simultaneously have read and write access. Note, that there can be some degradation of performance with a large number of users and we have found that the Tally Gold edition is usable with a maximum of ten users. (Tally Series B will deliver the Diamond & Platinum editions with support for hundreds & thousands of users). Tally ERP 9 Cloud Version for Dubai and UAE is Available.
                                </p>
                                <div className=" text-lg-start text-start pt-30">
                                    <a className="btn btn-black icon-arrow-right-white me-2" onClick={openModal}>Subscription</a>
                                    <a className="btn btn-black icon-arrow-right-white me-2" onClick={openModal}>Buy Now</a>
                                    <a className="btn btn-black icon-arrow-right-white" onClick={openModal}>Download</a>
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
                                    <h2 className="text-heading-2 color-gray-900">Tally ERP 9 Gold Partner in Dubai, UAE - Tally Prime Gold Partner</h2>
                                </div>
                                <div className="mt-30 text-center">
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white me-3">Get Tally Multi User Free Demo</a></Link>
                                    <Link href="#" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Tally Cloud</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                {/* <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">Features</span></div> */}
                                <h2 className="text-heading-2 color-gray-900 mb-50">Tally ERP 9 <br className="d-lg-block d-none" />Software Partner</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY ERP 9 FREE DEMO</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            We are providing a free Demo for Tally ERP 9 Multi-User. Our Company is based in Dubai, Abu Dhabi, Middle East, UAE
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY ERP 9 SUPPORT</h4>
                                        <p className="text-body-text color-gray-600 mt-15">
                                            Our Experts will provide highly efficient support to all your queries regarding Tally ERP 9.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY UAE INSTALLATION</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            We are providing Tally ERP 9 installation Services to all our customers in Dubai, Abu Dhabi, Sharjah, Al ain, Fujairah, Ajman UAE.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-product.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY ERP ANNUAL MAINTENANCE</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Penieltech providing maintenance to our product, Tally ERP 9 annually. These services will provide to all our customers in Dubai and the Middle East.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY ERP 9 TRAINING IN DUBAI, UAE</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            Our accounting experts will provide Free training on Tally ERP 9. You can easily understand and can use our product Tally ERP Gold.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-build.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-6">TALLY ERP 9 RENEWAL & UPGRADATION</h4>
                                        <p className="text-body-text color-gray-500 mt-15">
                                            We are providing Tally ERP 9 Software Renewal, Subscription and Upgradation Services with TALLY SOFTWARE.
                                        </p>
                                    </div>
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
                                <h3 className="text-heading-2">Upgrade Tally Easily</h3>
                                <p className="text-body-excerpt color-gray-600 mt-30">Get Tally ERP Upgradation Price in Bahrain, Dubai, UAE, Abu Dhabi</p>
                                <div className="content-detail mt-10">
                                    <ul className="">
                                        <li>Tally 9 / Tally.ERP 9 Silver to Tally.ERP 9 Gold: 1260 USD / 4680 AED <br />
                                            ( Upgrade Tally Single User to Tally Multi User )</li>
                                        <li>Tally 7.2 Gold to Tally.ERP 9 Gold: 756 USD / 2808 AED <br />
                                            ( Upgrade From Tally Gold 7.2 to Tally ERP 9 Gold )</li>
                                        <li>Tally 7.2 Silver to Tally.ERP 9 Silver: 252 USD / 936 AED <br />
                                            ( Upgrade From Tally Silver 7.2 to Tally ERP 9 Silver )</li>
                                        <li>Tally 9 Gold to Tally.ERP 9 Gold: 378 USD / 1404 AED <br />
                                            ( Upgrade From Tally 9 Gold to Tally ERP 9 Gold )</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h3 className="text-heading-2">Tally ERP 9 Gold Features</h3>
                                <ul className="list-icons-2 ps-0  mt-30">
                                    <li>
                                        <h3 className="text-heading-5 mb-10">POS INVOICING</h3>
                                        <p className="text-body-text color-gray-500">POS allows faster data entry and printing on 40 column continuous stationery. It also Tally Dubai provides barcode support.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">FLEXIBLE FINANCIAL PERIODS</h3>
                                        <p className="text-body-text color-gray-500">Allows you to break away from inflexible accounting years and perform all accounting functions in Tally for time-periods that suit your convenience.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">UNLIMITED COMPANIES</h3>
                                        <p className="text-body-text color-gray-500">Allows you to create and maintain up to 99,999 companies in Tally.ERP 9 UAE, concurrently</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">DATA SYNCHRONISATION</h3>
                                        <p className="text-body-text color-gray-500">Helps you synchronize and update data across multiple locations. This enables fast and easy exchange of business information, between offices and branches, across various geographies.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">CONCURRENT MULTI-LINGUAL CAPABILITY</h3>
                                        <p className="text-body-text color-gray-500">Allows you to expand your business beyond geographical boundaries without worrying about language barriers. You can maintain your accounts in one language, view reports in another language and sends invoices to your customers in yet another language, all at the press of a button.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">PAYROLL</h3>
                                        <p className="text-body-text color-gray-500">Tally Prime payroll lets you automate the management of your employee records including visa and employment contract management. This feature also offers automatic calculation of salaries and payslip generation.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="container mt-30">
                        <div className="bdrd-58">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900">
                                        Customized Modules
                                    </h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">
                                        We have developed customized modules in TallyPrime in order to enhance the efficiency and capabilities of TallyPrime.
                                    </p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>

                            <div className="container mt-40">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">SALESMAN MODULE</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                With this Basic module, the user can define the master for each salesman and choose the appropriate salesman at the Invoice/Credit Note voucher.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">AUTO BACKUP</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                The customized AutoBackup feature allows the user to create user defined backup mechanism which allows the TallyPrime system to initiate automated
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">BARCODE PRINTING</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                The Barcode Printing solution allows the user to design the Barcode labels in A4 paper or continuous label rolls and print the barcodes at the Item
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">VOUCHER TEMPLATE</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                Voucher templates can be customized as per the requirements of the customer be it on a Letterhead or Plain paper with Logo embedded. We also undertake customization on Preprinted Continuous Stationery for Dot Matrix.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">IMPORT DATA</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                The Import data tool module allows the user to import Master data like the Chart of Accounts, Customer master and Supplier Master with Bill wise Opening Balances, Item list with opening balances.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                                        <div className="card-grid-style-2 hover-up bg-gray-100">
                                            <h5 className="text-heading-5 color-gray-900">VOUCHER APPROVALS</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment h-auto">
                                                The Voucher approval module allows user to define the set of vouchers for which approval is mandatory to take effect on the TallyPrime Application through the Security Control feature in TallyPrime.
                                            </p>
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

export default TallyPrimeMultiUser;