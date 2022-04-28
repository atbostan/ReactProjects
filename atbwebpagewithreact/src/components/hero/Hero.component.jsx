import React from "react";
import images from "../../constants/images";
import "./Hero.style.scss";
import socialLinks from "../../constants/social-links"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>
          <div className="underline" />
          I'm Tarık
        </h1>
        <h4>Software Engineer And Full Time Learner</h4>
        <Link className="btn" to="contact">CONTACT ME</Link>
        <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                )
              })}
            </div>
      </div>
      <img className="hero-photo" src={images.heroWelcomer} alt="" />
      <div className="hero-right"></div>
    </section>
  );
};

export default Hero;
