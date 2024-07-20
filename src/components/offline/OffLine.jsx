import React from 'react';

import offCss from './offline.module.css';
import { Helmet } from 'react-helmet';

export default function OffLine() {

    const reload = () => {

        window.location.reload();

    }

    return <React.Fragment>

        <Helmet>

            <title>Offline-Page</title>

        </Helmet>

        <div className={offCss.container}>

            <img src={require('../../images/offline-h.png')} alt="offline" />
            <button onClick={reload}>Try Again</button>

        </div>

    </React.Fragment>

}
