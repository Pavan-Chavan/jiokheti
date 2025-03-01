import React from 'react';
import Navbar from '../../components/Navbar/index';
import Scrollbar from '../../components/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Hero2 from '../../components/hero2';
import Category2 from '../../components/Category2';
import About from '../../components/about';
import Product from '../../components/Product/Product';
import Footer from '../../components/footer';
import OfferSection from '../../components/OfferSection';
import FlashSale from '../../components/FlashSale';
import Project from '../../components/ProjectSection';
import Service from '../../components/Service';
import Testimonial from '../../components/Testimonial';
import Client from "../../components/Client";
import BlogSection from '../../components/BlogSection';


const HomePage2 = (props) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        props.addToCart(product, qty);
    };

    const addToWishListProduct = (product, qty = 1) => {
        props.addToWishList(product, qty);
    };


    const products = productsArray


    return (
        <div>
            <Navbar hClass={"header-style-2"} />
            <Hero2 />
            <Category2 />
            <About/>
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <OfferSection />
            <FlashSale
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <Project/>
            <Service />
            <Testimonial />
            <Client />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(HomePage2);


