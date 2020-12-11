import React from "react";
import "./cbt.css";
import cbt from "./../../imgs/cbt.png";
import scroll from "./../../imgs/scroll.png";

class Cbt extends React.Component {
  toFamily = () => {
    var elmnt = document.getElementById("family");
    elmnt.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <div className="Cbt">
        <h1 className="cbt-title"> Cognitive Behavioral Therapy </h1>
        <h2 className="cbt-descript">
          Cognitive behavioral therapy (CBT) is a short-term, goal-oriented form
          of psychotherapy that aims to change these negative patterns of
          thinking and change the way a patient feels about himself/herself,
          his/her abilities, and his/her future. We can consider it brain
          training for ADHD.
        </h2>
        <img className="cbt-pic" src={cbt} alt="cognitive behavioral therapy" />
        <img
          className="scroll-down-c"
          id="scroll-c"
          src={scroll}
          alt="pink scroll"
          onClick={this.toFamily}
        />
      </div>
    );
  }
}

export default Cbt;
