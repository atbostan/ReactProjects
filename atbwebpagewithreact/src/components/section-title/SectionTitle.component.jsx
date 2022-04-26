import React from "react";
import "./SectionTitle.style.scss";

const SectionTitle = ({ style, title }) => {
  return (
    <>
      {style ? (
        <div style={style} className="section-title-container">
          <h1>{title || "default title"}</h1>
          <div className="underline"></div>
        </div>
      ) : (
        <div className="section-title-container">
          <h1>{title || "default title"}</h1>
          <div className="underline"></div>
        </div>
      )}
    </>
  );
};

export default SectionTitle;
