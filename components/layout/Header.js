/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const countryCode = '/ae'
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="Agon" src="/assets/imgs/template/logo-white.webp" /> : <img alt="Agon" src="/assets/imgs/template/logo.webp" />}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li>
                                            <Link href={countryCode} legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className="">
                                            <Link href={`${countryCode}/about`} legacyBehavior><a>About</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Tally</a></Link>
                                            <ul className="sub-menu" style={{ minWidth: '220px'}}>
                                                <li>
                                                    <Link href={`${countryCode}/tally-prime`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />Tally Prime</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/tally-prime-single-user`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />Tally Prime Single User</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/tally-prime-multi-user`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />Tally Prime Multi User</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/tally-customization`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />Tally Customization</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/tally-prime-cloud-version`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />Tally Cloud</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>QuickBooks</a></Link>
                                            <ul className="sub-menu" style={{ minWidth: '220px' }}>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-software`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-pro`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks Pro</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-premier`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks Premier</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-enterprise`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks Enterprise</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-add-ons`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks Invoicing Software</a></Link>
                                                </li>
                                                <li>
                                                    <Link href={`${countryCode}/quickbooks-cloud-hosting`} legacyBehavior><a className="closer"><i className="fi fi-rr-calculator" />QuickBooks Cloud</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Company</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-service-1" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-service-2" legacyBehavior><a className="closer"><i className="fi fi-rr-gem" />Services - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-pricing-1" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-pricing-2" legacyBehavior><a className="closer"><i className="fi fi-rr-database" />Pricing - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-faqs-1" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-faqs-2" legacyBehavior><a className="closer"><i className="fi fi-rr-headset" />FAQs - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/page-career" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-career-detail" legacyBehavior><a className="closer"><i className="fi fi-rr-briefcase" />Career Detail</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Pages</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-contact" legacyBehavior><a><i className="fi fi-rr-paper-plane" />Contact</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-signup" legacyBehavior><a><i className="fi fi-rr-user-add" />Sign Up</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-login" legacyBehavior><a><i className="fi fi-rr-fingerprint" />Log In</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-reset" legacyBehavior><a><i className="fi fi-rr-settings" />Reset Password</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/404" legacyBehavior><a><i className="fi fi-rr-exclamation" />Error 404</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Blog</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/blog-1" legacyBehavior><a className="closer"><i className="fi fi-rr-edit" />Blog Archive - 1</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog-2" legacyBehavior><a className="closer"><i className="fi fi-rr-edit" />Blog Archive - 2</a></Link>
                                                </li>
                                                <li className="hr"><span /></li>
                                                <li>
                                                    <Link href="/blog-single" legacyBehavior><a><i className="fi fi-rr-document-signed" />Blog Single</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Shop</a>
                                            <ul className="sub-menu">
                                                <li><Link href="/page-shop-grid-1" legacyBehavior><a className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 1</a></Link></li>
                                                <li><Link href="/page-shop-grid-2" legacyBehavior><a className="closer"><i className="fi fi-rr-edit"></i>Shop Grid - 2</a></Link></li>
                                                <li><Link href="/shop/1" legacyBehavior><a className="closer"><i className="fi fi-rr-edit"></i>Product Details</a></Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="header-right">
                            <div className="block-signin">
                                <Link href="/page-signup" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right">Get Started</a></Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;