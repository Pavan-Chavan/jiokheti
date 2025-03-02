import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import SeoMeta from '../../components/SeoMeta/SeoMeta';
import { getBaharBhavMeta, getBlogListingMeta } from '../../constants/PageMetaContants';
import CategorySelector from '../../components/Bajarbhav/CategorySelector';
import { useRouter } from 'next/router';
import LoadingSpinner from '../../components/Spinner';


const CategorySelectorPage = (props) => {
	const router = useRouter()
	const showSelector = (view) => {
		setIsLoading(true);
		router.push(`/bajarbhav/${view}`)
	}
  	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => setIsLoading(true);
		const handleComplete = () => setIsLoading(false);
		const handleError = () => setIsLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleError);

		return () => {
		router.events.off('routeChangeStart', handleStart);
		router.events.off('routeChangeComplete', handleComplete);
		router.events.off('routeChangeError', handleError);
		};
	}, [router]);

	return (
		<Fragment>
			<SeoMeta meta={getBaharBhavMeta()}/>
			<Navbar hClass={"header-style-2"} tabId="bajarbhav" />
				<div className='page-container'>
					{isLoading ? <LoadingSpinner size="medium" /> : <CategorySelector onSelect={showSelector}/>}
				</div>
			<Footer />
		</Fragment>
	)
};
export default CategorySelectorPage;
