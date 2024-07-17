import React, { useEffect, useState } from 'react';

import sliderImgCss from './sliderImg.module.css';

export default function SliderImg({imgs=require('../../../images/notFound.jpg') , title}){

    const [count, setCount] = useState(0);
    const [fade, setFade] = useState(false);
    const [manualChange, setManualChange] = useState(false);
    const images = [imgs[0] , imgs[1] , imgs[2]];


    useEffect(() => {

        if (manualChange) return;

        const interval = setInterval(() => {

            setFade(true);

            setTimeout(() => {

                setCount((count + 1) % 3);
                setFade(false);

            }, 300);

        }, 8000);

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

            }, 300);

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

            }, 300);

        }

    };

    return <React.Fragment>

        <div className={sliderImgCss.slider_container}>

            <div className={sliderImgCss.container}>

                <div onClick={handlePrev} className={sliderImgCss.arrows}><i className="fa-solid fa-chevron-left"></i></div>

                <div className={sliderImgCss.slide_scroll}>

                    <img loading='lazy' id='images' className={fade ? sliderImgCss.fade : sliderImgCss.fade_in} src={images[count]} alt={title} />

                </div>

                <div onClick={handleNext} className={sliderImgCss.arrows}><i className="fa-solid fa-chevron-right"></i></div>

            </div>

            <div className={sliderImgCss.right_img}>

                <div className={sliderImgCss.right_img_cont}><img loading='lazy' className={fade ? sliderImgCss.img_out : sliderImgCss.img_in} src={images[(count + 1) % 3]} alt="" /></div>
                <div className={sliderImgCss.right_img_cont}><img loading='lazy' className={fade ? sliderImgCss.img_out : sliderImgCss.img_in} src={images[(count + 2) % 3]} alt="" /></div>

            </div>

        </div>

    </React.Fragment>

}
