import React from 'react';
import Navbar from '../components/Navbar/index';
import Scrollbar from '../components/scrollbar';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../store/actions/action";
import api from "../api";
import Hero from '../components/hero/hero';
import Category from '../components/Category';
import Footer from '../components/footer';


const HomePage = (props) => {

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
            <Navbar hClass={"header-style-1"} tabId="home"/>
            <Hero />
            <Category />
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default connect(null, { addToCart, addToWishList })(HomePage);


