import React, { useContext, useEffect, useState } from 'react';

import authCss  from './auth.module.css';

import eye from '../../images/icons/eye-icon.svg';
import eyeSlash from '../../images/icons/eye-slash-icon.svg';
import axios from 'axios';
import { useFormik } from 'formik';
import Status from '../status/Status';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authentication';

export default function Login() {

    // ====== sending-data-to-login ======

    let data = {

        email :"",
        password :""

    };

    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const {setToken} = useContext(authContext);

    async function logIn(values){

        setIsLoading(true);

        try{

            const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , values);

            if(data.message === 'success'){

                // localStorage.setItem('auth token' , data.token);
                setToken(data.token);

                setSuccessMsg('Successfully logged in');

                setTimeout(() => {

                    navigate('/')

                }, 3000);

            }

        }
        catch({response}){

            // console.log(response.data.message);
            setErrorMsg(response.data.message);

        }

        setIsLoading(false);

    }

    const formikObj = useFormik({

        initialValues : data,

        onSubmit : logIn ,

        validate : function(values){

            setErrorMsg(null)

            const errors = {}

            if(!values.email.includes('@') || !values.email.includes('.')){

                errors.email = 'This email is invalid';

            }

            if(values.password.length < 6){

                errors.password = 'The password is too short';

            }

            if(values.password.length > 12){

                errors.password = 'The password is too long';

            }

            // console.log(errors);

            return errors;

        }

    })

    // ====== display-password ======

    const [count, setCount] = useState(0);

    const changeCount = () => {

        setCount(count+1);

    }

    // ====== display-error-msg ======

    const [displayErrorMsg, setDisplayErrorMsg] = useState(true);

    useEffect(() => {

        if(errorMsg){

            const timer = setTimeout(() => {

                setDisplayErrorMsg(false);

            }, 3000);

            return () => {

                clearTimeout(timer);

                setDisplayErrorMsg(true);

            };

        }

    }, [errorMsg]);
    

    return <React.Fragment>

        {successMsg ? <Status img = {'success'} msg = {successMsg} /> : ''}
        {errorMsg && displayErrorMsg ? <Status img = {'error'} msg = {errorMsg} /> : ''}

        <div className={authCss.auth_cont}>

            <div className={authCss.left_side}>

                <div className={authCss.title}>LogIn</div>

                <form style={isLoading ? {opacity : '0.6'} : {opacity : '1'}} onSubmit={formikObj.handleSubmit} className={authCss.form}>

                    <div className={authCss.input_cont}>

                        <div className={authCss.loader}></div>
                        <label htmlFor='email'><span>Email :</span> {formikObj.errors.email && formikObj.touched.email ? <span className={authCss.error_msg}>* {formikObj.errors.email}</span> : ''}</label>
                        <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.email} id='email' type="email" />

                    </div>

                    <div className={authCss.input_cont}>

                        <div onClick={changeCount} className={authCss.eye}>

                            <div className={authCss.eye_cont}>

                                <img style={count % 2 === 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eye} alt="eye" />

                                <img style={count % 2 !== 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eyeSlash} alt="eye-slash" />

                            </div>

                        </div>
                        <label htmlFor='password'><span>Password :</span> {formikObj.errors.password && formikObj.touched.password ? <span className={authCss.error_msg}>* {formikObj.errors.password}</span> : ''}</label>
                        <input onBlur={formikObj.handleBlur} onChange={formikObj.handleChange} value={formikObj.values.password} id='password' type={count % 2 === 0 ? 'password' : 'text'} />

                    </div>

                    <div className={authCss.check_cont}></div>

                    <button className={authCss.submit} type="submit">

                        {isLoading ? <ThreeCircles visible={true} height="20" width="20" color="var(--light-color)" ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""/> : 'Log In'}

                    </button>

                </form>

            </div>

            <div className={authCss.right_side}>

                <img src={require('../../images/auth-logo-bg.png')} alt="" />

            </div>

        </div>

    </React.Fragment>
}
