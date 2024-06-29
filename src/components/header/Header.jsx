import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import headerCss from './header.module.css';
import './active.css'

import profile from '../../images/SVG-Icons/person-icon.svg';
import cart from '../../images/SVG-Icons/cart-icon.svg';

export default function Header() {

    function displayNav(){

        const inputCheck = document.getElementById('nav_input').checked;
        const nav = document.getElementById('nav');
        const profile = document.getElementById('prof');
        const cart = document.getElementById('cart');

        if(inputCheck === true){

            nav.classList.add('display_nav');
            profile.classList.add('display_icon_pro');
            cart.classList.add('display_icon_cart');

        }
        else{

            nav.classList.remove('display_nav');
            profile.classList.remove('display_icon_pro');
            cart.classList.remove('display_icon_cart');

        }

    }

    return <React.Fragment>

        <header id='header' className={headerCss.header}>

            <Link to='/' className={headerCss.logo}>

                <img src={require('../../images/logo.png')} alt="shop" />

            </Link>

            <nav id='nav' className={headerCss.nav}>

                <ul>

                    <NavLink className={headerCss.nave_link} to="/"><li>Home</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/products"><li>Products</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/cate"><li>Categories</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/brands"><li>Brands</li></NavLink>

                </ul>

            </nav>

            <div className={headerCss.more}>

                <Link id='prof' to='register' className={headerCss.profile_icon + ' ' + headerCss.icon_cont}>

                    <img className={headerCss.icon} src={profile} alt="profile" />
                    <p>Profile</p>

                </Link>

                <Link id='cart' to='cart' className={headerCss.cart_icon}>

                    <img className={headerCss.icon + ' ' + headerCss.icon_cont} src={cart} alt="profile" />
                    <p>Cart</p>

                </Link>

                <div onClick={displayNav} className={headerCss.nav_ph}>

                    <label className={headerCss.hamburger}>

                        <input id='nav_input' type="checkbox" />

                        <svg viewBox="0 0 32 32"
                        >
                            <path 

                                className={headerCss.line + ' ' + headerCss.line_top_bottom} 
                                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 
                                6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"

                            ></path>

                            <path className={headerCss.line} d="M7 16 27 16"></path>

                        </svg>

                    </label>

                </div>

            </div>

        </header>

    </React.Fragment>

}
