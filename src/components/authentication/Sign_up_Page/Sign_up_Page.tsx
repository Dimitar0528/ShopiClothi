import { Link } from 'react-router'; 
import "./Sign_up_Page.css";

export default function Sign_up_Page() {
    return (
        <div className="sign-up-page">
            <div className="sign-up--container">
                <form className="sign-up-form">
                    <h1 className="sign-up-form--title">Sign Up</h1>
                    <div className="sign-up-form--info--container">
                        <input type="text" className="sign-up-form--input" placeholder="Username" />
                        <input type="email" className="sign-up-form--input" placeholder="Email" />
                        <input type="password" className="sign-up-form--input" placeholder="Password" />
                        <input type="password" className="sign-up-form--input" placeholder="Confirm Password" />
                    </div>
                    <button className="sign-up-form--button">Sign Up</button>
                    <p className='login--text'>Have an account?</p>
                    <Link to="/profile" className="login--link">Log in</Link>
                </form>
            </div>
        </div>
    );
}
