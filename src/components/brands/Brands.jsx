import React from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';
import Loading from '../loading/Loading';
import BrandCart from './BrandCard';

import brandsCss from './cBrand.module.css'
import { Helmet } from 'react-helmet';

export default function Brands() {

    const getAllBrands = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')

    };

    const {data , isLoading} = useQuery('getBrands' , getAllBrands);

    return <React.Fragment>

        <Helmet>

            <title>Brands-Page</title>

        </Helmet>

        <div className={brandsCss.container}>

            <div className={brandsCss.title}>

                <p>Brands</p>

            </div>

            <div className={brandsCss.card_cont}>

                {isLoading ? <Loading flex={'wrap'} count={2} wd={'150px'} hg={'100px'} /> : <>{data.data.data.map((brand , idx) => {return <BrandCart key={idx} data={brand} />})}</>}

            </div>

        </div>

    </React.Fragment>
}
