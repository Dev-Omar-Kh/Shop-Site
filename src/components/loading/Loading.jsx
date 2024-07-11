import React from 'react';

import loadingCss from './loading.module.css';
import LoadingCard from './LoadingCard';

export default function Loading({wd , hg , count , flex}){

    const cards = [];

    for (let i = 0; i < count; i++) {

        cards.push(<LoadingCard wd={wd} hg={hg} key={i} />);

    }

    return <React.Fragment>

        <div style={{flexWrap : flex}} className={loadingCss.container}>

            {cards}

        </div>

    </React.Fragment>

}