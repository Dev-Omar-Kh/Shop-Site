import React from 'react';

import ocCss from './allOrders.module.css'

export default function OrderCard({data}) {

    const date =  data.createdAt.split('-').slice(0 , 2).join('-');

    return <React.Fragment>

        <div className={ocCss.card}>

            <div className={ocCss.date}>

                <span>{date}</span>

            </div>

            <div className={ocCss.card_det}>

                <p>{data.user.name}</p>
                <span>{data.shippingAddress?.phone}</span>
                <span>{data.shippingAddress?.city}</span>

            </div>

            <div className={ocCss.card_price}>

                <p>Total : <span>{data.totalOrderPrice} EGP</span></p>
                <p>TAX : <span>{data.taxPrice} EGP</span></p>
                <p>Shipping : <span>{data.shippingPrice} EGP</span></p>

            </div>

            <div className={ocCss.order_status}>

                <span className={data.paymentMethodType === 'cash' ? ocCss.green_span : ocCss.red_span}>Cash</span>
                <span className={data.isPaid ? ocCss.green_span : ocCss.red_span}>Paid</span>
                <span className={data.isDelivered ? ocCss.green_span : ocCss.red_span}>Arrived</span>

            </div>

        </div>

    </React.Fragment>

}
