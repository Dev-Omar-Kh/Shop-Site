import React from 'react';

import Slider from '../slider/Slider';
import CateSlider from '../cate-slider/CateSlider';
import SomeProducts from '../some-products/SomeProducts';
import { Helmet } from 'react-helmet';


export default function Home() {

    return <React.Fragment>

        <Helmet>

            <title>Shop-Online</title>

        </Helmet>

        <Slider />

        <CateSlider />

        <SomeProducts />

    </React.Fragment>

}
