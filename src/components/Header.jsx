import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Header.css'
import shoppingBag from '../assets/bags-shopping.svg'
import profilePic from '../assets/circle-user.svg'
import search from '../assets/search.svg'
import ShopiClothiLogo from '../assets/ShpoCloti-Logo.svg'

export default function Header() {
    return (
          <header className='header-wrapper'>
            <header className='main-header'>  
                <nav className="navbar">
                        <ul className='nav-links'>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#catalog">Catalog</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>     
                    <img src={ShopiClothiLogo} alt="ShopiClothi Logo" width='100' className="Logo"/>
                
                <ul className='icons' >    
                    <li><a href='Profile'><img src={profilePic} alt="profile" width='32' className="profile-pic"/></a></li>
                    <li><a href='Shopping bag'><img src={shoppingBag} alt="shopping bag" width='32' className="shopping-bag"/></a></li>
                    <li><a href='Search'><img src={search} alt="search" width='32' className="search"/></a></li>
                </ul>
                
            </header>
           </header>
            
    );
}
