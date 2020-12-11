import React from "react";
import "./overview.css";
import scroll from "./../../imgs/scroll.png";

class Overview extends React.Component {
  toGroup = () => {
    var elmnt = document.getElementById("group");
    elmnt.scrollIntoView();
  };
  render() {
    return (
      <div className="Overview">
        <h2 className="Over-intro">
          ADHD is best treated with a combination of behavioral therapy and
          medication..
        </h2>
        <img
          className="scroll-down"
          src={scroll}
          alt="pink scroll"
          onClick={this.toGroup}
        />
        <h2 className="Down">Scroll Down</h2>
      </div>
    );
  }
}

export default Overview;
