import {Link } from "react-router";
import  "./Log_in_Page.css";

 export default function Log_in_Page() {
    return (
         <div className="login-page">
            <div className="login--container">
                <form className="login-form">
                    <h1 className="login-form--title">Log in</h1>
                        <div className="login-form--info--container">
                        <input type="text" className="login-form--input" placeholder="Username" />
                        <input type="password" className="login-form--input" placeholder="Password" />
                        </div>
                        <button className="login-form--button">Log in</button>
                        <p className="login-form--text">Don't have an account? </p>
                        <Link to="/sign-up" className="signup--link">Sign up</Link>
                </form>

            </div>
        </div>



    )
    
 }

