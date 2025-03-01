import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Privacy from '../../components/Privacy';

const GalleryPage = (props) => {

    return (
        <div>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Privacy Policy'} pagesub={'Privacy Policy'}/> 
            <Privacy/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default GalleryPage;


