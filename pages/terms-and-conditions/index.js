import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import TermsCondition from '../../components/TermsCondition';

const GalleryPage = (props) => {

    return (
        <div>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Terms and Conditions'} pagesub={'Terms and Conditions'}/> 
            <TermsCondition/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default GalleryPage;


