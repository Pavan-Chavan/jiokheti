import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import blogs, { fetchBlogDetails } from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import BlogSidebar from '../../components/BlogSidebar';
import { formatBlogDate } from '../../utils/blogUtils';
import HtmlPrinter from '../../components/HtmlPrinter/HtmlPrinter';
import parse from "html-react-parser";
import SeoMeta from '../../components/SeoMeta/SeoMeta';
const submitHandler = (e) => {
    e.preventDefault()
}

export async function getServerSideProps({ params }) {
    const data = await fetchBlogDetails(params.slug);
    return {
      props: {
        slug: params.slug,
        blogDetails : data.blogDetails,
        nextPost : data.nextPost,
        prevPost : data.prevPost,
        relatedPosts: data.relatedPosts
      }
    };
}

const Blog = ({blogDetails, nextPost, prevPost, relatedPosts}) => {
    const getTags = (tags) => {
        if (tags !== undefined) {
            return JSON.parse(tags);
        }
    }
    return (
        <Fragment>
            {/* <SeoMeta meta = {blogDetails}/> */}
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={blogDetails?.title} image={blogDetails.featured_image} pagesub="blog" />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-8 col-12`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link href="/">{blogDetails?.author}</Link> </li>
                                            {/* <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blogDetails?.comment}</li> */}
                                            <li><i className="fi flaticon-calendar"></i> {formatBlogDate(blogDetails.published_date)}</li>
                                        </ul>
                                    </div>
                                    <h2>{blogDetails?.title}</h2>
                                    {blogDetails?.content && parse(blogDetails?.content) || "loading"}
                                </div>

                                {/* <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/blog">Honey</Link></li>
                                            <li><Link href="/blog">Forest</Link></li>
                                            <li><Link href="/blog">Queen</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div> */}

                                {/* <div className="author-box">
                                    <div className="author-avatar">
                                        <Link href="/" target="_blank"><img src='/images/blog-details/author.jpg' alt="" /></Link>
                                    </div>
                                    <div className="author-content">
                                        <Link href="/" className="author-name">Author: Jenny Watson</Link>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="more-posts">
                                    {prevPost && <div className="previous-post">
                                        <Link href={`/blog/${prevPost.slug}`}>
                                                <span className="post-control-link">Previous Post</span>
                                                <span className="post-name">{prevPost.title}</span>
                                            
                                        </Link>
                                    </div>}
                                    {nextPost && <div className="next-post">
                                        <Link href={`/blog/${nextPost.slug}`}>
                                                <span className="post-control-link">Next Post</span>
                                                <span className="post-name">{nextPost.title}</span>
                                        </Link>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <BlogSidebar relatedPosts={relatedPosts} tags={getTags(blogDetails.tags)} />
                    </div>
                    <div className="row">
                        <div className={`col col-lg-8 col-12`}>
                            <div className="wpo-blog-content">
                                <div className="comments-area">
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Post Comments</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Website" type="url" />
                                                <input placeholder="Name" type="text" />
                                                <input placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Post Comment" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
};
export default Blog;
