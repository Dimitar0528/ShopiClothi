import { useState } from "react";
import "./Header.css";
import shoppingBag from "/src/assets/bags-shopping.svg";
import profilePic from "/src/assets/circle-user.svg";
import search from "/src/assets/search.svg";
import ShopiClothiLogo from "/src/assets/ShopiClothi_Logo.svg";
import menuIcon from "/src/assets/menu-icon.svg";
import closeIcon from "/src/assets/close-icon.png";
import { NavLink } from "react-router";
import { useShoppingContext } from "../../../contexts/ShoppingContext";
import AnimatedShoppingItem from "../../common/AnimatedShoppingItem/AnimatedShoppingItem";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { wishlistCount, cartCount } = useShoppingContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-wrapper">
      {/* Animation component for flying items */}
      <AnimatedShoppingItem />

      {/* Skip to main content link */}
      <a href="#main-content" className="skip-to-main-content">
        Skip to main content
      </a>

      <div className="left-border-styling"></div>
      <div className="header-content">
        <nav className="navbar">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li className="profile-icon">
              <NavLink to="/profile">
                <img src={profilePic} alt="profile" width="32" />
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button className="menu-toggle" onClick={toggleMenu}>
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt="Menu Icon"
              width="32"
            />
          </button>
        </nav>
        <img
          src={ShopiClothiLogo}
          alt="ShopiClothi Logo"
          width="100"
          className="Logo"
        />
        <ul className="icons">
          <li>
            <NavLink to="/profile">
              <img
                src={profilePic}
                alt="profile"
                width="34"
                className={`profile ${isOpen ? "open" : ""}`}
              />
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/shopping-bag">
              <img
                src={shoppingBag}
                alt="shopping bag"
                width="34"
                className="shopping-bag"
              />
              {cartCount > 0 && (
                <span className="count-badge cart-count">{cartCount}</span>
              )}
              {wishlistCount > 0 && (
                <span className="count-badge wishlist-count">
                  {wishlistCount}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <button className="search-btn">
              <img src={search} alt="search" width="34" className="search" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
