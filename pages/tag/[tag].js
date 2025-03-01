import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import BlogList from '../../components/BlogList';
import PageTitle from '../../components/pagetitle';
import FilterBox from '../../components/FilterBox';
import SeoMeta from '../../components/SeoMeta/SeoMeta'
import { getBlogListingMeta } from '../../constants/PageMetaContants';



const TagsBlogList = (props) => {
    const router = useRouter()
    const tag = router.query.tag;
    return (
        <Fragment>
            {/* <SeoMeta meta={getBlogListingMeta(tag)}/> */}
            <Navbar hClass={"header-style-2"} />
            <div style={{paddingTop:"100px"}}>
                <BlogList tag={tag}/>
            </div>
            <Footer />
        </Fragment>
    )
};
export default TagsBlogList;
