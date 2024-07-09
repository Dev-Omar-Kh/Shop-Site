import React from 'react';

import productsCss from '../products/products.module.css'

export default function ProCard({data}){

    // ====== cut-name ======

    const nameString = data.title

    const nameArray = nameString.split(' ');

    const nameSpace = nameArray.slice(0 , 3);

    if(nameArray.length > 4){

        nameSpace.push('...');

    }

    const name = nameSpace.join(' ');

    // ====== ======

    return <React.Fragment>
    
        <div className={productsCss.card}>

            <img src={data.imageCover} alt="" />

            <div className={productsCss.det}>

                <span className={productsCss.cate}>{data.category.name}</span>
                <span className={productsCss.name}>{name}</span>

            </div>

            <div className={productsCss.price_rate}>

                <span className={productsCss.price}>{data.price} EGP</span>
                <span className={productsCss.rate}><i className="fa-solid fa-star"></i> {data.ratingsAverage}</span>

            </div>

        </div>

    </React.Fragment>

}
