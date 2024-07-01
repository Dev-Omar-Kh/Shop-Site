import React from 'react';

import footerCss from './footer.module.css';

export default function Footer() {
    return <React.Fragment>

        <div className={footerCss.footer}>

            <div className={footerCss.footer_cont}>

                <div className={footerCss.first_section}>

                    <img src={require('../../images/dark-logo.png')} alt="logo" />

                    <p>Buy with peace of mind and do not worry about delivery</p>

                </div>

                <div className={footerCss.seconde_section}>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>Products</div>

                        <p className={footerCss.p}>New Season</p>
                        <p className={footerCss.p}>Most Searched</p>
                        <p className={footerCss.p}>Most Selled</p>

                    </div>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>About</div>

                        <p className={footerCss.p}>Help</p>
                        <p className={footerCss.p}>Shipping</p>
                        <p className={footerCss.p}>Affiliate</p>

                    </div>

                    <div className={footerCss.parts}>

                        <div className={footerCss.title}>Info</div>

                        <p className={footerCss.p}>Contact us</p>
                        <p className={footerCss.p}>Privacy Policies</p>
                        <p className={footerCss.p}>Terms & Conditions</p>

                    </div>

                </div>

            </div>

        </div>

    </React.Fragment>
}
