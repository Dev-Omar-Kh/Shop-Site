import React from 'react';

import cBrand from './cBrand.module.css';

export default function BrandCart({data}) {

    return <React.Fragment>

        <div className={cBrand.card}>

            <img loading='lazy' src={data.image} alt="cart" />

        </div>

    </React.Fragment>

}
