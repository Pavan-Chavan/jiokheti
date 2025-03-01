import React from "react";
import Link from "next/link";

import DefaultModal from "../Modal";

const ProductGrid = ({ products, addToCartProduct, addToWishListProduct }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="product-wrap">
      <div className="row align-items-center">
        {products.length > 0 &&
          products.map((product, pitem) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12"
              key={pitem}
            >
              <div className="product-item">
                <div className="product-img">
                  <img src={product.proImg} alt="" />
                  <ul>
                    <li>
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-html="true"
                        title="Add to Cart"
                        onClick={() => addToCartProduct(product)}
                      >
                        <i className="fi flaticon-shopping-cart"></i>
                      </button>
                    </li>
                    <li>
                      <DefaultModal />
                    </li>
                    <li>
                    <button
                          data-bs-toggle="tooltip"
                          data-bs-html="true"
                          title="Add to Cart"
                          onClick={() => addToWishListProduct(product)}
                      >
                          <i className="fi flaticon-like"></i>
                      </button>
                    </li>
                  </ul>
                  <div className="offer-thumb">
                    <span>{product.offer}</span>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <Link onClick={ClickHandler} href='/product-single/[slug]' as={`/product-single/${product.slug}`}>{product.title}</Link>
                  </h3>
                  <div className="product-btm">
                    <div className="product-price">
                      <ul>
                        <li>${product.price}</li>
                        <li>${product.delPrice}</li>
                      </ul>
                    </div>
                    <div className="product-ratting">
                      <ul>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductGrid;
