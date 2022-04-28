import React from "react";
import Experience from "../../components/experience/Experience.component";
import Hero from "../../components/hero/Hero.component";
import Services from "../../components/services/Services.component";

const Home = ({jobs}) => {
  return (
    <div>
      <Hero />
      <Services />
      <Experience jobs={jobs} />
    </div>
  );
};

export default Home;
