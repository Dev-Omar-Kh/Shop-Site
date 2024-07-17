import React from 'react';

import statusCss from './status.module.css';

export default function Status({msg , img , display}){

    return <React.Fragment>

        <div className={statusCss.status_msg}>

            <div className={display ? statusCss.msg_box + ' ' + statusCss.display_msg : statusCss.display_msg_out}>

                <div className={statusCss.msg_cont}>

                    <p className={statusCss.msg_p}> {msg} </p>

                    {img === 'success' ? <img loading='lazy' src={require('../../images/success.png')} alt="success" /> : <img loading='lazy' src={require('../../images/error.png')} alt="error" />}

                </div>

            </div>

        </div>

    </React.Fragment>

}
