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
    const [errorRadio, setErrorRadio] = useState(null);
    const [load, setLoad] = useState(false);

    const {cartId , setCardItems , setCartTotalCount , setCartProducts} = useContext(cartContext);

    const navigate = useNavigate();

    const inputsValue = {

        phone : "",
        city : "",
        details : "",
        name : "",
        email : ""

    }

    const sendData = async(values) => {

        const fRadio = document.getElementById('cash').checked;
        const SRadio = document.getElementById('online').checked;

        if(!fRadio && !SRadio){

            setErrorRadio('You must choose method');

        }

        if(fRadio){

            setLoad(true);

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
                    setCartProducts([]);

                    setTimeout(() => {

                        navigate('/allorders');

                    } , 3000);

                }
                else{

                    setErrorMsg("The order hasn't been shipped")

                }

            } 
            catch (error) {

                console.log(error);

            }

            setLoad(false);

        }

        if(SRadio){

            setLoad(true);

            try {

                const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}` , 

                    {"shippingAddress" : values}
                    ,{

                        headers : {token : localStorage.getItem('auth_token')}, 
                        params : {url : `https://${window.location.host}`}

                    }

                );

                // if(data.status === 'success'){

                //     setSuccess('The order has been shipped');

                //     setCardItems(0);
                //     setCartTotalCount(0);
                //     setCartProducts([])

                //     setTimeout(() => {

                //         navigate('/allorders');

                //     } , 3000)

                // }
                // else{

                //     setErrorMsg("The order hasn't been shipped")

                // }

                window.open(data.session.url , "_self");

            } 
            catch (error) {

                console.log(error);

            }

            setLoad(false);

        }

    }

    // console.log(cartId);

    const checkFormik = useFormik({

        initialValues : inputsValue,

        onSubmit : sendData,

        validate : (values) => {

            setErrorMsg(null);

            const errors = {};

            if(values.name.length < 4){

                errors.name = 'Name is invalid';

            }

            if(!values.phone.match(/^(02)?01[0125][0-9]{8}$/)){

                errors.phone = 'Phone number is invalid';

            }

            if(!values.email.includes('@') && !values.email.includes('@')){

                errors.email = 'Email is invalid';

            }

            if(values.city.length < 3){

                errors.city = 'Location is invalid';

            }

            if(values.details.length < 1){

                errors.details = 'Order details is short';

            }

            return errors;

        }

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
                        <label htmlFor='name'><span>Name :</span> {checkFormik.errors.name && checkFormik.touched.name ? <span className={checkCss.error_msg}>* {checkFormik.errors.name}</span> : ''} </label>
                        <input disabled={load} onBlur={checkFormik.handleBlur} id='name' onChange={checkFormik.handleChange} value={checkFormik.values.name} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='phone'><span>Phone :</span> {checkFormik.errors.phone && checkFormik.touched.phone ? <span className={checkCss.error_msg}>* {checkFormik.errors.phone}</span> : ''} </label>
                        <input disabled={load} onBlur={checkFormik.handleBlur} id='phone' onChange={checkFormik.handleChange} value={checkFormik.values.phone} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='email'><span>Email :</span> {checkFormik.errors.email && checkFormik.touched.email ? <span className={checkCss.error_msg}>* {checkFormik.errors.email}</span> : ''} </label>
                        <input disabled={load} onBlur={checkFormik.handleBlur} id='email' onChange={checkFormik.handleChange} value={checkFormik.values.email} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='city'><span>Location :</span> {checkFormik.errors.city && checkFormik.touched.city ? <span className={checkCss.error_msg}>* {checkFormik.errors.city}</span> : ''} </label>
                        <input disabled={load} onBlur={checkFormik.handleBlur} id='city' onChange={checkFormik.handleChange} value={checkFormik.values.city} type="text" />

                    </div>

                    <div className={checkCss.input_cont}>

                        <div className={checkCss.loader}></div>
                        <label htmlFor='details'><span>Order Name :</span> {checkFormik.errors.details && checkFormik.touched.details ? <span className={checkCss.error_msg}>* {checkFormik.errors.details}</span> : ''} </label>
                        <input disabled={load} onBlur={checkFormik.handleBlur} id='details' onChange={checkFormik.handleChange} value={checkFormik.values.details} type="text" />

                    </div>

                    <div className={checkCss.radio_btns}>

                        <div className={checkCss.radio_sec}>

                            <div className={checkCss.radio_buttons_container}>

                                <div className={checkCss.radio_button}>

                                    <input name="radio-group" id="cash" className={checkCss.radio_button__input} type="radio" />

                                    <label htmlFor="cash" className={checkCss.radio_button__label}>

                                        <span className={checkCss.radio_button__custom}></span>
                                        Cash

                                    </label>

                                </div>

                                <div className={checkCss.radio_button}>

                                    <input name="radio-group" id="online" className={checkCss.radio_button__input} type="radio" />

                                    <label htmlFor="online" className={checkCss.radio_button__label}>

                                        <span className={checkCss.radio_button__custom}></span>

                                        Online

                                    </label>

                                </div>

                            </div>

                        </div>

                        {errorRadio ? <div className={checkCss.error_msg_radio}>

                            <p>* {errorRadio}</p>

                        </div> : ''}

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
