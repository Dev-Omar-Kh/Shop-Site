import React, { useContext } from 'react';

import profileCss from './profile.module.css';

import userType from '../../images/icons/profile-icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/authentication';

export default function Profile() {

    const {setToken} = useContext(authContext);

    const navigate = useNavigate();

    const deleteUser = () => {

        localStorage.removeItem('auth_token');
        setToken(null);
        navigate('/auth');

    }

    return <React.Fragment>

        <div className={profileCss.profile_cont}>

            <div className={profileCss.profile_img}>

                <div className={profileCss.img_cont}>

                    <img src={require('../../images/pfp-img.png')} alt="name" />

                </div>

            </div>

            <div className={profileCss.profile_info}>

                <div className={profileCss.main_info}>

                    <h3>Your Name</h3>

                    <p style={{marginBottom : '5px'}} className={profileCss.p}>

                        <i className="fa-regular fa-envelope"></i>
                        <span>Your Email</span>

                    </p>
                    <p className={profileCss.p}> 

                        <img src={userType} alt="type : " /> 
                        <span>Yor Type</span>

                    </p>

                    <div className={profileCss.some_data}>

                        <p><span>0</span> Item in cart</p>

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
