import React from "react";
import "./Services.style.scss";
import services from "../../constants/services";
import SectionTitle from "../section-title/SectionTitle.component";
export const Services = () => {
  return (
    <div className="services-container">
      <SectionTitle title={"Services"} />
      <div className="services-cards">
        {services.map((service) => {
          const { id, icon, title, text, soon } = service;
          return (
            <article key={id} className="service-card">
              {soon && <div className="soon-tag">Coming Soon</div>}
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
