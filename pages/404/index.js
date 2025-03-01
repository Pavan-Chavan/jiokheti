import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Error from '../../components/404'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'

const ErrrorPage = (props) => {

    return (
        <div>
            <Navbar hClass={"header-style-2"}/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default ErrrorPage;


