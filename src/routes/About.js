import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>“My First React Study - Beautiful React!”</span>
      <span>zinirun 2020</span>
    </div>
  );
}

export default About;
