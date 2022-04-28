import React from "react";
import SectionTitle from "../../components/section-title/SectionTitle.component";
import images from "../../constants/images";
import "./About.style.scss";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img src={images.about} alt="about_photo" />
      </div>
      <div className="about-right">
        <SectionTitle title={"About Me"} />
        <p className="short-intro">
          As a person who have been a basketball player and team captain in the
          regional league for 13 years and also been a basketball coach for 5
          years I believe in hardworking and disciplined life. And also these
          two experience taught me how to be a team player and how to manages
          people.Aside of the technical skills empathy, good communication and
          team work is the most important three things in professional life. As
          for technical background , I had a bachelor degree in Statistic,Ankara
          University and also had a master's degree in Software
          Engineering,Hacettepe University. I have worked all kind of companies
          which from start-up to more corporate company. All my experiences
          improve my skills various ways such as when I was working at my first
          company, I improve my code-reading skills. Thanks to this ability I
          can easily learn different programming languages and develop new
          features. This is one of my biggest weapon the other one is I can
          research well using google and find a solution(s) existing
          problem(s).And finally to sum up my goals in future this is a perfect
          quotation below.
        </p>
        <div className="quote-section">
          <p className="quote">Knowledge Is Power - Francis Bacon </p>
          <img className="quote-comma-left" src={images.quoteComma} alt="" />
          <img className="quote-comma-right" src={images.quoteComma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
