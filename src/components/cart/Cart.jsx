import React from 'react';

import cartCss from './cart.module.css';
import { Link } from 'react-router-dom';
import CartCard from './CartCard';
import { useQuery } from 'react-query';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';

export default function Cart() {

    const getCartItems = () => {

        return axios.get('https://ecommerce.routemisr.com/api/v1/cart' , {

            headers : {

                token : localStorage.getItem('auth_token')

            }

        })

    }

    const {data , isLoading} = useQuery('cartItems' , getCartItems);

    return <React.Fragment>

        <div className={cartCss.container}>

            <div className={cartCss.title}>

                <p>Your Cart Items</p>

                <Link className={cartCss.back} to={'/products'}>Back to shopping</Link>

            </div>

            {isLoading ? <div 
                style={{width : '100%' , height : '400px' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}
            >

                <ThreeCircles

                    visible={true} height="80" width="80" color="var(--dark-color)" 
                    ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

                />

            </div> : <><div className={cartCss.cards_cont}>

                {data?.data.data.products.map((product , idx) => {return <CartCard key={idx} data={product} />})}

            </div>

            <div className={cartCss.total_price}>

                <p><span>SUB - TOTAL : </span> {data?.data.data.totalCartPrice} EGP</p>

            </div></>}

        </div>

    </React.Fragment>

}
