import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="brand-name">ShenCarCar</h2>
          <p className="brand-text">
            Our vision is to provide convenience <br />
            and help increase your sales business.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><Link to="/how-it-works">How it works</Link></li>
              <li><Link to="/featured">Featured</Link></li>
              <li><Link to="/partnership">Partnership</Link></li>
              <li><Link to="/business-relation">Business Relation</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Community</h4>
            <ul>
              <li><a href="https://example.com/events">Events</a></li>
              <li><a href="https://example.com/blog">Blog</a></li>
              <li><a href="https://example.com/podcast">Podcast</a></li>
              <li><a href="https://example.com/invite">Invite a friend</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Socials</h4>
            <ul>
              <li><a href="https://discord.com">Discord</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 ShenCarCar. All rights reserved</p>
        <div className="footer-terms">
          <Link to="/privacy-policy">Privacy & Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
