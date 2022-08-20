import React, { useState } from 'react';
import './styles/login.css'
import apple from './assets/Apple.png'
import google from './assets/Google.png'
import facebook from './assets/Facebook.png'
import twitter from './assets/Twitter.png'


const Login = () => {

    const [user, setUser] = useState({
        user_email: '',
        user_password:''
    });


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, ": ", value);
        setUser({ ...user, [name]: value });

    }

    const handleSubmit =(e) => {
        e.preventDefault();
        alert("Verfying User!");
      }

    return (
        <>
        
            <div className="container-login" >
            <div className="wobb-circle">wobb</div>
                <h1 id='login_txt'>Login</h1>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input value={user.user_email} onChange={handleChange} name='user_email' id='user_email' type="email" placeholder='Email' /><i className="fa-solid fa-envelope"></i>
                    <input value={user.user_password} onChange={handleChange} name='user_password' id='user_password' type="password" placeholder='Create Password' /><i className="fa-solid fa-eye"></i>
                    <button id='login_next' type='submit' >NEXT</button>
                </form>
                <div id='forgot_password'><a href='/#'>forgot password?</a></div>
                <div className="brand_logos">
                    <a href="/#"><img src={facebook} alt="facebook" /></a>
                    <a href="/#"><img src={google} alt="google" /></a>
                    <a href="/#"><img src={twitter} alt="twitter" /></a>
                    <a href="/#"><img src={apple} alt="apple" /></a>
                </div>
                <div className="wobb">
                    <hr />
                    <div className="txt">New to wobb?&nbsp; &nbsp;<a href="/#">Sign up </a></div>
                    <div className="copyright">&#169;Copyright 2022-2030 wobb. All rights reserved.</div>
                </div>

            </div>
        </>
    )
}

export default Login