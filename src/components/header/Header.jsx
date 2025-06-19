import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import headerCss from './header.module.css';
import './active.css'

import profile from '../../images/icons/profile-icon.svg';
import cart from '../../images/icons/cart-icon.svg';
import { authContext } from '../../contexts/authentication';
import { cartContext } from '../../contexts/cartContext';

export default function Header() {

    const {cardItems} = useContext(cartContext);

    const {token} = useContext(authContext);

    const [count, setCount] = useState(0);

    useEffect(() => {

        const nav_ph = document.getElementById('nav_ph');
        const nav = document.getElementById('nav');
        const profile = document.getElementById('prof');
        const cart = document.getElementById('cart');
        const cartNote = document.getElementById('nav_note')

        const displayCardNote = ( visibility , opacity ) => {

            if(cardItems > 0){

                cartNote.style.visibility = visibility;
                cartNote.style.opacity = opacity;

            }

        }

        nav_ph.onclick = () => {

            setCount(count+1);

            if(count % 2 === 0){

                nav.classList.add(headerCss.display_nav);
                profile.classList.add(headerCss.display_icon_pro);
                cart.classList.add(headerCss.display_icon_cart);
                nav_ph.classList.add(headerCss.change);

                displayCardNote('hidden' , '0');

            }
            else{

                nav.classList.remove(headerCss.display_nav);
                profile.classList.remove(headerCss.display_icon_pro);
                cart.classList.remove(headerCss.display_icon_cart);
                nav_ph.classList.remove(headerCss.change);

                displayCardNote('visible' , '1');

            }

        }


        nav.onclick = () => {

            nav.classList.remove(headerCss.display_nav);
            profile.classList.remove(headerCss.display_icon_pro);
            cart.classList.remove(headerCss.display_icon_cart);
            nav_ph.classList.remove(headerCss.change);

            displayCardNote('visible' , '1');

            setCount(0);

        }

        profile.onclick = () => {

            nav.classList.remove(headerCss.display_nav);
            profile.classList.remove(headerCss.display_icon_pro);
            cart.classList.remove(headerCss.display_icon_cart);
            nav_ph.classList.remove(headerCss.change);

            displayCardNote('visible' , '1');

            setCount(0);

        }

        cart.onclick = () => {

            nav.classList.remove(headerCss.display_nav);
            profile.classList.remove(headerCss.display_icon_pro);
            cart.classList.remove(headerCss.display_icon_cart);
            nav_ph.classList.remove(headerCss.change);

            displayCardNote('visible' , '1');

            setCount(0);

        }

    });


    return <React.Fragment>

        <header id='header' className={headerCss.header}>

            <Link to='/' className={headerCss.logo}>

                <img loading='lazy' src={require('../../images/logo.png')} alt="shop" />

            </Link>

            <nav id='nav' className={headerCss.nav}>

                <ul>

                    <NavLink className={headerCss.nave_link} to="/"><li>Home</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/products"><li>Products</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/cate"><li>Categories</li></NavLink>
                    <NavLink className={headerCss.nave_link} to="/brands"><li>Brands</li></NavLink>

                </ul>

            </nav>

            <div id='more' className={headerCss.more}>

                <NavLink id='prof' to={ token === null ? '/auth' : 'profile'} className={headerCss.profile_icon}>

                    <img loading='lazy' className={headerCss.icon} src={profile} alt="profile" />
                    <p>Profile</p>

                </NavLink>

                <NavLink id='cart' to={'/cart'} className={headerCss.cart_icon}>

                    {cardItems > 0 ? <span className={headerCss.notification}>{cardItems <= 9 ? cardItems : '+9'}</span> : ''}

                    <img loading='lazy' className={headerCss.icon} src={cart} alt="profile" />
                    <p>Cart</p>

                </NavLink>

                <div id='nav_ph'  className={headerCss.nav_ph}>

                    <span className={headerCss.nav_span}></span>
                    <span className={headerCss.nav_span}></span>
                    <span className={headerCss.nav_span}></span>

                    {cardItems > 0 ? <span id='nav_note' className={headerCss.notification}>{cardItems <= 9 ? cardItems : '+9'}</span> : ''}

                </div>

            </div>

        </header>

    </React.Fragment>

}
