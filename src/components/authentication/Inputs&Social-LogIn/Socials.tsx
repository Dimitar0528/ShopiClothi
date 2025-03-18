import google from "/src/assets/google.svg";
import apple from "/src/assets/apple.svg";
import facebook from "/src/assets/facebook.svg";
export  default function Socials() {
   return(
    <div className="login-form--socials">
        
        <button className="login-form--social--button">
        <img src={google} alt="google" width={42}/>
        </button>                               
        
        <button className="login-form--social--button">
        <img src={apple} alt="apple" width={42}/>
        </button>        

        <button className="login-form--social--button">
        <img src={facebook} alt="facebook" width={42}/>
        </button>        
        
    </div>
   );
}