import React from 'react';

import cartCss from './cart.module.css';
import { Link } from 'react-router-dom';

import cart from '../../images/icons/cart-icon.svg';

export default function Cart() {

    return <React.Fragment>

        <div className={cartCss.container}>

            <div className={cartCss.title}>

                <p>Your Cart Items</p>

                <Link className={cartCss.back} to={'/products'}>Back to shopping</Link>

            </div>

            <div className={cartCss.cards_cont}>

                <div className={cartCss.card}>

                    <button className={cartCss.delete_card}><img src={cart} alt="add" /></button>

                    <div className={cartCss.img}>

                        <img src={require('../../images/test.jpg')} alt="" />

                    </div>

                    <div className={cartCss.det}>

                        <h3>Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                        <p><span>Price :</span> 42690 EGP   </p>

                        <div className={cartCss.count}>

                            <span className={cartCss.operation}><i className="fa-solid fa-plus"></i></span>
                            <span className={cartCss.counter}> 0 </span>
                            <span className={cartCss.operation}><i className="fa-solid fa-minus"></i></span>

                        </div>

                        <p><span>Total Price : </span> 0 EGP</p>

                    </div>

                </div>

                <div className={cartCss.card}>

                    <button className={cartCss.delete_card}><img src={cart} alt="add" /></button>

                    <div className={cartCss.img}>

                        <img src={require('../../images/test.jpg')} alt="" />

                    </div>

                    <div className={cartCss.det}>

                        <h3>Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                        <p><span>Price :</span> 42690 EGP   </p>

                        <div className={cartCss.count}>

                            <span className={cartCss.operation}><i className="fa-solid fa-plus"></i></span>
                            <span className={cartCss.counter}> 0 </span>
                            <span className={cartCss.operation}><i className="fa-solid fa-minus"></i></span>

                        </div>

                        <p><span>Total Price : </span> 0 EGP</p>

                    </div>

                </div>

                <div className={cartCss.card}>

                    <button className={cartCss.delete_card}><img src={cart} alt="add" /></button>

                    <div className={cartCss.img}>

                        <img src={require('../../images/test.jpg')} alt="" />

                    </div>

                    <div className={cartCss.det}>

                        <h3>Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                        <p><span>Price :</span> 42690 EGP   </p>

                        <div className={cartCss.count}>

                            <span className={cartCss.operation}><i className="fa-solid fa-plus"></i></span>
                            <span className={cartCss.counter}> 0 </span>
                            <span className={cartCss.operation}><i className="fa-solid fa-minus"></i></span>

                        </div>

                        <p><span>Total Price : </span> 0 EGP</p>

                    </div>

                </div>

                <div className={cartCss.card}>

                    <button className={cartCss.delete_card}><img src={cart} alt="add" /></button>

                    <div className={cartCss.img}>

                        <img src={require('../../images/test.jpg')} alt="" />

                    </div>

                    <div className={cartCss.det}>

                        <h3>Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                        <p><span>Price :</span> 42690 EGP   </p>

                        <div className={cartCss.count}>

                            <span className={cartCss.operation}><i className="fa-solid fa-plus"></i></span>
                            <span className={cartCss.counter}> 0 </span>
                            <span className={cartCss.operation}><i className="fa-solid fa-minus"></i></span>

                        </div>

                        <p><span>Total Price : </span> 0 EGP</p>

                    </div>

                </div>

                <div className={cartCss.card}>

                    <button className={cartCss.delete_card}><img src={cart} alt="add" /></button>

                    <div className={cartCss.img}>

                        <img src={require('../../images/test.jpg')} alt="" />

                    </div>

                    <div className={cartCss.det}>

                        <h3>Victus 16-D1016Ne Laptop With 16-Inch Display Core I7-12700H Processor 16Gb Ram 1Tb Nvidia Geforce Rtx3050 Ti Graphics English/Arabic Ceramic White</h3>
                        <p><span>Price :</span> 42690 EGP   </p>

                        <div className={cartCss.count}>

                            <span className={cartCss.operation}><i className="fa-solid fa-plus"></i></span>
                            <span className={cartCss.counter}> 0 </span>
                            <span className={cartCss.operation}><i className="fa-solid fa-minus"></i></span>

                        </div>

                        <p><span>Total Price : </span> 0 EGP</p>

                    </div>

                </div>


            </div>

        </div>

    </React.Fragment>

}
