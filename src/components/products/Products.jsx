import React from 'react';

import productsCss from './products.module.css';
import ProCard from '../pro-card/ProCard';
import axios from 'axios';
import Loading from '../loading/Loading';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';

export default function Products() {

    const getAllProducts = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/products' , {

            params : {

                sort : '-price',
                limit : '50'

            }

        });

    }

    const {data , isLoading} = useQuery('allProducts' , getAllProducts , {

        refetchOnMount : false

    });

    // if(isLoading){

    //     return <Loading />

    // }

    return <React.Fragment>

        <Helmet>

            <title>Products-Page</title>

        </Helmet>

        <section className={productsCss.container}>

            <div className={productsCss.title}>

                <p>Products</p>

                <span>Order it for you or for your beloved ones </span>

            </div>

            {/* ====== cards ====== */}

            <div className={productsCss.cards_cont}>

                {isLoading ? <Loading flex={'wrap'} count={3} wd={'250px'} hg={'350px'} /> : <>{data?.data.data.map((product , idx) => { return <ProCard key={idx} data={product} />})}</>}

            </div>

        </section> 

    </React.Fragment>
}
