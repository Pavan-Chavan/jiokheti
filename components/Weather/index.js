import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { formatBlogDate, getImagePath } from '../../utils/blogUtils';
import { useInView } from 'react-intersection-observer';
import { isEmpty } from 'lodash';
import { fetchBlogsCallBack } from '../../api/blogs';
import { blogCardBody, blogCardStle, titleStyle } from '../../styles/style';

// Custom Arrow Components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px", background: "#fff", borderRadius: "50%", padding: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1, background: "#fff", borderRadius: "50%", padding: "5px", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
            onClick={onClick}
        />
    );
};

const Weather = ({ category = "weather-forecast", subCategory = "", tag = "" }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const { ref, inView } = useInView();

    const fetchBlogs = useCallback(() => {
        fetchBlogsCallBack(setHasMore, setBlogs, setPage, page, category, subCategory, hasMore, tag);
    }, [page, hasMore]);

    useEffect(() => {
        if (inView) {
            fetchBlogs();
        }
    }, [inView, fetchBlogs, category, subCategory, tag]);

    const sliderSettings = {
        dots: true,
        infinite: hasMore,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="wpo-blog-pg-section" style={{ paddingTop: "20px", backgroundColor: "#f9f9f9" }}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-12 col-12`}>
                        <div className="wpo-blog-content" style={{ margin: "0 auto" }}>
                            {!isEmpty(blogs) && (
                                <Slider {...sliderSettings}>
                                    {blogs.map((blog, bitem) => (
                                        <div key={bitem}>
                                            <div style={{
                                                ...blogCardStle,
                                                backgroundColor: "#fff",
                                                borderRadius: "10px",
                                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                                overflow: "hidden",
                                                transition: "transform 0.3s ease",
                                                ':hover': {
                                                    transform: "translateY(-5px)"
                                                },
                                                paddingRight: "5px"
                                            }}>
                                                <div className="entry-media video-holder">
                                                    <img 
                                                        src={getImagePath(blog.featured_image)} 
                                                        alt="" 
                                                        style={{ 
                                                            width: "100%", 
                                                            height: "100%", 
                                                            objectFit: "cover",
                                                            transition: "transform 0.3s ease"
                                                        }} 
                                                    />
                                                </div>
                                                <div style={{
                                                    ...blogCardBody,
                                                    padding: "20px",
                                                    backgroundColor: "#fff"
                                                }}>
                                                    <div className="entry-meta" style={{ marginBottom: "10px" }}>
                                                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center" }}>
                                                            <li style={{ color: "#666", fontSize: "14px" }}>
                                                                <i className="fi flaticon-calendar" style={{ marginRight: "5px", color: "#888" }}></i>
                                                                {formatBlogDate(blog.published_date)}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="entry-details">
                                                        <h3 style={{
                                                            ...titleStyle,
                                                            margin: "0 0 15px",
                                                            fontSize: "16px",
                                                            fontWeight: "600",
                                                            lineHeight: "1.4",
                                                            color: "#333"
                                                        }}>
                                                            <Link 
                                                                onClick={ClickHandler} 
                                                                href={`/blog/weather-forecast/${blog.slug}`} 
                                                                as={`/blog/weather-forecast/${blog.slug}`} 
                                                                style={{ textDecoration: "none", color: "inherit" }}
                                                            >
                                                                {blog.title}
                                                            </Link>
                                                        </h3>
                                                        <Link 
                                                            onClick={ClickHandler} 
                                                            href={`/blog/weather-forecast/${blog.slug}`} 
                                                            as={`/blog/weather-forecast/${blog.slug}`} 
                                                            className="read-more"
                                                            style={{
                                                                display: "inline-block",
                                                                color: "#7a7a7a",
                                                                textDecoration: "none",
                                                                fontSize: "14px",
                                                                fontWeight: "500",
                                                                transition: "color 0.3s ease",
                                                                ':hover': {
                                                                    color: "#0056b3"
                                                                }
                                                            }}
                                                        >
                                                            वाचा संपूर्ण माहिती....
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            )}
                            {hasMore && <div ref={ref} style={{ height: "10px" }}></div>}
                        </div>
                    </div>
                    <Link 
                        href="/blogs/weather-forecast" 
                        className="btn theme-btn"
                        style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            borderRadius: "5px",
                            textDecoration: "none",
                            marginTop: "20px",
                            transition: "background-color 0.3s ease"
                        }}
                    >
                        संपूर्ण माहिती <i className="fa fa-angle-right" style={{ marginLeft: "5px" }}></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Weather;