import React, { useContext, useEffect, useState } from 'react';

import profileCss from './profile.module.css';

import userType from '../../images/icons/profile-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authentication';
import { jwtDecode } from 'jwt-decode';
import { cartContext } from '../../contexts/cartContext';

export default function Profile() {

    const [userName, setUserName] = useState(null);
    const [userRole, setUserRole] = useState(null)

    const {setToken} = useContext(authContext);
    const {cardItems} = useContext(cartContext);

    const navigate = useNavigate();

    const deleteUser = () => {

        localStorage.removeItem('auth_token');
        setToken(null);
        navigate('/auth');

    };

    useEffect(() => {

        const res = jwtDecode(localStorage.getItem('auth_token'));
        setUserName(res.name)
        setUserRole(res.role)

    } , []);

    return <React.Fragment>

        <div className={profileCss.profile_cont}>

            <div className={profileCss.profile_img}>

                <div className={profileCss.img_cont}>

                    <img loading='lazy' src={require('../../images/pfp-img.png')} alt="name" />

                </div>

            </div>

            <div className={profileCss.profile_info}>

                <div className={profileCss.main_info}>

                    <h3>{userName}</h3>

                    <p className={profileCss.p}> 

                        <img loading='lazy' src={userType} alt="type : " /> 
                        <span>{userRole}</span>

                    </p>

                    <div className={profileCss.some_data}>

                        <p><span>{cardItems}</span> Item in cart</p>

                            <span className={profileCss.data_break}></span>

                        <p><span>0</span> Success purchase</p>

                    </div>

                    <div className={profileCss.profile_actions}>

                        <Link className={profileCss.action + ' ' + profileCss.link} to='/auth'>Edit Profile</Link>

                        <button onClick={deleteUser} className={profileCss.action + ' ' + profileCss.btn}>Delete Account</button>

                    </div>

                </div>

                <div className={profileCss.favorite_cate}>

                    <h3>Favorite Categories :</h3>

                    <div className={profileCss.cate_cont}>

                        <span>Fashion </span>
                        <span>Food </span>
                        <span>Sodas </span>
                        <span>Brands </span>
                        <span>Fashion </span>
                        <span>Food </span>
                        <span>Sodas </span>
                        <span>Brands </span>

                    </div>

                </div>

            </div>

        </div>

    </React.Fragment>

}
