import React, { useContext, useEffect, useState } from 'react';

import { cartContext } from '../../contexts/cartContext';
import Status from '../status/Status';
import { ThreeCircles } from 'react-loader-spinner';

import cCartCss from './cart.module.css';

export default function CartCard({data , del}) {

    const [success, setSuccess] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [addLoading, setAddLoading] = useState(false);
    const [updateCount, setUpdateCount] = useState(data.count);

    // increment-decrement-count 

    const increment = () => {

        if(updateCount > 0){

            setUpdateCount(updateCount + 1);

        }

    }

    const decrement = () => {

        if(updateCount > 1){

            setUpdateCount(updateCount - 1);

        }

    }

    const {updateProduct , deleteProduct} = useContext(cartContext);

    const deletePro = async(id) => {

        setAddLoading(true);

        const res = await deleteProduct(id);

        if(res.status === 'success'){

            setSuccess('The item was deleted successfully');

        }
        else{

            setErrorMsg('The item was deleted successfully');

        }

        setAddLoading(false);

    }

    const updateCart = async(id , count) => {

        setAddLoading(true);

        const res = await updateProduct(id , count);

        if(res.status === 'success'){

            setSuccess('The item has been updated successfully');

        }
        else{

            setErrorMsg("The item isn't updated");

        }

        setAddLoading(false);

    }

    const [visible, setVisible] = useState(true);

    useEffect(() => {

        if(errorMsg || success){

            const timer = setTimeout(() => {

                setVisible(false);

                setSuccess(null);
                setErrorMsg(null);

            }, 3000);

            return () => {

                clearTimeout(timer);

                setVisible(true);

            };

        }

    }, [errorMsg , success]);

    return <React.Fragment>

        {success && visible ? <Status display={visible} img = {'success'} msg = {success} /> : ''}
        {errorMsg && visible ? <Status display={visible} img = {'error'} msg = {errorMsg} /> : ''}

        {addLoading ? <div className={cCartCss.loading_page}>
            <ThreeCircles

                visible={true} height="80" width="80" color="var(--light-color)" 
                ariaLabel="three-circles-loading" wrapperStyle={{}} wrapperClass=""

            />
        </div> : ''}

        <div className={cCartCss.card}>

            {del !== false ? <button onClick={() => deletePro(data.product.id)} className={cCartCss.delete_card}><i className="fa-solid fa-xmark"></i></button> : ''}

            <div className={cCartCss.img}>

                <img src={data.product.imageCover} alt="" />

            </div>

            <div className={cCartCss.det}>

                <h3>{data.product.title}</h3>
                <p><span>Price :</span> {data.price} EGP</p>

                <div className={cCartCss.count}>

                    <span onClick={increment} className={cCartCss.operation}><i className="fa-solid fa-plus"></i></span>
                    <span className={cCartCss.counter}> {updateCount} </span>
                    <span onClick={decrement} className={cCartCss.operation}><i className="fa-solid fa-minus"></i></span>

                </div>

                <p><span>Total Price : </span> {data.price * data.count} EGP</p>

            </div>

            {updateCount > 0 ? <div className={cCartCss.update}>

                <button onClick={() => updateCart(data.product.id , updateCount)}>Update</button>

            </div> : ''}

        </div>

    </React.Fragment>

}
