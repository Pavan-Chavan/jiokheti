import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import blogs, { fetchTrendingBlogs } from '../../api/blogs'
import { formatBlogDate, getImagePath } from '../../utils/blogUtils';
import { toast } from 'react-toastify';
import axios from 'axios';

const BlogSidebar = ({tags = [], relatedPosts=[]}) => {

    const [trendingPosts, setTrendingPosts] = useState([]);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    useEffect(()=>{
        fetchTrendingBlogs(setTrendingPosts, "trending")
    },[]);

    const renderTags = (tags = []) => {
        return (
            tags.map((tag)=>(
                <li><Link onClick={ClickHandler} href={`/tag/${tag.slug}`}>{tag?.tag_name}</Link></li>
            ))
        )
    }
    return (
        <div className={`col col-lg-4 col-12 pt-3`}>
            <div className="blog-sidebar mt-1">
                {/* <div className="widget search-widget pt-5">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}
                {relatedPosts.length !== 0 && <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {relatedPosts.map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={getImagePath(blog.featured_image)} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={`/blog/${blog.slug}`} as={`/blog/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{formatBlogDate(blog.published_date)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
                {trendingPosts.length !== 0 && <div className="widget recent-post-widget">
                    <h3>Trending Posts</h3>
                    <div className="posts">
                        {trendingPosts.map((blog, Bitem) => (
                            <div className="post pb-3" key={Bitem}>
                                <div className="img-holder">
                                    <img src={getImagePath(blog.featured_image)} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} href={`/blog/${blog.slug}`} as={`/blog/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{formatBlogDate(blog.published_date)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}
                {tags.length !== 0 && <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        {renderTags(tags)}
                    </ul>
                </div>}
            </div>
        </div>
    )

}

export default BlogSidebar;
