import React, { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Product from './product'
import api from "../../api";
import { useRouter } from 'next/router'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import ProductTabs from './alltab';
import Scrollbar from '../../components/scrollbar';



const ProductSinglePage = (props) => {
    const router = useRouter()

    const productsArray = api();
    const Allproduct = productsArray

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };


    const { addToCart } = props;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(Allproduct.filter(Allproduct => Allproduct.slug === router.query.slug))
    }, []);

    const item = product[0];



    return (
        <Fragment>
            <Navbar hClass={'header-style-2'}/>
            <PageTitle pageTitle={item?.title} pagesub={item?.title}/>
            <section className="product-single-section section-padding">
                <div className="container">
                    {item ? <Product
                        item={item}
                        addToCart={addToCartProduct}
                    /> : null}
                    <ProductTabs/>
                </div>
            </section>
            <Scrollbar/>
            <Footer />
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        products: state.data.products,
    }
};

export default connect(mapStateToProps, { addToCart })(ProductSinglePage);
