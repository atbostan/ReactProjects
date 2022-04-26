import React from "react";
import socialLinks from "../../constants/social-links";
import "./Footer.style.scss"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-links-footer">
        {socialLinks.map((link) => {
          return (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          );
        })}
      </div>
      <h4>copyright©2022 <span>Ahmet Tarık Bostan</span> all rights reserved</h4>
    </div>
  );
};

export default Footer;
