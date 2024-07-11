import React from 'react';

import loadingCss from './loading.module.css';

export default function LoadingCard({wd , hg}) {

    return <React.Fragment>

        <div class={loadingCss.loader}>

            <div style={{width : wd}} class={loadingCss.wrapper}>

                <div style={{height : hg}} class={loadingCss.circle}></div>
                <div class={loadingCss.line_1}></div>
                <div class={loadingCss.line_2}></div>

            </div>

        </div>

    </React.Fragment>

}
