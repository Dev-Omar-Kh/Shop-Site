import React, { useContext } from 'react';

import checkCss from './check_out.module.css';
import { cartContext } from '../../contexts/cartContext';
import { ThreeCircles } from 'react-loader-spinner';

export default function CheckOut() {

    const {cartProducts , cartTotalCount} = useContext(cartContext);

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

    return <React.Fragment>

        <div className={checkCss.container}>

            <div className={checkCss.check_side + ' ' + checkCss.shapedividers_com_7656 + ' ' + checkCss.shapedividers_com_3913}>

                <div className={checkCss.check_cont}>

                    <div className={checkCss.scroll_check}>

                        <table>

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Count</th>
                                    <th>Price</th>
                                    <th>Total</th>

                                </tr>

                            </thead>

                            <tbody>

                                {cartProducts.map((product , idx) => {

                                    return<tr key={idx}>

                                        <td>{product.product.title.split(' ').slice(0 , 3).join(' ')}</td>
                                        <td>{product.count}</td>
                                        <td>{product.price} EGP</td>
                                        <td>{product.count * product.price} EGP</td>

                                    </tr>

                                })}

                            </tbody>

                        </table>

                        <div className={checkCss.sub_total}>

                            <p><span>TOTAL : </span> {cartTotalCount} EGP</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className={checkCss.check_out_side}></div>

        </div>

    </React.Fragment>

}
