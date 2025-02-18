import { useState } from "react";
import './Header.css';
import shoppingBag from '../../assets/bags-shopping.svg';
import profilePic from '../../assets/circle-user.svg';
import search from '../../assets/search.svg';
import ShopiClothiLogo from '../../assets/ShpoCloti-Logo.svg';
import menuIcon from '../../assets/menu-icon.svg';
import closeIcon from '../../assets/close-icon.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='header-wrapper'>
            <div className='header-content'>
                <nav className="navbar">
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li className="profile-icon">
                            <a href="Profile"><img src={profilePic} alt="profile" width='32' /></a>
                        </li>
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
                    <button className="menu-toggle" onClick={toggleMenu}>
                        <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" width='32' />
                    </button>
                </nav>
                <img src={ShopiClothiLogo} alt="ShopiClothi Logo" width='100' className="Logo" />
                <ul className='icons'>
                    <li><a href='Profile'><img src={profilePic} alt="profile" width='34' className={`profile ${isOpen ? 'open' : ''}`} /></a></li>
                    <li><a href='Shopping bag'><img src={shoppingBag} alt="shopping bag" width='34' className="shopping-bag" /></a></li>
                    <li><a href='Search'><img src={search} alt="search" width='34' className="search" /></a></li>
                </ul>
            </div>
        </header>
    );
}
