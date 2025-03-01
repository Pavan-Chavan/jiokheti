import React from 'react'
import Link from 'next/link'


const Category2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={`category-area-s2 section-padding ${props.StyleClass}`}>
            <div className="container">
                <div className="category-wrap">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-1.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Queen Bee Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-2.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Sunflower Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-12">
                            <div className="category-item">
                                <div className="category-icon">
                                    <img src='/images/category/icon-3.png' alt="" />
                                </div>
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">Manuka Honey</Link></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing industry has been the industry's
                                        standard eos fugit industry's standard consectetur ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category2;