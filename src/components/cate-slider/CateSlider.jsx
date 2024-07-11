import React, { useEffect } from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../loading/Loading';
import CateCard from '../cate-card/CateCard';

import cateSliderCss from './cateSlider.module.css';

export default function CateSlider() {

    useEffect(() => {

        if(!isLoading){

            const copy = document.getElementById('cate_scroll').cloneNode(true);
            document.getElementById('parent').appendChild(copy);

        }

    });

    const getAllCategories = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');

    }

    const {data , isLoading} = useQuery('getCategories' , getAllCategories);

    return <React.Fragment>

        <section className={cateSliderCss.categories_container}>

            <div className={cateSliderCss.title}>

                <p>Category</p>

            </div>

            <div id='parent' className={cateSliderCss.cate_cont}>

                {isLoading ? <div className={'load_cont'}>
                
                    <Loading flex={'nowrap'} count={10} wd={'200px'} hg={'250px'} />

                </div> : <div id='cate_scroll' className={cateSliderCss.cate_scroll}>

                    <div className={cateSliderCss.scroll_cont}>

                        {data?.data.data.map((cate , idx) => {return <CateCard key={idx} data = {cate} />})}

                    </div>

                </div> }

            </div>

        </section>

    </React.Fragment>

}
