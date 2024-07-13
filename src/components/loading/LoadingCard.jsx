import React from 'react';

import loadingCss from './loading.module.css';

export default function LoadingCard({wd , hg}) {

    return <React.Fragment>

        <div className={loadingCss.loader}>

            <div style={{width : wd}} className={loadingCss.wrapper}>

                <div style={{height : hg}} className={loadingCss.circle}></div>
                <div className={loadingCss.line_1}></div>
                <div className={loadingCss.line_2}></div>

            </div>

        </div>

    </React.Fragment>

}
