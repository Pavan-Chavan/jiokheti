import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/footer';
import FilterBox from '../../../../components/FilterBox';
import BlogList from '../../../../components/BlogList';
import SeoMeta from '../../../../components/SeoMeta/SeoMeta';
import { getBlogListingMeta } from '../../../../constants/PageMetaContants';
import { fetchSubCategoryMeta } from '../../../../api/subCategory';

export async function getServerSideProps({ params }) {
	return {
		props: {
			meta : await fetchSubCategoryMeta(params.subCategory)
		}
	};
}


const BlogListing = ({meta}) => {
	const router = useRouter()
	const category = router.query.category;
	const subcategory = router.query.subCategory;
	return (
		<Fragment>
			<SeoMeta meta={meta}/>
			<Navbar hClass={"header-style-2"} tabId="blogs"/>
			<FilterBox selectedCategory={category} selectedSubcategory={subcategory}/>
			<BlogList category={category} subCategory={subcategory}/>
			<Footer />
		</Fragment>
	)
};
export default BlogListing;
