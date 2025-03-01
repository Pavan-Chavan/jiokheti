import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { totalPrice } from "../../utils";
import { removeFromCart, removeFromWishList } from "../../store/actions/action";
import MobileMenu from "../MobileMenu";
import { bottomNavBar } from "../../styles/style";
import { useRouter, withRouter } from "next/router";

class Header extends Component {
  state = {
    isCartShow: false,
    isWishlistShow: false,
    activeTab: this.props.tabId
  };

  handleTabClick = (tabId) => {
    this.setState({
      activeTab: tabId,
    });
    if (tabId == "home") {
      this.props.router.push(`/`)
    } else {    
      this.props.router.push(`/${tabId}`)
    }
  }

  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow,
    });
  };

  wishlistHandler = () => {
    this.setState({
      isWishlistShow: !this.state.isWishlistShow,
    });
  };
  profileHandler = () => {
    this.setState({
      isprofileShow: !this.state.isprofileShow,
    });
  };


  render() {
    const { isCartShow, isWishlistShow, isprofileShow } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    }

    const { carts } = this.props;
    const { wishs } = this.props;


    let totalwishlistprice = 0;
    if (wishs && wishs.length > 0) {
      for (let i = 1; i <= wishs.length; i++) {
        totalwishlistprice += Number(wishs[i - 1].price);
      }
    }

    return (
      <header id="header" className={`site-header ${this.props.hClass}`}>
        <nav className="navigation navbar navbar-expand-lg p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} href="/" className="navbar-brand justify-content-center">
                    <img height={"60px"} src='/images/logo.png' alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navigation navbar navbar-expand-lg p-0" style={bottomNavBar}>
          <div className="container">
            <div className="row">
            <div className="mobile-nav-bar">
              <div className="nav-container">
                <NavItem
                  id="home"
                  iconClass="home-icon"
                  label="होम"
                  isActive={this.state.activeTab === "home"}
                  onClick={() => this.handleTabClick("home")}
                />
                <NavItem
                  id="bajarbhav"
                  iconClass="rupee-icon"
                  label="बाजारभाव"
                  isActive={this.state.activeTab === "bajarbhav"}
                  onClick={() => this.handleTabClick("bajarbhav")}
                />
                <NavItem
                  id="blogs"
                  iconClass="info-icon"
                  label="शेतीची माहिती"
                  isActive={this.state.activeTab === "blogs"}
                  onClick={() => this.handleTabClick("blogs")}
                />
                <NavItem
                  id="search"
                  iconClass="search-icon"
                  label="माहिती शोधा"
                  isActive={this.state.activeTab === "search"}
                  onClick={() => this.handleTabClick("search")}
                />
              </div>
            </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
    wishs: state.wishList.w_list,
  };
};

function NavItem({ id, iconClass, label, isActive, onClick }) {
  return (
    <button className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <div className={`icon-container ${isActive ? "active" : ""}`}>
        <div className={`icon ${iconClass}`}></div>
      </div>
      <span className="nav-label">{label}</span>
      {isActive && <div className="active-indicator"></div>}
    </button>
  )
}

export default withRouter(connect(mapStateToProps, { removeFromCart, removeFromWishList })(Header));
