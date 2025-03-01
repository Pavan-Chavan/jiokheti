import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import BlogList from '../../../components/BlogList';
import PageTitle from '../../../components/pagetitle';
import FilterBox from '../../../components/FilterBox';
import SeoMeta from '../../../components/SeoMeta/SeoMeta';
import { getBlogListingMeta } from '../../../constants/PageMetaContants';
import { fetchCategoryMeta } from '../../../api/category';
import { isEmpty } from 'lodash';

export async function getServerSideProps({ params }) {
    const category = isEmpty(params?.category) ?  "" : params.category;
    console.log("category" + category);
	return {
		props: {
			meta : await fetchCategoryMeta(category)
		}
	};
}


const CategoryBlogList = ({meta}) => {
    const router = useRouter()
    const category = router.query.category;
    return (
        <Fragment>
            <SeoMeta meta={meta}/>
            <Navbar hClass={"header-style-2"} tabId="blogs"/>
            <FilterBox selectedCategory={category}/>
            <BlogList category={category}/>
            <Footer />
        </Fragment>
    )
};
export default CategoryBlogList;
