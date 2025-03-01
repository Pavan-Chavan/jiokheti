import React, { Component } from 'react';
import Link from 'next/link'

class Project extends Component {

    state = {
        Flower: false,
        Hill: false,
        Forest: false,
        Queen: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Hill: true,
                Flower: true,
                Queen: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                Flower: true,
                Hill: false,
                onWebApp: false,
                Queen: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                Hill: true,
                Flower: false,
                onWebApp: false,
                Queen: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                onWebApp: true,
                Hill: false,
                Flower: false,
                Queen: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                Queen: true,
                onWebApp: false,
                Hill: false,
                Flower: false,
                isOpen: true,
            });
        }


        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }



        return (

            <section id="protfolio" className="tp-projects section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="section-title mb-0">
                                <h2>Latest <span>Project</span></h2>
                            </div>
                            <div className="projects-menu">
                                <ul>
                                    <li><button data-filter="*" className="current" onClick={allElement}>All Project</button></li>
                                    <li><button data-filter=".Web-Design" onClick={webDesign}>Flower</button></li>
                                    <li><button data-filter=".Print-Design" onClick={printDesign}>Hill</button></li>
                                    <li><button data-filter=".Web-Application" onClick={webApp}>Forest</button></li>               
                                    <li><button data-filter=".Photography" onClick={Photography}>Queen</button></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                    <div className="project-inner">
                                        <img src='/images/projects/img-6.jpg' className="img img-responsive" alt="" />
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div>      
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid" 
                                    && this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-7.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                        
                                </div>
                                <div className={this.state.Forest ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-11.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-10.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-8.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.onWebApp ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-9.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Hill ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-1.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-2.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.state.Flower ? "grid active" : "grid"
                                    && this.state.Queen ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>

                                    <div className="project-inner">
                                        <img src='/images/projects/img-3.jpg' alt="" className="img img-responsive"/>
                                        <div className="hover-content">
                                            <div className="details">
                                                <h3><Link onClick={ClickHandler} href="/project-single">fresh original honey</Link></h3>
                                                <p className="cat">healthy food</p>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="view-btn">
                        <Link  onClick={ClickHandler} href="/project" className="theme-btn">View All <i className="fa fa-angle-double-right"></i></Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;