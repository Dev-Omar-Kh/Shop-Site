import React from 'react';

import loadingCss from './loading.module.css';

export default function Loading(){

    return <React.Fragment>

        <div className={loadingCss.container}>

        <div className={loadingCss.loader}>

            <span>LOADING</span>
            <span>LOADING</span>
            
        </div>

        </div>

    </React.Fragment>

}