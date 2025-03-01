import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import BlogList from '../../components/BlogList';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle='Latest News' pagesub="blog" />
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
        </Fragment>
    )
};
export default BlogSingle;
