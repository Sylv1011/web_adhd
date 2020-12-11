import React from "react";
import "../styles/data.css";
import dRect from "./../imgs/data_rect.png";
import child1 from "./../imgs/child1.png";
import child2 from "./../imgs/child2.png";
import child3 from "./../imgs/child3.png";
import text3 from "./../imgs/text3.png";
import female from "./../imgs/female.png";
import male from "./../imgs/male.png";
import threex from "./../imgs/threex.png";
import house from "./../imgs/house.png";
import fourx from "./../imgs/fourx.png";
import hist1 from "./../imgs/hist1.png";
import hist2 from "./../imgs/hist2.png";
import venn from "./../imgs/Venn.png";
import moneybag from "./../imgs/moneybag.png";
import percent from "./../imgs/42pc.png";

class DataSheet extends React.Component {
  render() {
    return (
      <div className="DataSheet">
        <div className="title-d">
          <h2>ADHD Data Facts</h2>
          <img className="rect" src={dRect} alt="title rectangle" />
        </div>

        <div className="in-children">
          <h2 className="c-title" id="child">
            ADHD in Children
            <div className="box" id="c-box">
              <p>
                The estimated number of children ever diagnosed with ADHD is 6.1
                million (9.4%)
              </p>
            </div>
          </h2>
          <img className="Child1" src={child1} alt="2-5 years" width={130} />
          <img className="Child2" src={child2} alt="6-11 years" width={130} />
          <img className="Child3" src={child3} alt="12-17 years" width={160} />
          <img className="Text3" src={text3} alt="12-17 years" width={80} />
        </div>

        <div className="m-and-f">
          <h2 className="c-title" id="mf">
            Male vs. Female
            <div className="box" id="mf-box">
              <p>Males are at 3 times the risk of females of getting ADHD.</p>
            </div>
          </h2>
          <img className="Female" src={female} alt="female" width={60} />
          <img className="Male" src={male} alt="male" width={52} />
          <img className="Threex" src={threex} alt="3 times" />
        </div>

        <div className="household">
          <h2 className="c-title" id="hh">
            Households
            <div className="box" id="h-box">
              <p>
                Children from primarily English-speaking households are at 4
                times the risk.{" "}
              </p>
            </div>
          </h2>

          <img className="House" src={house} alt="female" />

          <img className="Fourx" src={fourx} alt="4 times" />
        </div>

        <div className="children-tmt">
          <h2 className="c-title" id="tmt1">
            ADHD Treatment for Children
            <div className="box" id="ct-box">
              <p>
                77% people under 18 years old receive various of treaments.
                Among those, 62% of children used medication, 42% are involved
                in Behaviral Treatment.{" "}
              </p>
            </div>
          </h2>
          <img className="Hist1" src={hist1} alt="Histogram1" />
        </div>

        <div className="college-tmt">
          <h2 className="c-title" id="tmt2">
            ADHD Treatment for College Student
            <div className="box" id="cl-box">
              <p>
                Only 70% college students receive treaments. Among those, 51%
                used medication and only 19% are involved in Behaviral
                Treatment. The number is far less.{" "}
              </p>
            </div>
          </h2>
          <img className="Hist2" src={hist2} alt="Histogram2" />
        </div>

        <div className="Others">
          <h2 className="c-title" id="other">
            ADHD and Other Disorders
            <div className="box" id="o-box">
              <p>
                Almost half of the ADHD population is diagnosed with other types
                of disorder.{" "}
              </p>
            </div>
          </h2>
          <img className="Venn" src={venn} alt="Venn diagram" />
        </div>

        <div className="Effects">
          <h2 className="c-title" id="effect">
            Effect on Employment
            <div className="box" id="s-box">
              <p>
                Though ADHD population is less likely to be employeed, they have
                a higher probability to start up their own businesses.{" "}
              </p>
            </div>
          </h2>
          <img className="Money" src={moneybag} alt="Money icon" />
          <p
            className="Salary"
            style={{ color: "black", fontWeight: "bold", fontSize: "28px" }}
          >
            Average Salary
          </p>
          <p
            className="s-num"
            style={{ color: "black", fontWeight: "bold", fontSize: "35px" }}
          >
            $8,900 - $15,400
          </p>
          <img className="Percent" src={percent} alt="42 percent" />
          <p
            className="sal-d"
            style={{ color: "black", fontWeight: "normal", fontSize: "20px" }}
          >
            less likely to be employed full time, compared with adults without
            ADHD
          </p>
        </div>
      </div>
    );
  }
}

export default DataSheet;
