import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import SeoMeta from '../../../components/SeoMeta/SeoMeta';
import { defaultMeta, getBlogListingMeta } from '../../../constants/PageMetaContants';
import CategorySelector from '../../../components/Bajarbhav/CategorySelector';
import { useRouter } from 'next/router';
import { getMarketTypesDetails } from '../../../api/bajarbhav';
import DistrictSelector from '../../../components/Bajarbhav/DistrictSelector';
import CropSelector from '../../../components/Bajarbhav/CropSelector';
import axios from 'axios';
import { fetchCategoryMeta } from '../../../api/category';

export async function getServerSideProps({ params }) {
	return {
		props: {
			view: params.view,
			marketTypes : await getMarketTypesDetails(),
			meta : defaultMeta
		}
	};
}


const MarketType = ({view, meta, marketTypes}) => {
	const router = useRouter()

	const showRate = (object) => {
		router.push(`/bajarbhav/${view}/${object.body.slug}`)
	}

	const getMetaForView = (key) => {
		switch (key) {
			case "district":
				return marketTypes?.DistrictCommodityGird?.seoMeta || defaultMeta;
			case "crop":
				return marketTypes?.CommodityGird?.seoMeta || defaultMeta;
			default:
				return defaultMeta;
		}
	}

	return (
		<Fragment>
			<SeoMeta meta={getMetaForView(view)}/>
			<Navbar hClass={"header-style-2"} tabId="bajarbhav"/>
				<div className='container page-container'>
					{view === "district" && <DistrictSelector districts={marketTypes?.DistrictCommodityGird?.DropdownOptions || []} onSelect={showRate} />}
					{view === "crop" && <CropSelector crops={marketTypes?.CommodityGird?.DropdownOptions || []} onSelect={showRate} />}
				</div>
			<Footer />
		</Fragment>
	)
};
export default MarketType;
