import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function Loading() {

    return <React.Fragment>

        <div 
            style={{
                position : 'fixed' , top : '0' , left : '0' , zIndex : '100' , width : '100%' , height : '100svh' , 
                display : 'flex' , alignItems : 'center' , justifyContent : 'center' , backgroundColor : 'var(--light-color)'
            }}
        >

            <CirclesWithBar
                height="80" width="80" color="#4fa94d" outerCircleColor="#4fa94d" innerCircleColor="#4fa94d" 
                barColor="#4fa94d" ariaLabel="circles-with-bar-loading" wrapperStyle={{}} wrapperClass="" visible={true} 
            />

        </div>

    </React.Fragment>

}
