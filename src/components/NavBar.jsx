import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import cart from "../assets/cart.png";
import logo from "../assets/logo.png";
import signup from "../assets/sign-in.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="top-navbar">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="MilkMint Logo" className="logo-img" />
          </Link>
        </div>

        <input
          type="text"
          placeholder=" 🔍︎  Search our products"
          className="search-bar"
        />

        <div className="nav-icons">
          <Link to="/basket" className="icon">
            <img src={cart} alt="Basket" className="icon-img" />
           
          </Link>
          <Link to="/login" className="icon">
            <img src={signup} style={{height:'45px'}} alt="Sign In" className="icon-img" />
            
          </Link>
        </div>
      </nav>

      <nav className="bottom-navbar">
        <ul>
          <li><Link to="/products">Our products</Link></li>
          <li><Link to="/how-it-works">How it works</Link></li>
          <li><Link to="/suppliers">Our suppliers</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
