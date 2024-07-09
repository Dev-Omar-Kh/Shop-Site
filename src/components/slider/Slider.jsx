import React, { useEffect, useState } from 'react';

import sliderCss from './slider.module.css';

import fSlide from '../../images/first_slide.png';
import sSlide from '../../images/second_slider.png';
import tSlide from '../../images/third_slide.jpg';

export default function Slider(){

    
    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(false);
    const [manualChange, setManualChange] = useState(false);
    const images = [fSlide , sSlide , tSlide];


    useEffect(() => {

        if (manualChange) return;

        const interval = setInterval(() => {

            setFade(true);

            setTimeout(() => {

                setCount((count + 1) % 3);
                setFade(false);

            }, 500);

        }, 5000);

        return () => clearInterval(interval);

    } , [count , manualChange]);

    const handlePrev = () => {

        if (!fade) {

            setManualChange(true);
            setFade(true);

            setTimeout(() => {

                setCount((count - 1 + 3) % 3);
                setFade(false);
                setManualChange(false);

            }, 500);

        }

    };

    const handleNext = () => {

        if (!fade) {

            setManualChange(true);
            setFade(true);

            setTimeout(() => {

                setCount((count + 1) % 3);
                setFade(false);
                setManualChange(false);

            }, 500);

        }

    };

    return <React.Fragment>

        <div className={sliderCss.slider_container}>

            <div className={sliderCss.container}>

                <div onClick={handlePrev} className={sliderCss.arrows}><i className="fa-solid fa-chevron-left"></i></div>

                <div className={sliderCss.slide_scroll}>

                    <img id='images' className={fade ? sliderCss.fade : sliderCss.fade_in} src={images[count]} alt="sliders" />

                </div>

                <div onClick={handleNext} className={sliderCss.arrows}><i className="fa-solid fa-chevron-right"></i></div>

            </div>

            <div className={sliderCss.right_img}>

                <div className={sliderCss.right_img_cont}><img className={fade ? sliderCss.img_out : sliderCss.img_in} src={images[(count + 1) % 3]} alt="" /></div>
                <div className={sliderCss.right_img_cont}><img className={fade ? sliderCss.img_out : sliderCss.img_in} src={images[(count + 2) % 3]} alt="" /></div>

            </div>

        </div>

    </React.Fragment>

}
