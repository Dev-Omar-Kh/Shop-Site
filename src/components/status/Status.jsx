import React from 'react';

import statusCss from './status.module.css';

export default function Status({msg , img , display}){

    return <React.Fragment>

        <div className={display ? statusCss.status_msg + ' ' + statusCss.display_cont : statusCss.display_cont_out}>

            <div className={display ? statusCss.msg_box + ' ' + statusCss.display_msg : statusCss.display_msg_out}>

                <div className={statusCss.msg_cont}>

                    <p className={statusCss.msg_p}> {msg} </p>

                    {img === 'success' ? <img src={require('../../images/success.png')} alt="success" /> : <img src={require('../../images/error.png')} alt="error" />}

                </div>

            </div>

        </div>

    </React.Fragment>

}
