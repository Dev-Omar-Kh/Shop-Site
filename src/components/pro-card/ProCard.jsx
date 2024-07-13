import React, { useContext, useEffect, useState } from 'react';

import productsCss from '../products/products.module.css'
import { Link } from 'react-router-dom';

import cart from '../../images/icons/cart-icon.svg'
import { cartContext } from '../../contexts/cartContext';
import Status from '../status/Status';

export default function ProCard({data}){

    // ====== cut-name ======

    const nameString = data.title

    const nameArray = nameString.split(' ');

    const nameSpace = nameArray.slice(0 , 3);

    if(nameArray.length > 4){

        nameSpace.push('...');

    }

    const name = nameSpace.join(' ');

    // ====== add-to-card ======

    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const {addToCard} = useContext(cartContext)

    const addProductToCard = async (id) => {

        const res = await addToCard(id);

        if(res.status === 'success'){

            setSuccess('Product added to cart');

        }
        else{

            setErrorMsg('Product not added to cart');

        }

    }

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        if(errorMsg || success){

            const timer = setTimeout(() => {

                setVisible(false);

            }, 3000);

            return () => {

                clearTimeout(timer);

                setVisible(true);

            };

        }

    }, [errorMsg , success]);

    return <React.Fragment>

        {success && visible ? <Status img = {'success'} msg = {success} /> : ''}
        {errorMsg && visible ? <Status img = {'error'} msg = {errorMsg} /> : ''}

        <div  className={productsCss.card}>

            <Link to={`/proDet/${data.id}`}>

                <img src={data.imageCover} alt="" />

                <div className={productsCss.det}>

                    <span className={productsCss.cate}>{data.category.name}</span>
                    <span className={productsCss.name}>{name}</span>

                </div>

                <div className={productsCss.price_rate}>

                    <span className={productsCss.price}>{data.price} EGP</span>
                    <span className={productsCss.rate}><i className="fa-solid fa-star"></i> {data.ratingsAverage}</span>

                </div>

            </Link>

            <button onClick={() => addProductToCard(data.id)} className={productsCss.add_card}><img src={cart} alt="add" /></button>

        </div>

    </React.Fragment>

}
