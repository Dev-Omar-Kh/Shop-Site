import React from 'react';

import homeCss from './home.module.css';

import Slider from '../slider/Slider';
import CateCard from '../cate-card/CateCard';

export default function Home() {


    return <React.Fragment>

        <Slider />

        <div className={homeCss.cate_cont}>

            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />
            <CateCard />

        </div>

    </React.Fragment>

}
