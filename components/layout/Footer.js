/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <div className="footer-top">
                        {/* <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/" legacyBehavior>
                                    <a>
                                        <img alt="Agon" src="/assets/imgs/template/logo.svg" />
                                        <Image src="/assets/imgs/template/logo.webp" alt="Agon" width={162} height={42}/>
                                    </a>
                                </Link>
                            </div>
                            <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Stay up to date</span>
                                <Link href="/page-signup" legacyBehavior>
                                    <a className="btn btn-square">Create an Account</a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4 width-25 mb-30">
                            <Link href="/" legacyBehavior>
                                <a>
                                    {/* <img alt="Agon" src="/assets/imgs/template/logo.svg" /> */}
                                    <Image src="/assets/imgs/template/logo.webp" alt="Agon" width={162} height={42} />
                                </a>
                            </Link>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">
                                Accounting Software & IT Solutions. Try All New Elate Products - Real Estate Property Management Software, POS System, ERPNext, Odoo Implementation, Custom Invoices in QuickBooks.
                            </div>
                        </div>
                        <div className="col-lg-4 width-20 mb-30">
                            <h4 className="text-heading-5">Useful</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>CRM Software</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Tally</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career" legacyBehavior>
                                        <a>Quickbooks</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Our Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 width-20 mb-30">
                            <h4 className="text-heading-5">Services</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2" legacyBehavior>
                                        <a>Elate ERP</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1" legacyBehavior>
                                        <a>Elate CRM</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>HR & Payroll</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Cheque printing</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">Al Mamzar Dubai, United Arab Emirates</div>
                            <div className="mt-20 text-body-text color-gray-600">
                                <Link href="tel:+96890139256" legacyBehavior>
                                    <a>+968 901 392 56</a>
                                </Link>
                            </div>
                            <div className="text-body-text color-gray-600">
                                <Link href="mailto:info@penielcomputer.com" legacyBehavior>
                                    <a>info@penielcomputer.com</a>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="col-lg-4 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1" legacyBehavior>
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Editor Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Community</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Support Center</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="col-lg-4 width-20">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-2" legacyBehavior>
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Reviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Stories</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">



                                <span className="color-gray-400 text-body-lead"> Peniel Computer © {(new Date().getFullYear())} copyright all right reserved</span>

                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;