import React from 'react';

import Slider from '../slider/Slider';
import CateSlider from '../cate-slider/CateSlider';
import SomeProducts from '../some-products/SomeProducts';


export default function Home() {

    return <React.Fragment>

        <Slider />

        <CateSlider />

        <SomeProducts />

    </React.Fragment>

}
