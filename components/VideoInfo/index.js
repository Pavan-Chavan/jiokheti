import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../ModalVideo'
import { formatBlogDate, getImagePath } from '../../utils/blogUtils';
import { useInView } from 'react-intersection-observer';
import { isEmpty } from 'lodash';
import { fetchBlogsCallBack } from '../../api/blogs';
import { blogCardBody, blogCardStle, titleStyle } from '../../styles/style';

const VideoInfo = ({category = "", subCategory = "", tag = ""}) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [blogs, setBlogs] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const { ref, inView } = useInView()

    const fetchBlogs = useCallback(() => {
        fetchBlogsCallBack(setHasMore, setBlogs, setPage, page, category, subCategory, hasMore, tag);
    }, [page, hasMore]);

    useEffect(() => {
        if (inView) {
            fetchBlogs();
        }
    }, [inView, fetchBlogs, category, subCategory, tag])

    return (
		<section className="wpo-blog-pg-section" style={{paddingTop:"20px"}}>
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-12 col-12`}>
                        <div className="row wpo-blog-content">
                            {!isEmpty(blogs) && blogs.map((blog, bitem) => (
                                <div className={`post col-lg-6 col-6`} key={bitem}>
                                    <div style={blogCardStle}>
                                        <div className="entry-media video-holder">
                                            <img src={getImagePath(blog.featured_image)} alt="" />
                                            {/* <VideoModal /> */}
                                        </div>
                                        <div style={blogCardBody}>
                                            <div className="entry-meta">
                                                <ul>
                                                    {/* <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href='/blog-single/[slug]' as={`/blog-single/${blog.author}`}>{blog.author}</Link></li> */}
                                                    <li><i className="fi flaticon-calendar"></i>{formatBlogDate(blog.published_date)}</li>
                                                </ul>
                                            </div>
                                            <div className="entry-details">
                                                <h3 style={titleStyle}><Link onClick={ClickHandler} href='/blog/[slug]' as={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
                                                <Link onClick={ClickHandler} href='/blog/[slug]' as={`/blog/${blog.slug}`} className="read-more">वाचा संपूर्ण माहिती....</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
							{hasMore && <div ref={ref} style={{ height: "10px" }}></div>}
                            {/* <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Previous" className="active">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blog-left-sidebar">1</Link></li>
                                    <li><Link href="/blog-left-sidebar">2</Link></li>
                                    <li><Link href="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link href="/blog-left-sidebar" aria-label="Next" className="active">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                    <Link href="/" className="btn theme-btn ">
                    संपूर्ण माहिती <i className="fa fa-angle-right"></i></Link>
                </div>
            </div>
        </section>
    )

}

export default VideoInfo;
