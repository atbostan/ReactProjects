import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar.component";
import Services from "./components/services/Services.component";
import Experience from "./components/experience/Experience.component";
import React, { useState } from "react";
import jobs from "./constants/jobs";
import { render } from "@testing-library/react";
import Hero from "./components/hero/Hero.component";
import Footer from "./components/footer/Footer.component";

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {jobs:[]};
  }

  componentDidMount() {
    this.setState({jobs})
  }

  componentWillUnmount() {
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <Experience jobs={this.state.jobs}  />
        <Footer/>
      </div>
    );
  }
}

export default App;
