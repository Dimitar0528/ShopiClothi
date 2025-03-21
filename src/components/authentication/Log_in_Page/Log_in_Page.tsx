import {Link } from "react-router";
import Socials from "../Inputs&Social-LogIn/Socials";
import InputFields from "../Inputs&Social-LogIn/InputFields";

import  "./Log_in_Page.css";

 export default function Log_in_Page() {
    return (
         <div className="login-page">
            <div className="login--container">
                <form className="login-form">
                    <h1 className="login-form--title">Log in</h1>
                        <div className="login-form--info--container">
                        <Socials/>
                        <p className="separator"><span>or</span></p>
                        <InputFields type="email" placeholder="Email"/>
                        <InputFields type="password" placeholder="Password"/>
                        </div>
                        <button className="login-form--button">Log in</button>
                       
                        <p className="login-form--text">Don't have an account? </p>
                        <Link to="/sign-up" className="signup--link">Sign up</Link>
                        <Link to='/' className="forgoten--password">Forgot your password?</Link>
                </form>

            </div>
        </div>



    )
    
 }

