import React from 'react';

import statusCss from './status.module.css';

export default function Status(props){

    return <React.Fragment>

        <div className={statusCss.status_msg}>

            <div className={statusCss.msg_box}>

                <div className={statusCss.msg_cont}>

                    <p className={statusCss.msg_p}> {props.msg} </p>

                    {props.img === 'success' ? <img src={require('../../images/success.png')} alt="success" /> : <img src={require('../../images/error.png')} alt="error" />}
                    {/* <img src={require('../../images/error.png')} alt="error" /> */}

                </div>

            </div>

        </div>

    </React.Fragment>

}
