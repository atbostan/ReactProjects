import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./ExperienceDetail.style.scss"
const ExperienceDetail = ({ selectedJob }) => {
  let i = 0;
  const { position, company, date, descriptions} = selectedJob;
  console.log(selectedJob);
  return (
    <div className="experience-detail-container">
      {selectedJob && (
        <div className="experience-detail-info">
          <span className="experience-detail-position">{position}</span>
          <span className="experience-detail-tag">{company}</span>
          <span className="experience-detail-date">{date}</span>
          {descriptions.map((d) => (
            <div  key={i++}className="experience-detail-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{d}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceDetail;
