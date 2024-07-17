import React, { useEffect, useState } from 'react'

import ordersCss from './allOrders.module.css';
import OrderCard from './OrderCard';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export default function AllOrders() {

    const [ordersUser, setOrdersUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const {id} = jwtDecode(localStorage.getItem('auth_token'));

        getAllOrders(id);

    });

    const getAllOrders = async(id) => {

        try {

            const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);

            setOrdersUser(data);

        } catch (error) {

            setTimeout(() => {

                navigate('/error');

            }, 100);

        }

    };

    if(ordersUser === null){

        return <div 
            style={{width : '100%' , height : '600px' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}
        >

            <ThreeCircles

                visible={true} height="80" width="80" color="var(--dark-color)" 
                ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

            />

        </div>

    }

    return <React.Fragment>

        <div className={ordersCss.container}>

            <div className={ordersCss.title}>

                <p>All Orders</p>

            </div>

            <div className={ordersCss.orders_cont}>

                {ordersUser.map((order , idx) => {return <OrderCard key={idx} data={order} />})}

            </div>

        </div>

    </React.Fragment>

}
