import React from 'react';

import sProCss from './somePro.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import ProCard from './../pro-card/ProCard';
import Loading from '../loading/Loading';

export default function SomeProducts() {

    const getTopSales = () => {

        return axios.get("https://ecommerce.routemisr.com/api/v1/products" , {

            params : {

                limit : '10',
                sort : '-sold'

            }

        });

    }

    const {data , isLoading} = useQuery('topProducts' , getTopSales , {

        refetchOnMount : false

    })

    return <React.Fragment>

        <div className={sProCss.container}>

            <div className={sProCss.title}>

                <p>Best sales</p>

            </div>

            <div className={sProCss.cards_cont}>

                {isLoading ? <Loading flex={'wrap'} count={3} wd={'250px'} hg={'350px'} /> : <>{data?.data.data.map((product , idx) => {return <ProCard key={idx} data={product} />})}</>}

            </div>

        </div>

    </React.Fragment>

}
