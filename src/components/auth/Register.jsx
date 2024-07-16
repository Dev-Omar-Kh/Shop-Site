import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { useFormik } from 'formik';
import axios from 'axios';

import authCss  from './auth.module.css';

import Status from '../status/Status';

import eye from '../../images/icons/eye-icon.svg';
import eyeSlash from '../../images/icons/eye-slash-icon.svg';

export default function Register() {

    // ====== send-data-to-register ======

    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [load, setLoad] = useState(false);

    const navigate = useNavigate();

    async function register(values){

        setLoad(true);

        try{

            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , values)

            // console.log(data);

            if(data.message === 'success'){

                setSuccess('The email has been created successfully');

                setTimeout(() => {

                    navigate('/auth/login');

                } , 3000);

            }

        }
        catch(err){

            setErrorMsg(err.response.data.message)

        }

        setLoad(false);

    }

    const formikObject = useFormik({

        initialValues : {

            name : "",
            email :"",
            password :"",
            rePassword :"",
            phone :""

        } , 

        onSubmit : register,

        validate : function(values){

            setErrorMsg(null);

            const errors = {};

            if(values.name.length < 4){

                errors.name = 'Name is invalid';

            }

            if(!values.email.includes('@') || !values.email.includes('.')){

                errors.email = 'This email is invalid';

            }

            if(values.password.length < 6){

                errors.password = 'The password is too short';

            }

            if(values.password.length > 12){

                errors.password = 'The password is too long';

            }

            if(values.password !== values.rePassword){

                errors.rePassword = "It doesn't match";

            }

            if(!values.phone.match(/^(02)?01[0125][0-9]{8}$/)){

                errors.phone = 'The phone number is invalid';

            }

            return errors;

        }

    })

    // ====== display-password ======

    const [count, setCount] = useState(0);

    const changeCount = () => {

        setCount(count+1);

    }

    const [reCount, setReCount] = useState(0);

    const changeReCount = () => {

        setReCount(reCount+1);

    }

    // ====== display-component ======

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

        <div className={authCss.auth_cont}>

            <div className={authCss.left_side}>

                <div className={authCss.title}>Register</div>

                <form style={load ? {opacity : '0.6'} : {opacity : '1'}} onSubmit={formikObject.handleSubmit} className={authCss.form}>

                    <div className={authCss.input_cont}>

                        <div className={authCss.loader}></div>
                        <label htmlFor='name'><span>Name :</span> {formikObject.errors.name && formikObject.touched.name ? <span className={authCss.error_msg}>* {formikObject.errors.name}</span> : ''}</label>
                        <input disabled={load} onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.name} id='name' type="text" />

                    </div>

                    <div className={authCss.input_cont}>

                        <div className={authCss.loader}></div>
                        <label htmlFor='email'><span>Email :</span> {formikObject.errors.email && formikObject.touched.email ? <span className={authCss.error_msg}>* {formikObject.errors.email}</span> : ''}</label>
                        <input disabled={load} onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.email} id='email' type="text" />

                    </div>

                    <div className={authCss.input_cont}>

                        <div onClick={changeCount} className={authCss.eye}>

                            <div className={authCss.eye_cont}>

                                <img style={count % 2 === 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eye} alt="eye" />

                                <img style={count % 2 !== 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eyeSlash} alt="eye-slash" />

                            </div>

                        </div>

                        <label htmlFor='password'><span>Password :</span> {formikObject.errors.password && formikObject.touched.password ? <span className={authCss.error_msg}>* {formikObject.errors.password}</span> : ''}</label>
                        <input disabled={load} onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.password} id='password' type={count % 2 === 0 ? 'password' : 'text'} />

                    </div>

                    <div className={authCss.input_cont}>

                        <div onClick={changeReCount} className={authCss.eye}>

                            <div className={authCss.eye_cont}>

                                <img style={reCount % 2 === 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eye} alt="eye" />

                                <img style={reCount % 2 !== 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eyeSlash} alt="eye-slash" />

                            </div>

                        </div>

                        <label htmlFor='rePassword'><span>Confirm Password :</span> {formikObject.errors.rePassword && formikObject.touched.rePassword ? <span className={authCss.error_msg}>* {formikObject.errors.rePassword}</span> : ''}</label>
                        <input disabled={load} onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.rePassword} type={reCount % 2 === 0 ? 'password' : 'text'} id='rePassword' />

                    </div>

                    <div className={authCss.input_cont}>

                        
                        <div className={authCss.loader}></div>
                        <label htmlFor='phone'><span>Phone :</span> {formikObject.errors.phone && formikObject.touched.phone ? <span className={authCss.error_msg}>* {formikObject.errors.phone}</span> : ''}</label>
                        <input disabled={load} onBlur={formikObject.handleBlur} onChange={formikObject.handleChange} value={formikObject.values.phone} id='phone' type="tel" />

                    </div>

                    <div className={authCss.check_cont}>

                        <p className={authCss.p}>Already have an account? <Link className={authCss.p_link} to={load ? '' : 'login'}>Log in from here</Link> </p>

                    </div>

                    <button disabled={load}  className={authCss.submit} type="submit">

                        {load ? 
                        <ThreeCircles

                            visible={true} height="20" width="20" color="var(--light-color)" 
                            ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

                        />
                        : 'Register'}

                    </button>

                </form>

            </div>

            <div className={authCss.right_side}>

                <img src={require('../../images/auth-logo-bg.png')} alt="" />

            </div>

        </div>

    </React.Fragment>
}
