import React from 'react'
import Link from 'next/link'
import Client from '../Client';
import BlogList from '../BlogList';
import NewInfo from '../NewInfo';
import Bajarbhav from '../Bajarbhav';
import CropInfo from '../CropInfo';
import AnimalHusbandry from '../AnimalHusbandry';
import GovSchemes from '../GovSchemes';
import Weather from '../Weather';
import OtherInfo from '../OtherInfo';
import VideoInfo from '../VideoInfo';


const Category = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <>
        <section className="category-area section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">
                                        नवीन माहिती</Link></h2>
                                </div>
                                <NewInfo />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    बाजारभाव</Link></h2>
                                </div>
                                <Bajarbhav />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    पिकांची माहिती</Link></h2>
                                </div>
                                <CropInfo />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    पशु संवर्धन</Link></h2>
                                </div>
                                <AnimalHusbandry />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    कृषी योजना</Link></h2>
                                </div>
                                <GovSchemes />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    हवामान</Link></h2>
                                </div>
                                <Weather />
                            </div>
                        </div>
                        <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/blogs">
                                    इतर</Link></h2>
                                </div>
                                <OtherInfo />
                            </div>
                        </div>
                        {/* <div className="category-wrap">
                            <div className="category-item">
                                <div className="category-content">
                                    <h2><Link onClick={ClickHandler} href="/shop">
                                    व्हिडिओ स्वरूपातील माहिती</Link></h2>
                                </div>
                                <VideoInfo />
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="col-lg-6">
                        <div className="category-img">
                            <img src='/images/category/category.jpg' alt="" />
                            <div className="ct-img"><img src='/images/category/icon-4.png' alt="" /></div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        </>
    )
}

export default Category;