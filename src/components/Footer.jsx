import React from "react";

import "../styles/Footer.css";



const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-top">

        <div className="footer-section">

          <h4>Our Company</h4>

          <ul>

            <li>Our mission</li>

            <li>Our suppliers</li>

            <li>Careers</li>

          </ul>

        </div>



        <div className="footer-section">

          <h4>Help Centre</h4>

          <ul>

            <li>How it works</li>

            <li>FAQs</li>

            <li>Contact us</li>

          </ul>

        </div>



        <div className="footer-section">

          <h4>Follow Us</h4>

          <div className="social-icons">

            <span>Facebook</span>

            <span>Instagram</span>

            <span>TikTok</span>

          </div>

        </div>

      </div>



      <div className="footer-bottom">

        <p>© 2025 MilkMint</p>

      </div>

    </footer>

  );

};



export default Footer;