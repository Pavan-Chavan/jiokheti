import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Project from '../../components/ProjectSection';

const StoryPage = (props) => {

    return (
        <div>
            <Navbar hClass={"header-style-2"} />
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'} />
            <Project/>
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default StoryPage;


