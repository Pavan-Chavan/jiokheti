import React from 'react'
import Link from 'next/link'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="tp-site-footer">
            <div className="tp-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link onClick={ClickHandler} href="/"><img src='/images/logo.png' alt="ft-logo" /></Link>
                                </div>
                                <p>जिओ खेती <br>
                                </br>शेतीविषयी माहिती, शेतमालाचे बाजारभाव, हवामान अंदाज, पशुसंवर्धन व बरेच काही.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12"style={{wordWrap: "break-word"}}>
                            <div className="widget tp-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-pin"></i>छत्रपती संभाजीनगर -431001
                                        </li>
                                        <li><i className="fi flaticon-call"></i>+91 7588986874</li>
                                        <li><i className="fi flaticon-envelope"></i>krushimaharashtra.info@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} href="/terms-and-conditions">Terms and Conditions</Link></li>
                                    <li><Link onClick={ClickHandler} href="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>Newsletter</h3>
                                </div>
                                <p>You will be notified when somthing new will be appear.</p>
                                <form>
                                    <div className="input-1">
                                        <input type="email" className="form-control" placeholder="Email Address *" required />
                                    </div>
                                    <div className="submit clearfix">
                                        <button type="submit"><i className="ti-email"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2025 <Link onClick={ClickHandler} href="/">Krushi Maharashtra</Link>.
                                All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-shape1">
                <i className="fi flaticon-honeycomb"></i>
            </div>
            <div className="footer-shape2">
                <i className="fi flaticon-honey-1"></i>
            </div>
        </footer>
    )
}

export default Footer;