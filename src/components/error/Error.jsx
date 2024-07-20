import React from 'react';

import errorCss from './error.module.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Error(){

    return <React.Fragment>

        <Helmet>

            <title>Error-Page</title>

        </Helmet>

        <div className={errorCss.container}>

            <div className={errorCss.error_cont}>

                <img className={errorCss.img} src={require('../../images/error-new.png')} alt="" />

                <p className={errorCss.exp}>This page does not exist or has expired. If you encounter any problems, please contact us</p>

                <Link className={errorCss.contact} to={'/'}>Go to home</Link>

            </div>

        </div>

    </React.Fragment>

}
