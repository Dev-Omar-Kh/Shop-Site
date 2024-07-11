import React, { useEffect } from 'react';

import Slider from '../slider/Slider';

import homeCss from './home.module.css';
import CateCard from '../cate-card/CateCard';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../loading/Loading';

export default function Home() {

    useEffect(() => {

        if(!isLoading){

            const copy = document.getElementById('cate_scroll').cloneNode(true);
            document.getElementById('parent').appendChild(copy);

        }

    });

    const getAllCategories = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');

    }

    const {data , isLoading} = useQuery('getCategories' , getAllCategories , {

        refetchOnMount : false

    });

    if(isLoading){

        return <Loading />

    };

    return <React.Fragment>

        <Slider />

        <section className={homeCss.categories_container}>

            <div className={homeCss.title}>

                <p>Category</p>

            </div>

            <div id='parent' className={homeCss.cate_cont}>

                <div id='cate_scroll' className={homeCss.cate_scroll}>

                    <div className={homeCss.scroll_cont}>

                        {data?.data.data.map((cate , idx) => {return <CateCard key={idx} data = {cate} />})}

                    </div>

                </div>

            </div>

        </section>

    </React.Fragment>

}
