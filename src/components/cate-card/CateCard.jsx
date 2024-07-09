import React from 'react';

import cateCss from './cateCard.module.css';

export default function CateCard(){

    return <React.Fragment>

        <div className={cateCss.card}>

            <img src={require('../../images/success-1.jpg')} alt="" />

            <div className={cateCss.det}>

                <span className={cateCss.name}>Category</span>

            </div>

        </div>

    </React.Fragment>

}
