import React from 'react';

import footerCss from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <React.Fragment>

        <div className={footerCss.footer}>

            <div className={footerCss.footer_cont}>

                <div className={footerCss.first_section}>

                    <Link to='/'><img loading='lazy' src={require('../../images/logo-dark.png')} alt="logo" /></Link>

                    <p>Buy with peace of mind and do not worry about delivery</p>

                </div>

                <div className={footerCss.seconde_section}>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>Products</div>

                        <Link to='/' className={footerCss.p}>New Season</Link>
                        <Link to='/' className={footerCss.p}>Most Searched</Link>
                        <Link to='/' className={footerCss.p}>Most Selled</Link>

                    </div>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>About</div>

                        <Link to='/' className={footerCss.p}>Help</Link>
                        <Link to='/' className={footerCss.p}>Shipping</Link>
                        <Link to='/' className={footerCss.p}>Affiliate</Link>

                    </div>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>Info</div>

                        <Link to='/' className={footerCss.p}>Contact us</Link>
                        <Link to='/' className={footerCss.p}>Privacy Policies</Link>
                        <Link to='/' className={footerCss.p}>Terms & Conditions</Link>

                    </div>

                </div>

            </div>

        </div>

    </React.Fragment>
}
