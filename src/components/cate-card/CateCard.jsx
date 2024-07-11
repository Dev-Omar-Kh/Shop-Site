import React from 'react';

import cCard from '../cate-slider/cateSlider.module.css';

export default function CateCard({data}) {

    return <React.Fragment>

        <div id='card' className={cCard.card}>

            <img src={data.image} alt="" />

            <p>{data.name}</p>

        </div>

    </React.Fragment>

}
