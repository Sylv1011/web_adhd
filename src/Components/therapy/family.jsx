import React from "react";
import "./family.css";
import family from "./../../imgs/family.png";

class Family extends React.Component {
  render() {
    return (
      <div className="Family">
        <h1 className="f-title"> Family Therapy </h1>
        <h2 className="f-descript">
          Family Therapy is to help the family to build and strengthen positive
          relationships. Strong, healthy family relationships are especially
          important because it can take several years from initial diagnosis to
          significant improvement. It's a gradual process.{" "}
        </h2>
        <img className="f-pic" src={family} alt="family therapy" />
      </div>
    );
  }
}

export default Family;
