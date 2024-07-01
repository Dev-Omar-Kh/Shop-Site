import React, { useState } from 'react';

import authCss  from './auth.module.css';

import eye from '../../images/icons/eye-icon.svg';
import eyeSlash from '../../images/icons/eye-slash-icon.svg';

export default function Register() {

    const [count, setCount] = useState(0);

    const changeCount = () => {

        setCount(count+1);

    }

    return <React.Fragment>

        <div className={authCss.register_cont}>

            <div className={authCss.left_side}>

                <div className={authCss.title}>LogIn</div>

                <form className={authCss.form}>

                    <div className={authCss.input_cont}>

                        <div className={authCss.loader}></div>
                        <label htmlFor='email'>Email : </label>
                        <input id='email' type="email" />

                    </div>

                    <div className={authCss.input_cont}>

                        <div onClick={changeCount} className={authCss.eye}>

                            <div className={authCss.eye_cont}>

                                <img style={count % 2 === 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eye} alt="eye" />

                                <img style={count % 2 !== 0 ? {opacity : '1' , visibility : 'visible'} : {}} src={eyeSlash} alt="eye-slash" />

                            </div>

                        </div>
                        <label htmlFor='pass'>Password : </label>
                        <input id='pass' type={count % 2 === 0 ? 'password' : 'text'} />

                    </div>

                    <div className={authCss.check_cont}></div>

                    <button className={authCss.submit} type="submit">LogIn</button>

                </form>

            </div>

            <div className={authCss.right_side}>

                <img src={require('../../images/auth.png')} alt="" />

            </div>

        </div>

    </React.Fragment>
}
