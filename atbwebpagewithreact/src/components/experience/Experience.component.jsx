import React, { useState } from "react";
import jobs from "../../constants/jobs";
import SectionTitle from "../section-title/SectionTitle.component";
import ExperienceDetail from "./experience-detail/ExperienceDetail.component";
import "./Experience.style.scss";

const Experience = ({ jobs }) => {
  const initialState = {
    id: 1,
    company: "Softtech",
    position: "Software Engineer",
    date: "September 2021 - Ongoing",
    descriptions: [
      "Developing and maintaining core banking applications especially Deposit Applications.",
      "Involved in modern technological transformation within the scope of technology.",
      "The technologies using in this context are mainly COBOL, .NET , Java, Javascript, DB2, and Oracle.",
      "Projects I have worked on Automatic Deposition Order (IsCep , Web), Branch Application Screen, Statement Applications (MT940,MT942,Online XML.",
    ],
  };
  const [jobPreview, setjobPreview] = useState(initialState);

  const handleJobPreview = (selectedJobDesc) => {
    setjobPreview((prev) => ({ ...prev, ...selectedJobDesc }));
  };

  let styles = {
    marginTop: "80px",
  };
  return (
    <>
      <SectionTitle style={styles} title={"Experience"} />
      <div className="experience-container">
        <div className="job-buttons">
          {jobs.map((job) => {
            const { company, position, date, descriptions } = job;
            return (
              <button
                onClick={() => handleJobPreview(job)}
                key={job.id}
                className="job-button"
              >
                <span>{company}</span>
              </button>
            );
          })}
        </div>
        <ExperienceDetail selectedJob={jobPreview} />
      </div>
    </>
  );
};

export default Experience;
