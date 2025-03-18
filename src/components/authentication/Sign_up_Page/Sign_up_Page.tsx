import { Link } from 'react-router'; 
import "./Sign_up_Page.css";
import InputFields from '../Inputs&Social-LogIn/InputFields';
import Socials from '../Inputs&Social-LogIn/Socials';

export default function Sign_up_Page() {
    return (
        <div className="sign-up-page">
            <div className="sign-up--container">
                <form className="sign-up-form">
                    <h1 className="sign-up-form--title">Sign Up</h1>
                    <Socials/>
                    
                    <div className="sign-up-form--info--container">
                        <InputFields type="text" placeholder="Username"/>
                        <InputFields type="email" placeholder="Email"/>
                        <InputFields type="password" placeholder="Password"/>
                        <InputFields type="password" placeholder="Confirm Password"/>
                        
                    </div>
                    <button className="sign-up-form--button">Sign Up</button>
                    <p className='login--text'>Have an account?</p>
                    <Link to="/profile" className="login--link">Log in</Link>
                </form>
            </div>
        </div>
    );
}
