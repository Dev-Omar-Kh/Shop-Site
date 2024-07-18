import React from 'react';

import cateCss from './cate.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../loading/Loading';
import CateCard from './CateCard';

export default function Categories() {

    const getAllCategories = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/categories')

    };

    const {data , isLoading} = useQuery('getCategories' , getAllCategories);

    return <React.Fragment>

        <div className={cateCss.container}>

            <div className={cateCss.title}>

                <p>Categories</p>

            </div>

            <div className={cateCss.card_cont}>

                {isLoading ? <Loading flex={'wrap'} count={2} wd={'200px'} hg={'250px'} /> : <>{data.data.data.map((cate , idx) => {return <CateCard key={idx} data={cate} />})}</>}

            </div>

        </div>

    </React.Fragment>
}
