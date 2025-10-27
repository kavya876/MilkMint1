import React from "react";
import "../styles/Footer.css";
import appStore from '../assets/footer_images/appstore.png'
import playStore from '../assets/footer_images/playstore.png'
import fb from '../assets/footer_images/fb.png'
import insta from '../assets/footer_images/insta.png'
import twiter from '../assets/footer_images/twiter.png'
import award1 from '../assets/footer_images/award1.png'
import award2 from '../assets/footer_images/award2.png'
import award3 from '../assets/footer_images/award3.png'
import award4 from '../assets/footer_images/award4.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Our Company</h4>
          <ul>
            <li>Our mission</li>
            <li>Our suppliers</li>
            <li>Become a supplier</li>
            <li>Careers</li>
            <li>Sustainability Blog</li>
            <li>In the news</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Help Centre</h4>
          <ul>
            <li>How it works</li>
            <li>FAQs</li>
            <li>Our Locations</li>
            <li>Contact us</li>
            <li>Refferal Scheme</li>
            <li>Legal</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Download our app</h4>
          <div className="app-stores">
            <a href="https://play.google.com/store/apps/details?id=com.mobile.modernmilkmanuser" target="_blank">
              <img src={playStore} alt="playstore"/>
            </a>
              <a href="https://apps.apple.com/us/app/the-modern-milkman/id1448349321?ls=1" target="_blank">
                <img src={appStore} alt="appstore"/>
              </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/TheModernMilkman" target="_blank">
                <img src={fb} alt="Face Book"/>
              </a>
              <a href="https://www.instagram.com/modernmilkmanuk/#" target="_blank">
                <img src={insta} alt="Instagram"/>
              </a>
              <a href="https://www.tiktok.com/@modernmilkman_" target="_blank">
                <img src={twiter} alt="Twitter"/>
              </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="awards">
          <img src={award1} alt="Award1" className="award1"/>
          <img src={award2} alt="Award2"/>
          <img src={award3} alt="Award3"/>
          <img src={award4} alt="Award4" style={{width:'160px'}}/>
        </div>
        <p style={{color:'black',marginBottom:'20px'}}>© 2025 MilkMint | All rights reserved</p>
        <p style={{color:'black'}}>* More info on our fight against un-necessary packaging and food waste can be found in our Glass Bottle Life Cycle Analysis.</p>
      </div>
    </footer>
  );
};

export default Footer;