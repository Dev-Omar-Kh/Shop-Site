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

            <i class="fa-solid fa-power-off"></i>
            
            <p>No Connection , Check Your WIFI</p>

            <button onClick={reload}>Try Again</button>

        </div>

    </React.Fragment>

}
