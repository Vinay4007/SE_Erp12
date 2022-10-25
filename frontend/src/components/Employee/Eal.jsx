import React from "react";
import Navbar1 from "../Navbar1";
//import {  Link } from "react-router-dom";

const EmploAdv = () => {
  return (
    <div className="eal">
      <Navbar1 />
      <br></br>

      <div class="row">
        <div class="col"></div>
        <div class="col">
          <br />
          <br />
          <div>
            <a href="/newloan" class="btn btn-primary btn-lg">
              Details of New Loan{" "}
            </a>
          </div>
          <br></br>
          <br />
          <div>
            <a href="/lh" class="btn btn-primary btn-lg">
              {" "}
              Loan History{" "}
            </a>
          </div>
          <br></br>
          <br />
          <div>
            <a href="/adv" class="btn btn-primary btn-lg">
              {" "}
              Advances{" "}
            </a>
          </div>
        </div>

        <div class="col"></div>
        <div class="col"></div>

        <div class="col"></div>
      </div>

      <br />
    </div>
  );
};
export default EmploAdv;
