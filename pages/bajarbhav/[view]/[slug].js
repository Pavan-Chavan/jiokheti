import React, { Fragment, useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import SeoMeta from '../../../components/SeoMeta/SeoMeta';
import { defaultMeta, getBlogListingMeta } from '../../../constants/PageMetaContants';
import { useRouter } from 'next/router';
import { fetchMarketTableData, getMarketTypesDetails } from '../../../api/bajarbhav';
import RateDisplay from '../../../components/Bajarbhav/RateDisplay';
import LoadingSpinner from '../../../components/Spinner';

const geCurrentPageData = (key, slug, marketTypes) => {
	switch (key) {
		case "district":
			return marketTypes?.DistrictCommodityGird?.DropdownOptions.filter((object)=>{ return object.slug == slug });
		case "crop":
			return marketTypes?.CommodityGird?.DropdownOptions.filter((object)=>{ return object.slug == slug });
		default:
			return defaultMeta;
	}
}

export async function getServerSideProps({ params }) {
	const tableData = await fetchMarketTableData(params.view, params.slug);
	const marketTypes =  await getMarketTypesDetails();
	const currentPageData =  geCurrentPageData(params.view, params.slug, marketTypes)[0] || defaultMeta;
    return {
        props: {
            view: params.view,
            slug : params.slug,
            table : tableData,
			meta : currentPageData?.seoMeta || defaultMeta
        }
    };
}

const BlogSingle = ({table, view, slug, meta}) => {
	const router = useRouter();

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

	const showSelector = (view) => {
		router.push(`/bajarbhav/${view}`)
	}

	return (
		<Fragment>
			<SeoMeta meta={meta}/>
			<Navbar hClass={"header-style-2"} tabId="bajarbhav"/>
			{isLoading ? <LoadingSpinner size="medium" /> :
			<div className='container page-container'>
				<RateDisplay table={table}/>
	  		</div>
			}	
			<Footer />
		</Fragment>
	)
};
export default BlogSingle;
