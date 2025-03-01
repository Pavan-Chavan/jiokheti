import React from "react";
import Slider from "react-slick";
import Link from 'next/link'


const Hero2 = () => {

    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="hero hero-style-2">
            <div className="hero-slider">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpg'})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-5 slide-caption">
                                        <div className="slide-title">
                                            <h2><span>Fresh</span> Organic <span>Honey</span></h2>
                                        </div>
                                        <div className="btns">
                                            <Link href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-5 slide-caption">
                                        <div className="slide-title">
                                            <h2><span>Fresh</span> Organic <span>Honey</span></h2>
                                        </div>
                                        <div className="btns">
                                            <Link href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-4.jpg'})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col col-lg-5 slide-caption">
                                        <div className="slide-title">
                                            <h2><span>Fresh</span> Organic <span>Honey</span></h2>
                                        </div>
                                        <div className="btns">
                                            <Link href="/shop" className="btn theme-btn">Shop Now <i className="fa fa-angle-double-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default Hero2;