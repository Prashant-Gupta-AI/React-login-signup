import React, {useState} from 'react';
import './styles/login.css'
import apple from './assets/Apple.png'
import google from './assets/Google.png'
import facebook from './assets/Facebook.png'
import twitter from './assets/Twitter.png'


const Login = () => {

    const [user, setUser] = useState({
        phonenumber:'',
        email:'',
      });
      

    const handleChange = (e) =>{

    }
    return (
        <>
            <div className="container-login" >
                <h1 id='login_txt'>Login</h1>
                <form>
                    <input value={user.email} onChange={handleChange} name='user_email' id='user_email' type="email" placeholder='Email' /><i className="fa-solid fa-envelope"></i>
                    <input value={user.password} onChange={handleChange} name='user_password' id='user_password' type="password" placeholder='Create Password' /><i className="fa-solid fa-eye"></i>
                    <button id='login_next' type='submit' >NEXT</button>
                </form>
                <div id='forgot_password'><a href='/#'>forgot password?</a></div>
                <div className="brand_logos">
                    <a href="/#"><img src={facebook} alt="facebook" /></a>
                    <a href="/#"><img src={google} alt="google" /></a>
                    <a href="/#"><img src={twitter} alt="twitter" /></a>
                    <a href="/#"><img src={apple} alt="apple" /></a>
                </div>
            </div>
        </>
    )
}

export default Login