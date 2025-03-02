import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import SeoMeta from '../../../components/SeoMeta/SeoMeta';
import { defaultMeta } from '../../../constants/PageMetaContants';
import { useRouter } from 'next/router';
import { getMarketTypesDetails } from '../../../api/bajarbhav';
import DistrictSelector from '../../../components/Bajarbhav/DistrictSelector';
import CropSelector from '../../../components/Bajarbhav/CropSelector';
import LoadingSpinner from '../../../components/Spinner';

export async function getServerSideProps({ params }) {
	try {
	  const marketTypes = await getMarketTypesDetails();
	  return {
		props: {
		  view: params.view,
		  marketTypes,
		  meta: defaultMeta,
		},
	  };
	} catch (error) {
	  console.error('Error fetching market types:', error);
	  return {
		props: {
		  view: params.view,
		  marketTypes: null,
		  meta: defaultMeta,
		},
	  };
	}
}

const MarketType = ({ view, meta, marketTypes }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

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

  const showRate = (object) => {
    setIsLoading(true); // Trigger loader before navigation
    router.push(`/bajarbhav/${view}/${object.body.slug}`);
  };

  const getMetaForView = (key) => {
    switch (key) {
      case 'district':
        return marketTypes?.DistrictCommodityGird?.seoMeta || defaultMeta;
      case 'crop':
        return marketTypes?.CommodityGird?.seoMeta || defaultMeta;
      default:
        return defaultMeta;
    }
  };

  return (
    <Fragment>
      <SeoMeta meta={getMetaForView(view)} />
      <Navbar hClass={'header-style-2'} tabId="bajarbhav" />
      <div className="container page-container">
        {isLoading ? (
          <LoadingSpinner size="medium" />
        ) : (
          <>
            {view === 'district' && (
              <DistrictSelector
                districts={marketTypes?.DistrictCommodityGird?.DropdownOptions || []}
                onSelect={showRate}
              />
            )}
            {view === 'crop' && (
              <CropSelector
                crops={marketTypes?.CommodityGird?.DropdownOptions || []}
                onSelect={showRate}
              />
            )}
          </>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};


export default MarketType;