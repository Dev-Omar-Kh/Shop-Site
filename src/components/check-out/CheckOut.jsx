import React, { useContext, useEffect, useState } from 'react';

import checkCss from './check_out.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { cartContext } from '../../contexts/cartContext';
import Status from '../status/Status';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {

    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [load, setLoad] = useState(false);

    const {cartId , setCardItems , setCartTotalCount , setCartProducts} = useContext(cartContext);

    const navigate = useNavigate();

    const inputsValue = {

        phone : "",
        city : "",
        details : "",

    }

    const sendData = async(values) => {

        setLoad(true)

        try {

            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}` , 
                {

                    "shippingAddress" : values

                }
                , {

                headers : {token : localStorage.getItem('auth_token')}

            });

            if(data.status === 'success'){

                setSuccess('The order has been shipped');

                setCardItems(0);
                setCartTotalCount(0);
                setCartProducts([])

                setTimeout(() => {

                    navigate('/orders');

                } , 3000)

            }
            else{

                setErrorMsg("The order hasn't been shipped")

            }

        } 
        catch (error) {

            console.log(error);

        }

        setLoad(false)

    }

    const checkFormik = useFormik({

        initialValues : inputsValue,

        onSubmit : sendData,

    });

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        if(errorMsg){

            const timer = setTimeout(() => {

                setVisible(false);

            }, 3000);

            return () => {

                clearTimeout(timer);

                setVisible(true);

            };

        }

    }, [errorMsg]);

    return <React.Fragment>

        {success ? <Status display={visible} img = {'success'} msg = {success} /> : ''}
        {errorMsg && visible ? <Status display={visible} img = {'error'} msg = {errorMsg} /> : ''}

        <div className={checkCss.container}>

            <div className={checkCss.check_out_side}>

                <form style={load ? {opacity : '0.6'} : {opacity : '1'}} onSubmit={checkFormik.handleSubmit}>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='name'><span>Name :</span></label>
                        <input id='name' onChange={checkFormik.handleChange} value={checkFormik.values.name} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='phone'><span>Phone :</span></label>
                        <input id='phone' onChange={checkFormik.handleChange} value={checkFormik.values.phone} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='email'><span>Email :</span></label>
                        <input id='email' onChange={checkFormik.handleChange} value={checkFormik.values.email} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='city'><span>Location :</span></label>
                        <input id='city' onChange={checkFormik.handleChange} value={checkFormik.values.city} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='details'><span>Order Name :</span></label>
                        <input id='details' onChange={checkFormik.handleChange} value={checkFormik.values.details} type="text" />

                    </div>

                    <button className={checkCss.submit} type="submit">

                        {load ? 
                        <ThreeCircles

                            visible={true} height="20" width="20" color="var(--light-color)" 
                            ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

                        />
                        : 'Confirm'}

                    </button>

                </form>

            </div>

            <div className={checkCss.img_side}>

                <img loading='lazy' src={require('../../images/check-out-h.png')} alt="" />

            </div>

        </div>

    </React.Fragment>

}
