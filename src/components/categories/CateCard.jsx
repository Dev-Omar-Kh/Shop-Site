import React from 'react';

import cartCss from './cate.module.css';

export default function CateBrandCart({data}) {

    return <React.Fragment>

        <div className={cartCss.card}>

            <img loading='lazy' src={data.image} alt="cart" />

            <p>{data.name}</p>

        </div>

    </React.Fragment>

}
