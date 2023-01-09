import React, { Component } from "react";

import './styles.scss'
import FashionLikeLogo from '../../assets/img/logo.jpg'
class NavBar extends Component {
  // constructor(props) {
  // }

  render() {
    return (
      <header>
        <nav className="nav-bar">
            <div className="logo-container">
                <img src={FashionLikeLogo} alt="FashionLikeLogo" className="fashion-like-logo" />
            </div>
            <div className="menu-container">
                <div className="menu-option">Sign in</div>
                <div className="menu-option">Sign up</div>
            </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;