import React, { Fragment } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/footer';
import SeoMeta from '../../../components/SeoMeta/SeoMeta';
import { defaultMeta } from '../../../constants/PageMetaContants';
import { useRouter } from 'next/router';
import { getMarketTypesDetails } from '../../../api/bajarbhav';
import DistrictSelector from '../../../components/Bajarbhav/DistrictSelector';
import CropSelector from '../../../components/Bajarbhav/CropSelector';
import withLoading from '../../../components/Spinner/withLoading';

const MarketType = ({ view, meta, marketTypes }) => {
  const router = useRouter();

  const showRate = (object) => {
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
      </div>
      <Footer />
    </Fragment>
  );
};

// Apply the HOC
const WrappedMarketType = withLoading(MarketType);

// Export getServerSideProps directly from the page
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
        marketTypes: null, // Fallback for API failure
        meta: defaultMeta,
      },
    };
  }
}

export default WrappedMarketType;