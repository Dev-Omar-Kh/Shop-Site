import React from 'react';

import cCartCss from './cart.module.css'

export default function CartCard({data}) {

    return <React.Fragment>

        <div className={cCartCss.card}>

            <button className={cCartCss.delete_card}><i className="fa-solid fa-xmark"></i></button>

            <div className={cCartCss.img}>

                <img src={data.product.imageCover} alt="" />

            </div>

            <div className={cCartCss.det}>

                <h3>{data.product.title}</h3>
                <p><span>Price :</span> {data.price} EGP</p>

                <div className={cCartCss.count}>

                    <span className={cCartCss.operation}><i className="fa-solid fa-plus"></i></span>
                    <span className={cCartCss.counter}> {data.count} </span>
                    <span className={cCartCss.operation}><i className="fa-solid fa-minus"></i></span>

                </div>

                <p><span>Total Price : </span> {data.price * data.count} EGP</p>

            </div>

        </div>

    </React.Fragment>

}
