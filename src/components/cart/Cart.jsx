import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import CartCard from './CartCard';
import { cartContext } from '../../contexts/cartContext';

import cartCss from './cart.module.css';
import { ThreeCircles } from 'react-loader-spinner';

export default function Cart() {

    const [addLoading, setAddLoading] = useState(false);
    const [errMessage, setErrMessage] = useState(null)

    const {deleteAllProduct , getUserCard , cartProducts , setCartProducts , cartTotalCount} = useContext(cartContext);

    const getAllProCart = async() => {

        const res = await getUserCard();

        if(res.response?.data.statusMsg === 'fail'){


            setErrMessage(res.response.data.statusMsg);
            setCartProducts([]);

        }

    }

    const deleteCartProducts = async() => {

        setAddLoading(true);

        await deleteAllProduct();

        setAddLoading(false);

    }

    useEffect(() => {

        if(cartProducts === null){

            getAllProCart();

        }

    })

    if(cartProducts === null){

        return <div 
            style={{width : '100%' , height : '400px' , display : 'flex' , alignItems : 'center' , justifyContent : 'center'}}
        >

            <ThreeCircles

                visible={true} height="80" width="80" color="var(--dark-color)" 
                ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

            />

        </div>

    }

    if(cartProducts.length === 0 || errMessage === 'fail'){

        const emptyData = {

            product : {

                imageCover : require('../../images/notFound.jpg') , 
                title : 'No item in cart'

            },
            price : '0',
            count : '0'

        }

        return <div className={cartCss.container}>

            <div className={cartCss.title}>

                <p>Your Cart Items</p>

                <Link className={cartCss.back} to={'/products'}>Back to shopping</Link>

            </div>

            <div className={cartCss.cards_cont}>

                <CartCard del={false} data={emptyData} />

            </div>

        </div>

    }

    return <React.Fragment>

        {addLoading ? <div className={cartCss.loading_page}>
            <ThreeCircles

                visible={true} height="80" width="80" color="var(--light-color)" 
                ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

            />
        </div> : ''}

        <div className={cartCss.container}>

            <div className={cartCss.title}>

                <p>Your Cart Items</p>

                <Link className={cartCss.back} to={'/products'}>Back to shopping</Link>

            </div>

            <div className={cartCss.cards_cont}>

                <div className={cartCss.delete_all}>

                    <button onClick={deleteCartProducts}>Clear All Items</button>

                </div>

                {cartProducts.map((product , idx) => {return <CartCard key={idx} data={product} />})}

            </div>

            <div className={cartCss.total_price}>

                <p><span>SUB - TOTAL : </span> {cartTotalCount} EGP</p>

                <Link className={cartCss.button} to={'/checkOut'}>Check Out</Link>

            </div>

        </div>

    </React.Fragment>

}
