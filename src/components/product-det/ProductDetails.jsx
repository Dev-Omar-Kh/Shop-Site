import React, { useContext, useEffect, useState } from 'react';
import SliderImg from './slid-img/SliderImg';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import detCss from './proDet.module.css';

import cart from '../../images/icons/cart-icon-light.svg'
import { ThreeCircles } from 'react-loader-spinner';
import { cartContext } from '../../contexts/cartContext';
import Status from '../status/Status';
import { Helmet } from 'react-helmet';
import Error from './../error/Error';

export default function ProductDetails() {

    const {id} = useParams()

    const getProductDetails = () => {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

    }

    const {data , isLoading , isError} = useQuery('ProductDetails' , getProductDetails);

    // ====== Add-to-cart ======

    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [addLoading, setAddLoading] = useState(false);

    const {addToCard} = useContext(cartContext)

    const sendToCard = async (id) => {

        setAddLoading(true)

        const res = await addToCard(id);

        if(res.status === 'success'){

            setSuccess(res.message);
            console.log(res.message);

        }
        else{

            setErrorMsg(res.response.data.message);

        }

        setAddLoading(false);

    }

    const [visible, setVisible] = useState(true);
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {

        if(errorMsg || success){

            const timer = setTimeout(() => {

                setVisible(false);
                setVisibility(false);

                setSuccess(null);
                setErrorMsg(null);  

            }, 3000);

            return () => {

                clearTimeout(timer);

                setVisible(true);
                setVisibility(true);

            };

        }

    }, [errorMsg , success]);

    if(isError){

        return <Error />

    }

    return <React.Fragment>

        {success && visible ? <Status display={visibility} img = {'success'} msg = {success} /> : ''}
        {errorMsg && visible ? <Status display={visibility} img = {'error'} msg = {errorMsg} /> : ''}

        <div className={detCss.container}>

            {isLoading ? <div
                style={{width : '100%' , height : '400px' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}
            >

                <ThreeCircles

                    visible={true} height="80" width="80" color="var(--dark-color)" 
                    ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

                />

            </div> : <>

                <Helmet>

                    <title>{data.data.data.title}</title>

                </Helmet>

                <div className={detCss.det_imgs}>

                    <SliderImg title={data.data.data.title} imgs={data.data.data.images} />

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

                    <button onClick={() => sendToCard(data.data.data.id)} className={detCss.add_cart}> {addLoading ? <ThreeCircles

                            visible={true} height="20" width="20" color="var(--light-color)" 
                            ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

                        /> : <><img loading='lazy' src={cart} alt="" /> + Add To Cart</>} </button>

                </div>

            </>}

        </div>

    </React.Fragment>

}
