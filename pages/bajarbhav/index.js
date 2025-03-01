import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import SeoMeta from '../../components/SeoMeta/SeoMeta';
import { getBaharBhavMeta, getBlogListingMeta } from '../../constants/PageMetaContants';
import CategorySelector from '../../components/Bajarbhav/CategorySelector';
import { useRouter } from 'next/router';


const CategorySelectorPage = (props) => {
	const router = useRouter()
	const showSelector = (view) => {
		router.push(`/bajarbhav/${view}`)
	}

	return (
		<Fragment>
			<SeoMeta meta={getBaharBhavMeta()}/>
			<Navbar hClass={"header-style-2"} tabId="bajarbhav" />
				<div className='page-container'>
					<CategorySelector onSelect={showSelector}/>
				</div>
			<Footer />
		</Fragment>
	)
};
export default CategorySelectorPage;
