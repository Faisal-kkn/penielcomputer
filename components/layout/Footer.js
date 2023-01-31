/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer ">
                <div className="container">
                    <div className="footer-top">
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-30">
                            <Link href="/" legacyBehavior>
                                <a>
                                    <Image src="/assets/imgs/template/logo.webp" alt="Agon" width={162} height={42} />
                                </a>
                            </Link>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">
                                Accounting Software & IT Solutions. Try All New Elate Products - Real Estate Property Management Software, POS System, ERPNext, Odoo Implementation, Custom Invoices in QuickBooks.
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-12 mb-30">
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
                        <div className="col-lg-3 col-md-4 col-sm-12 mb-30">
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
                        <div className="col-lg-2 col-md-4 col-sm-12 mb-30">
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
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead"> Peniel Computer © {(new Date().getFullYear())} copyright all right reserved</span>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://www.facebook.com/PenielComputer" legacyBehavior>
                                        <a className="icon-socials icon-facebook" target='_blank'></a>
                                    </Link>
                                    <Link href="https://twitter.com/penielcomputer" legacyBehavior>
                                        <a className="icon-socials icon-twitter" target='_blank'></a>
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