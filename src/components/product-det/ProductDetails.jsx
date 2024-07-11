import React, { useState } from 'react';
import SliderImg from './slid-img/SliderImg';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../loading/Loading';

import detCss from './proDet.module.css';

import cart from '../../images/icons/cart-icon-light.svg'

export default function ProductDetails() {

    const {id} = useParams()

    const getProductDetails = () => {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }

    const {data , isLoading} = useQuery('ProductDetails' , getProductDetails);

    const [counter, setCounter] = useState(0);

    const plusCounter = () => {

        setCounter(counter + 1);

    }

    const minusCounter = () => {

        if(counter > 0){

            setCounter(counter - 1);

        }

    }


    if(isLoading){

        return <Loading />

    }

    return <React.Fragment>

        <div className={detCss.container}>

            <div className={detCss.det_imgs}>

                <SliderImg imgs={data.data.data.images} />

            </div>

            <div className={detCss.det_dis}>

                <p className={detCss.name}>{data.data.data.title}</p>
                <p className={detCss.details}> {data.data.data.description} </p>

                <div className={detCss.other_det}>

                    <div className={detCss.cate}>{data.data.data.category.name}</div>
                    <div className={detCss.price_rate}>

                        <span className={detCss.price}>{data.data.data.price} EGP</span>
                        <span className={detCss.rate}><i className="fa-solid fa-star"></i> {data.data.data.ratingsAverage}</span>

                    </div>

                </div>

                <div className={detCss.count}>

                    <span onClick={plusCounter} className={detCss.operation}><i className="fa-solid fa-plus"></i></span>
                    <span  className={detCss.counter}> {counter} </span>
                    <span onClick={minusCounter} className={detCss.operation}><i className="fa-solid fa-minus"></i></span>

                </div>

                <button className={detCss.add_cart}> <img src={cart} alt="" /> + Add To Cart</button>

            </div>

        </div>

    </React.Fragment>

}
