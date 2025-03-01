import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs, { fetchBlogsCallBack } from '../../api/blogs'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import BlogList from '../../components/BlogList';
import FilterBox from '../../components/FilterBox';
import SeoMeta from '../../components/SeoMeta/SeoMeta';
import { getBlogListingMeta } from '../../constants/PageMetaContants';

const submitHandler = (e) => {
    e.preventDefault()
}

const BlogSingle = (props) => {
	return (
		<Fragment>
			{/* <SeoMeta meta={getBlogListingMeta("blogs-landing-page")}/> */}
			<Navbar hClass={"header-style-2"} tabId="blogs"/>
			<FilterBox/>
			<BlogList/>
			<Footer />
		</Fragment>
	)
};
export default BlogSingle;
